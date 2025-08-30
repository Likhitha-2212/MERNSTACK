//merging of arrays using concat
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// console.log(arr1.concat(arr2));

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let result=[...arr1,...arr2];
// console.log(result);

// let arr3=["apple","orange","mango","grapes"];
// let{first,second,...others}=arr3;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(others);


// let emp={
//     id:101,
//     name:"likki",
//     age:20,
//     salary:40000,
//     depatment:"CSE",
// };
// let{id,name,...rest}=emp;
// console.log(id);
// console.log(name);
// console.log(rest);


let details={
    fname:"likhi",
};
let{fname,lname="koyyana"}=details;
console.log(fname);
console.log(lname);


// let std={
//     name:"likki",
//     lname:"koyyana",
//     college:"AITAM",
// }
// let{name,age=20,...rest}=std;
// console.log(age);
// console.log(lname);
// console.log(name);
// console.log(college);


// let obj1={
//     name:"likku",
//     age:20,
//     address:{
//         city:"tekkali",
//         state:"srikakulam",
//     },
// };
// let obj2=obj1;
// obj2.name="likhitha";
// obj2.address.city="pune";
// console.log(obj2);
// console.log(obj1);

// let obj2={...obj1};
// obj2.name="likhitha";
// obj2.address.city="pune";
// console.log(obj2);
// console.log(obj1);

// let obj1={
//     name:"likki",
//     age:20,
//     address:{
//         city:"tekkali",
//         state:"srikakulam",
//     },
// };
// let obj2=Object.assign({},obj1);
// console.log(obj2);
// obj2.name="likhitha";
// obj2.address.city="pune";
// console.log(obj2);
// console.log(obj1);

//deep copy
// let obj1={
//     name:"vijay",
//     age:32,
//     address:{
//         city:"tekkali",
//         state:"srikakulam",
//     },
// };
// let obj2=JSON.parse(JSON.stringify(obj1));
// obj2.name="likhitha";
// obj2.address.city="pune";
// console.log(obj2);
// console.log(obj1);


// let response={
//     status:200,
//     data:{
//         user:{
//             name:"jio",
//             age:23,
//             address:"delhi",
//         },
//     },
// };
// let{data:{user:{name,age,address}}}=response;
// console.log(name);
// console.log(age);
// console.log(address);