function greet(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
function msg(){
    console.log("welcome to aitam training");
}
greet("likhi",msg);

function calculate(a,b,callback){
    const result=a+b;
    callback(result);
}
function showresult(result){
    console.log(`result is:${result}`);
}
calculate(4,6,showresult);

//asynchronous
console.log("loading data....");
setTimeout(()=>{
    console.log("data loaded....after delay");
},100);
console.log("process ended");


function step1(callback){
    console.log("Step1 called");
    callback();
}
function step2(callback){
    console.log("Step2 called");
    callback();
}
function step3(callback){
    console.log("Step3 called");
    callback();
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all steps are completed");
        })
    })
})