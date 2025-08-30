// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,2,3));

// currying in javascript
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(sum(1)(2));