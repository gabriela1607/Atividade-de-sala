let N1 = document.querySelector ("#N1")
let N2 = document.querySelector ("#N2")

const BotaoResultado = document.querySelector("div button")
BotaoResultado.addEventListener('click' , calcular)

function calcular(){
    const p = document.querySelector(".resultado")
    const valor1 = Number(N1.value)
    const valor2 = Number(N2.value)
    p.innerHTML = `A soma de ${valor1} + ${valor2} é ${valor1+valor2}`
}

