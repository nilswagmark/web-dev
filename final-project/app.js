/* 
/* for (let i=100; i>=0; i-=20) {
    let userInput = prompt("Type a number:");
    if (userInput <= 10) {
        console.log("Too low, try again")
    }
} */


/* fruitList = ["apple", "banana", "pear"]
for (let i = 0; i < fruitList.length; i++) {
    console.log(fruitList[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`)
    for (let j = 1; j<4; j++) {
            console.log(`j is ${j}`)
        }
} */


/* let num = 0
while (num<10) {
    console.log(num);
    num += 1;
}
 */

const btn = document.querySelector("#v2");

const MyMath = {
    PI: 3.1415,
    square: function(num) {
        return num*num;
    }
}

const add = function (x,y) {
    return x+y;
}

/* 
let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "quit") {
        break;
    }
}
console.log("Ok, you win...")
 */


let year1 = "1985";
let year2 = "1986";



lista1 = [1,2,3];
lista2 = [4,5,6];
lista3 = lista1.concat(lista2);
console.log(lista3);



myObject = {name: "Nils", age: 23, profession: "Account Manager"}

for (let element in myObject) {
    console.log(`${element} is ${myObject[element]}`);
}


/* Functions */

function addingNumbers(x,y) {
    let sum = x+y;
    return sum;
}


let filmArray = [
    {
        title: "No country for old men",
        score: 90
    },
    {
        title: "Mamma Mia",
        score: 76
    }
]

/* for (element in filmArray) {
    console.log(filmArray.element)
};

const firstNames = fullNames.map(function(element) {
    return element.first;
}) */


/* arrow functions */

const square = (x) => {
    return x * x;
}

const sum = (x,y) => {
    return x + y
}

/* const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
} */


const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const subtract = (x,y) => x - y;


// setTimeout & setIntervall

const greeting = () => {
    console.log("Hello, welcome!")
    
    console.log("Are you still there?")
}


setTimeout( () => {
    console.log("hello")
}, 3000 )


/* setInterval( () => {
    console.log(Math.random());
}, 3000
) */






NumbersList = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = NumbersList.filter(n => n % 2 == 0);



/* The DOM system */


console.dir(document)


















 