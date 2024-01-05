const prompt = require("prompt-sync")();

// For Loop--
let marks = {
    Aritro: 42,
    Zoro: 21,
    Hinata: 32,
    Luffy: 33,
    Nami: 11
}
for(i=0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

console.log("-------------------------------------");

// For in Loop--
for(let x in marks){
    console.log("The marks of " + x + " are " + marks[x]);
}

console.log("----------------------------------------");

//While Loop--
let un = 32;
let px 
while(px != un){
    console.log("Wrong ans. try again.")
    px = prompt("Enter a number.");
}
console.log("That's the correct answer.");

//Function --
const men = (a, b, c, d)=> {
    return ((a+ b+ c+ d)/4)*2
}
console.log("The total number is ", men(5,4,3,2));