// async function fetchUsers()
// {
//     try{
//         const response  = await fetch("https://api.github.com/users");
//         if(!response.ok){
//             throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     }
//     catch(error){
//         console.log(error);
//         throw error;
//     }
// }
// fetchUsers();

async function fetchUsers() {
    try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const usernames = data.map(user => user.login);
        console.log(usernames);
        return usernames;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

fetchUsers();
