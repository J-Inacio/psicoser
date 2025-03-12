import "../styles/main.css"

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.createElement("h1")
    h1.innerText = "Olá, mundo"
    document.body.appendChild(h1)
})

const calc = (a,b) => console.log(a + b)
