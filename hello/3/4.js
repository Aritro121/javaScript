/*  *//* function OnePlusAvg(x,y){
    console.log("Done.");
    return (1+(x+y)/2)
}

function EndGame(p,q){
    console.log("Done.");
    return (p*q)/2
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Avarage of a and b", OnePlusAvg(a,b));
console.log("One plus Avarage of b and c", OnePlusAvg(b,c));
console.log("One plus Avarage of a and c", OnePlusAvg(a,c));

console.log("---------------------------------------------");

console.log("The End game of b and c", EndGame(b,c));
console.log("The End game of a and b", EndGame(a,b));
console.log("The total of End game and OnePlusAvg = ", OnePlusAvg(a,b) + EndGame(a,b));

console.log("............................................................................!");
 */

/* const sum = (a,b) =>{
    return (a * b)
}
console.log(sum(4,2)); */


/* const hello =()=> {
    console.log("Hello, how are you, Youta?");
    return "hi"
}
let v = hello();
console.log(v); */

const me = (x,y)=>{
    return (x+y)/2
}

let a = 5;
let b = 2;
let c = 12;
let d = ("Hello how are you");

console.log("The ans is: ",me(a,c));
console.log(d+", Youre ans is ", me(b,c));
console.log(d);