const box = document.querySelectorAll('.boxx')
const colors = [  "SandyBrown",
    "red",
    "black",
    "green",
    "yellow",
    "pink",
    "blue",
]

box.forEach(el =>{
    el.addEventListener('click',()=>{
        box.forEach(el => el.style.background = 'none')
        el.style.background = randomColor()
    })
})

function randomColor(){
    let idx = Math.round(Math.random()* colors.length)
    return colors[idx]
}