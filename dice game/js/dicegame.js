let player1Score = 0
let player2Score = 0
let player1Turn = true
const message = document.getElementById("message")
const player1ScoreBoard = document.getElementById("player1Scoreboard")
const player2ScoreBoard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random()*6) + 1


    if (player1Turn) {
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
    } else {
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has Won"
        btnDisplay()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has Won"
        btnDisplay()
    }
    player1Turn = !player1Turn
})

function btnDisplay() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

resetBtn.addEventListener("click", function() {
    player1Score = 0
    player2Score = 0
    player1ScoreBoard.textContent = 0
    player2ScoreBoard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    player1Turn = true
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")

})


