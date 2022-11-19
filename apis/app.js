// Creating a promise

new Promise((resolve, reject) => {
    resolve();
})

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('red', 1000))


const result = fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("Resolved", res);
        return res.json()
    })
    .then(data => console.log("JSON done", data))
    //const result = res.json();
    //console.log(result.body)
    //return result
    .catch(e => {
        console.log("Error", e);
    })


/*
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request…");


setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "blue";
    }, 2000)
}, 2000)

const result = fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("Resolved", res)
        return res.json()
    })
    .catch(e => {
        console.log("Error", e);
    })

*/



/*

const characters = document.querySelector("#starWars");
const result = fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("Resolved", res)
        return res.json()
    })
    .then(data => {
        console.log("Data", data.name);
        const newLI = document.createElement('LI');
        newLI.innerText = data.name;
        characters.append(newLI);
    })
    .catch(e => {
        console.log("Error", e);
    })

*/

/*

const getStarWarsCharacter = () => {
    const res = axios.get("https://swapi.dev/api/person/1");
    console.log(res)
}

*/