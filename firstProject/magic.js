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







<script>
  // --- begin mavenoid embedded troubleshooter ---
  (function(m,a,v,e,n,o,i,d) {
    d=m.createElement(e);d.async=true;d.src="https://app.mavenoid.com"+v;
    i=m.getElementsByTagName(e)[0];i.parentNode.insertBefore(d,i);n[o]=n[o]||[];
  })(document,0,"/embedded/embedded.js","script",window,"mavenoid");
  // --- end mavenoid embedded troubleshooter ---

  mavenoid.config = {
    noIframe: false,
    clientId: "d68ecc999b3b97e0c9be3dc2d58f2c87720cf6fb",
  };
  mavenoid.push({ event: "troubleshooter-open", orgName: "tedee", position: "right", defaultLang: "en"});
</script>

