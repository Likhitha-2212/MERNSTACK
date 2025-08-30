console.log("number is -ve or +ve:");
let a=-2;
console.log(a<0 ? "Negative" : "Positive");

console.log("divisible by 5:");
let b=12;
console.log((b%5==0) ? "It is divisible by 5" : "it is not divisible by 5");

console.log("divisible by 3:");
let c=10;
console.log((c%3==0) ? "It is divisible by 3" : "it is not divisible by 3");

console.log("prime:");
let d=3;
let count =0;
for(let i=2;i<d;i++){
    if(d%i==0){
        count++;
    }
}
if(count>0){
    console.log("it is not prime");
}else{
    console.log("it is  prime");
}

console.log("problem:");
let n=100;
for(let i=1;i<=100;i++){
    if(i%3==0&&i%5==0){
        console.log("Buzzfizz");
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0){
            console.log("Buzz");
    }else{
            console.log(i);
    }
}