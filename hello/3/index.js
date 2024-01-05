const prompt = require("prompt-sync")();

/* let age = prompt("What is your age? ");
age =Number.parseInt(age)

switch(age){
    case 12:
        console.log("Your age is 12.");
        break
    case 13:
        console.log("Your age is 13.");
        break
    case 14:
        console.log("Your age is 14.");
        break
    case 15:
        console.log("Your age is 15.");
        break
    default:
        console.log("Your not spacial");
} */

/* let num = prompt("What is the number? ");
num = Number.parseInt(num)
if(num %2==0 && num%3==0){
    console.log("Your number is divisible by 2,3");
}
else{
    console.log("Your number is not divisible by 2,3");
} */

let age = prompt("What is your age?");
let a = age>18? "You can drive":"You can't drive"
console.log(a);