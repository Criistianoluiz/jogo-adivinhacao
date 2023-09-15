//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const randomNumber = Math.round(Math.random() * 10)
let Attempts = 1


//eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleAgainClick) 
    
//funções callback
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber)  {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document
        .querySelector(".screen2 h2")
        .innerText = `Você acertou em ${Attempts} tentativas`

        console.log(`Você acertou em ${Attempts} tentativas`) 
    }

    Attempts++

     inputNumber.value = ""
}

function handleAgainClick() {
    toggleScreen()
    Attempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}
