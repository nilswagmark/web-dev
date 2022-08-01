
const square = (x) => {
    return x * x;
}

const isRightTriangle = (x,y,z) => {
    if (square(x)+square(y) === square(z)) {
        return true;
    }
    else {
        return false;
    }
}


/* window.onload = (event) => {
    console.log('page is fully loaded');
  };

window.onload=function() {
    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2")
    const p1Display = document.querySelector("#p1Display")
    const p2Display = document.querySelector("#p2Display")
    const reset = document.querySelector("#reset")
    

    let p1Score = 0;
    let p2Score = 0;
    let winningScore = 5;
    let isGameOver = false;


    button1.addEventListener("click", function() {
        if (!isGameOver) {
            p1Score += 1;
            if (p1Score === winningScore) {
                isGameOver = true;
            }
            p1Display.textContent = p1Score;
        }
        else {
            alert("You won!")
        }

        button2.addEventListener("click", function() {
            if (p2Score !== winningScore) {
                p2Score += 1;
                p2Display.textContent = p2Score;
            }
            else {
                alert("You won!")
            }
            
        })
        
    })



} */