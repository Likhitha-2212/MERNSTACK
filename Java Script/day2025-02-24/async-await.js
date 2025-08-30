// async function greet(){
//     return "hello world";
// }
// greet();
// greet().then(console.log);

// async function fetchData(){
//     let result = await Promise.reject('Data  error');
//     console.log(result);
// }
// fetchData();

// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("user data"),2000);
//     });
// }
// async function displayUser(){
//     console.log("fetching the data please wait......");
//     let user=await getUser();
//     console.log("user");
//     console.log("data fetched successfully");
// }
// displayUser();

// let delay=(ms)=> new Promise((resolve)=>setTimeout(resolve,ms));
// async function runTask(){
//     console.log("task1 is started");
//     await delay(3000);
//     console.log("Task1 is completed")
//     console.log("task2 is started");
//     await delay(3000);
//     console.log("task2 is completed")
//     console.log("task3 is started");
//     await delay(3000);
//     console.log("task3 is completed");
//     await delay(3000);
// }
// runTask();

// const fetchUser=()=>new Promise((resolve)=>setTimeout(()=>resolve('User data'),5000));
// const fetchPost=()=>new Promise((resolve)=>setTimeout(()=>resolve('post data'),3000));
// async function fetchAllData(){
//     const[user,post]=await Promise.all([fetchUser(),fetchPost()]);
//     console.log(user,post);
// }
// fetchAllData();

// const delay=(ms)=> new Promise((resolve)=> setTimeout(resolve,ms));
// async function runTask() {
//     const tasks=[1000,2000,3000];
//     for (const time of tasks){
//         console.log(`waiting ${time/1000} seconds...`);
//         await delay(time);
//         console.log("task done");
//     }
// }
// runTask();

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// async function runTask() {
//   const tasks = [1000, 2000, 3000];
//   let index = 0;
//   while (index < tasks.length) {
//     const time = tasks[index];
//     console.log(`waiting ${time / 1000} seconds.....`);
//     await delay(time);
//     console.log("task done");
//     index++;
//   }
// }
// runTask();

// async function getuserdata(){
//     try{
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error(error);
//     }
// }
// getuserdata();

// async function getuserdata(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log(data)
//         const {userId,id,title,completed} =data;
//         console.table([userId,id,title,completed]);
//     }catch(error){
//         console.error(error);
//     }
// }
// getuserdata();

// async function newApi(){
//     try{
//         let res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data=await res.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// newApi();

// async function newApi(){
//     try{
//         let res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data=await res.json();
//         console.table(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// newApi();

// async function getUserData() {
//     try {
//         const response = await fetch("https://dummyjson.com/products/1"); 
//         const data = await response.json();
//         console.log("Full Product Data:", data);
//         let { title, description, price, rating } = data;
//         const productData = [
//             { Key: "Title", Value: title },
//             { Key: "Price", Value: price},
//             { Key: "Rating",Value: rating }
//         ];
//         console.table(productData);
//     } 
//     catch(error) {
//         console.error("Error fetching data:", error);
//     }
// }
// getUserData();


async function getUserData(){
    try{
        let response=await fetch("https://dummyjson.com/products/1");
        const data=await response.json();
        const{title,description,category,price,reviews}=data;
        console.log(reviews);
        reviews.forEach((element)=>{
            const{rating,comment}=element;
            console.table([{rating,comment}])=element;
        });
    }
    catch(error){
        console.log(error);
        }
}
getUserData();