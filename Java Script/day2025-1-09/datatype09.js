// DataTypes in Javascript
// 1.primitiveDatatypes==>Number,string,boolean,undefined,null,Symbol
// 2.Non-primitive data types ==> Object,array and function

// 1.Number: it is used to represent both integer and floating point numbers. range of this number is 2^53.if your number is greater than that you can use BigInt.
// 2.string: It is used to represent a sequence of characters it is enclosed in single quotes(''),double quotes("") or backticks('').
// 3.boolean : it is used to represent a logical Value.it can have two values true or false.
// 4.undefined:it is used to represent an undefined value.
// 5.null: it is used to represent an empty value.
// 6.symbol:it is used to represent an unique value.


// let studentName="likki";
// let studentAge=20;
// let studentIsMale=false;
// let salary=5000.00;
// let studentMarks=null;
// let studentAddress;
// console.log(studentName);
// console.log(studentAge);
// console.log(studentIsMale);
// console.log(salary);
// console.log(studentMarks);
// console.log(studentAddress);

// typeof function()in javascript==> it is used to check the datatype of the variable
// let studentName="likki";
// let studentAge=20;
// let studentIsMale=false;
// let salary=5000.00;
// let studentMarks=null;
// let studentAddress;
// console.log(typeof studentName);
// console.log(typeof studentAge);
// console.log(typeof studentIsMale);
// console.log(typeof salary);
// console.log(typeof studentMarks);
// console.log(typeof studentAddress);

// object==>it is used to represent a collection or key-value pairs
// let person={
//     name:"likki",
//     age:20,
//     IsMale:false,
//     fee:50000.00,
//     marks:500
// };
// console.log(person);
// console.log(typeof person);
// console.log(person.age);

//Array: it is used to represent a collection of elements
// let cars=["bmw","toyata","tata","ford"];
// console.log(cars);

//Function in javascript==>function is a block of code that performs a specific task.function is only execute when it is called or invoked.and function is used to avoid code duplication.
//how to create function
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(5,5));
// console.log(add(89,58));
// console.log(add(100,200));
// console.log(add(89.96,58.0));

// what is conditional statement in js: it is used to perform actions for different conditions
//     1.if
//     2.else
//     3.else if
//     4.switch
// let candidateAge=20;
// if(candidateAge>=18){
//     console.log("your are eligible to vote");
// }
// else{
//     console.log("you are not eligible to vote");
// }
// let age=18;
// if(age>18){
//     console.log("your are eligible to vote");
// }
// else if(age==18){
//     console.log("your are eligible to vote but you are not an adult"); 
// }
// else{
//     console.log("you are not eligible to vote");
// }

// switch statement in js:it is used perform different actions based on different conditions
// let day=6;
// switch(day){
//     case 1:
//         console.log("Today is sunday");
//         break;
//     case 2:
//         console.log("Today is monday");
//         break;
//     case 3:
//         console.log("Today is tuesday");
//         break;
//     case 4:
//         console.log("Today is wednesday");
//         break;
//     case 5:
//         console.log("Today is thrusday");
//         break;
//     case 6:
//         console.log("Today is friday");
//         break;
//     case 7:
//         console.log("Today is saturday");
//         break;
//     default:
//         console.log("Invalid Day");
//         break;
// };
// let month=121;
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("october");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid Month");
//         break;
// };
 
// loops:it is used to execute a block of code multiple timews until the condition is true
// 1.for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// 2.while loop
// let i=1;
// while(i<10){
//     console.log(i);
//     i++;
// }
// 3.do while loop
let i=1;
do{
    console.log(i);
    i++;
}while(i<=10);