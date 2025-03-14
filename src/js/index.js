if (module.hot) {
    module.hot.accept();
  }

import "../styles/base/reset.css"
import "../styles/base/variables.css"
import "../styles/main.css"



document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.createElement("h1")
    h1.innerText = "Olá, mundo"
    h1.id = "titulo"
    document.body.appendChild(h1)
})

const calc = (a,b) => console.log(a + b)
calc(5,5)
