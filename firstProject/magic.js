let toDoList = ["study", "work"];
let command = prompt("What do you want to do?")
while (command !== "quit") {
    if (command === "list") {
        for (let i = 0; i < toDoList.length; i++) {
            console.log("${toDoList[i]}")
        }
    }
    command = prompt("What do you want to do?")
}




// --- begin mavenoid embedded troubleshooter ---
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