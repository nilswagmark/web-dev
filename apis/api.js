


  // --- begin mavenoid embedded troubleshooter ---
  (function(m,a,v,e,n,o,i,d) {
    d=m.createElement(e);d.async=true;d.src="https://app.mavenoid.com"+v;
    i=m.getElementsByTagName(e)[0];i.parentNode.insertBefore(d,i);n[o]=n[o]||[];
  })(document,0,"/embedded/embedded.js","script",window,"mavenoid");
  // --- end mavenoid embedded troubleshooter ---

  mavenoid.config = {
    noIframe: false,
    clientId: "99ba5c301fc1e56075b4ed6f4c72489f56d852f0",
  };
  mavenoid.push({ event: "troubleshooter-open", orgName: "NilsDemos2", position: "right"});


  fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      console.log("RESOLVED", res);
    })
    .catch((e) => {
      console.log("ERROR", e);
    });
