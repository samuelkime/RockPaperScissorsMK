var blaze = 0
var scorpion = 1
var subZero = 2


function play(playerChoice) {
    var compChoice = Math.floor(Math.random() * 3)
    if (playerChoice == blaze) {
        document.getElementById("player").innerText ="Blaze"
        if (compChoice == blaze) {
            alert("Tie!")
            document.getElementById("opponent").innerText ="Blaze"          
        } else if (compChoice == scorpion) {
            alert("Fatality!")
            document.getElementById("opponent").innerText ="Scorpion"
        } else if (compChoice == subZero) {
            alert("You Lose!")
            document.getElementById("opponent").innerText ="Sub Zero"
        }
    } else if (playerChoice == scorpion) {
        document.getElementById("player").innerText ="Scorpion"
        if (compChoice == blaze) {
            alert("Fatality!")
            document.getElementById("opponent").innerText ="Blaze"
        } else if (compChoice == scorpion) {
            alert("Tie!")
            document.getElementById("opponent").innerText ="Scorpion"
        } else if (compChoice == subZero) {
            alert("You Lose!")
            document.getElementById("opponent").innerText ="Sub Zero"
        }
    } else if (playerChoice == subZero) {
        document.getElementById("player").innerText ="Sub Zero"
        if (compChoice == blaze) {
            alert("You Lose!")
            document.getElementById("opponent").innerText ="Blaze"
        } else if (compChoice == scorpion) {
            alert("Fatality!")
            document.getElementById("opponent").innerText ="Scorpion"
        } else if (compChoice == subZero) {
            alert("Tie!")
            document.getElementById("opponent").innerText ="Sub Zero"
        }
    }    
}
//Wanted to add some sort of counetr here. Tabulate wins/ losses