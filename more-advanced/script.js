console.log("Hello from our first JS file")

let total = 4;

if (total === 4) {
  console.log("You are a superstar!");
}

const password = prompt("please anter a new password:");
if (password.length >= 6) {
  console.log("Long enough password")
} else {
  console.log("Password is too short")
}

let lista = ["banan", "äpple"];
let dict = { FirstName: "Nils", Age: "23" };





// --- begin mavenoid embedded troubleshooter ---
(function(m,a,v,e,n,o,i,d) {
  d=m.createElement(e);d.async=true;d.src="https://app.mavenoid.com"+v;
  i=m.getElementsByTagName(e)[0];i.parentNode.insertBefore(d,i);n[o]=n[o]||[];
})(document,0,"/embedded/embedded.js","script",window,"mavenoid");
// --- end mavenoid embedded troubleshooter ---

mavenoid.config = {
  noIframe: false,
  clientId: "02d0078cb1165f72f2cf",
};
mavenoid.push({ event: "troubleshooter-open", orgName: "Zaptec Charger As", position: "right"});
