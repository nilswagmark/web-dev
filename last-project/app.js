// const password = prompt("Please enter a new password:")
/*

let btn = document.querySelector("#v2")
const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    console.log("KEYDOWN")
    console.log(e.key)
    console.log(e.code)
    console.log(e)
})

*/


/*
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;
}

btn.addEventListener("click", makeRandColor)
*/

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    input.value = ""
});





/*
btn.addEventListener("click", (e) => {
    console.log(e);
})

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP")
            break;
        case 'ArrowDown':
            console.log("DOWN")
            break;
        default:
            console.log("IGNORE")
    }
})

*/

setTimeout(() => {
    console.log("hello");
}, 3000)



/*
setInterval(function() {
    console.log("Hej!")
}, 2000)
*/

/*

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubles = numbers.map(function(num) {
    return num * 2;
})

function print(element) {
    console.log(element);
}
numbers.forEach(function(el) {
    console.log(el);
})


const MyMath = {
    PI: 3.141592,
    square: function(num) {
        return numb * numb;
    },
}


const add = (x, y) => {
    return x + y;
}

const square = function(x, y) {
    return x + y;
}




function numTimes(string, numTimes) {
    for (let i = 0; i < numTimes; i++) {
        console.log(string);
    }
}


let toDoList = ["Nils", "Joel", "Albin"]

function toDoer(toDoList) {
    let input = prompt("What would you like to do?")
    while (input.toLowerCase() !== "quit") {
        input = prompt("What would you like to do?")
        if (input.toLowerCase() === "list") {
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i} ${toDoList[i]}`)
            }
        } else if (input.toLowerCase() === "new") {
            const newItem = prompt("What do you want to add=")
            toDoList.push(newItem);
            console.log(`${newItem} added to the list`);
        } else if (input.toLowerCase() === "delete") {
            const index = parseInt(prompt("What is the index of the item you want to delete?"))
            if (!Number.isNaN(index)) {
                console.log(index);
                const deleted = toDoList.splice(index, 1);
                console.log(`We deleted ${deleted}`);
            } else {
                console.log("Unknown index")
            }
        }
    }
    console.log("The app was quit")

}

*/