let toDoList = ["study", "work"];
let command = prompt("What do you want to do?")
function add(x, y) {
    console.log(x + y);
}
while (command !== "quit") {
    if (command === "list") {
        for (element of toDoList) {
            console.log(element);
        }
    }
    else if (command === "add") {
        let newElement = prompt("What do you want to add?");
        toDoList.push(newElement);
        console.log(`You added ${newElement} to list`);
    }
    else if (command === "delete") {
        index = prompt("Enter the index you want to delete:");
        toDoList.splice(index, 1);
        console.log(`You deleted ${toDoList[index]}`);
    }
    command = prompt("What do you want to do?");
}

console.log("You just quit the app");

function subtract(x,y) {
    console.log(x-y)
}


/* // --- begin mavenoid embedded troubleshooter ---
(function (m, a, v, e, n, o, i, d) {
    d = m.createElement(e); d.async = true; d.src = "https://app.mavenoid.com" + v;
    i = m.getElementsByTagName(e)[0]; i.parentNode.insertBefore(d, i); n[o] = n[o] || [];
})(document, 0, "/embedded/embedded.js", "script", window, "mavenoid");
// --- end mavenoid embedded troubleshooter ---

mavenoid.config = {
    noIframe: false,
    clientId: "61b3537575003bcda8b6",
};
let buttonTextMap = { en: "Get instant help!", de: "Holen Sie sich sofortige Hilfe!", es: "¡Obtenga ayuda instantánea!", it: "Ottieni assistenza immediata!", fr: "Obtenez de l'aide instantanée !"}
mavenoid.push({ event: "troubleshooter-open", orgName: "KIPPY", position: "right", defaultLang: document.documentElement.lang});
/* defaultLang: document.documentElement.lang, buttonText: buttonTextMap[lang ?? "en"] */


// --- begin mavenoid embedded troubleshooter ---
/* (function (m, a, v, e, n, o, i, d) {
    d = m.createElement(e); d.async = true; d.src = "https://app.mavenoid.com" + v;
    i = m.getElementsByTagName(e)[0]; i.parentNode.insertBefore(d, i); n[o] = n[o] || [];
})(document, 0, "/embedded/embedded.js", "script", window, "mavenoid");
// --- end mavenoid embedded troubleshooter ---

mavenoid.config = {
    noIframe: false,
    clientId: "001d862834bb11a069cb",
};
mavenoid.push({ event: "troubleshooter-open", orgName: "MOBI", position: "right", alwaysOpen: true, folderName: ""});
setTimeout(() => { mavenoid.push(({event: "troubleshooter-open", orgName: "MOBI", position: "right", alwaysOpen: true, openByDefault: true})) }, 5000); */