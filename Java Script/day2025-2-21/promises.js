// what is promises?
// promises are used to handle asynchronous in javascript
// they are having  three response of promises 1.pending 2.resolved 3.rejected
// promises take two arguments in function parameter 1.resolve 2.reject


// const myPromise=new Promise((resolve,reject) => {
//     let success=false;
//     if(success){
//         resolve("success");
//     }
//     else{
//         reject("falied");
//     }
// });
// myPromise
// .then((message) =>{
//     console.log("success:",message);
// })
// .catch((error) => {
//     console.log("error:",error);
// })
// .finally(() => {
//     console.log("operation finished");
// });

//promise chaining
// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve("data fetched"),2000);
//     });
// }

// fetchData()
// .then((data)=>{
//     console.log(data);
//     return "processing the data......";
// })
// .then((message)=>{
//     console.log(message);
//     return "Data processed successfully.....";
// })
// .then(console.log)
// .catch(console.error)

//handling of errors in promises....
// const fetchData=()=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => reject("❌data not feteched"),2000);
//     });
// };
// fetchData()
// .then((data)=>console.log(data))
// .catch((error)=> console.error(error))
// .finally(()=> console.log("✔operation finished"));


//promise.all
// const promise1=Promise.resolve("task 1 resolved");
// const promise2=new Promise((resolve)=>setTimeout(()=> resolve("task2 is resolved"),2000));
// const promise3=Promise.resolve("task 3 resolved");
// Promise.all([promise1,promise2,promise3])
// .then((result)=> console.log("all task has been:",result))
// .catch((error)=> console.error(error));

// Promise.allSettled
// const p1=Promise.resolve("task1 is resolved");
// const p2=Promise.reject("task2 is rejected");
// Promise.allSettled([p1,p2])
// .then((result) => console.log(result))
// .catch((error)=>console.error(error))

// const p1=Promise.resolve("task 1 resolved");
// const p2=Promise.reject("task2 is rejected");
// const p3=new Promise((resolve)=>setTimeout(()=> resolve("task3 is resolved"),2000));
// const p4=new Promise((reject)=>setTimeout(()=> reject("task4 is rejected"),2000));
// Promise.allSettled([p1,p2,p3,p4])
// .then((result)=> console.log("all task has been:",result))
// .catch((error)=> console.error(error));

//Promise.race
// const p1=new Promise((resolve)=> setTimeout(()=> resolve("task1 is resolved"),10));
// const p2=new Promise((resolve)=> setTimeout(()=> resolve("task2 is resolved"),100));
// const p3=new Promise((resolve)=> setTimeout(()=> resolve("task3 is resolved"),1));
// Promise.race([p1,p2,p3])
// .then(console.log)
// .catch(console.error)

// Promise.any
const p1=Promise.reject("Task1 is rejected");
const p2=Promise.resolve("task2 is resolved");
const p3=Promise.reject("task3 is rejected");
Promise.any([p1,p2,p3])
.then(console.log)
.catch(console.error);


