colorButton = document.querySelector("button")

const changeColor = () => {
    const r = Math.floor(Math.random() * 255 )
    const g = Math.floor(Math.random() * 255 )
    const b = Math.floor(Math.random() * 255 )
    return `rgb(${r}, ${g}, ${b})`;
}


colorButton.addEventListener (click, function() {
    const newColor = changeColor()
    document.body.style.backgroundColor = newColor; 
})