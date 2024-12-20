// Select elements
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const reset1 = document.getElementById("reset1");
const reset2 = document.getElementById("reset2");
const resetAll = document.getElementById("resetAll");
const targetInput = document.getElementById("targetInput");
const setTarget = document.getElementById("setTarget");
const winnerMessage = document.getElementById("winnerMessage");

// Initialize scores and target
let player1Score = 0;
let player2Score = 0;
let targetScore = 0;
let gameActive = true;

// Update scores on the screen
function updateScores() {
    score1.textContent = player1Score;
    score2.textContent = player2Score;

    // Check if a player has reached the target score
    if (gameActive && targetScore > 0) {
        if (player1Score >= targetScore) {
            gameActive = false;
            winnerMessage.textContent = "Player 1 Wins!";
            disableButtons();
        } else if (player2Score >= targetScore) {
            gameActive = false;
            winnerMessage.textContent = "Player 2 Wins!";
            disableButtons();
        }
    }
}

// Disable all buttons when the game ends
function disableButtons() {
    add1.disabled = true;
    add2.disabled = true;
}

// Reset game state
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    gameActive = true;
    winnerMessage.textContent = "";
    add1.disabled = false;
    add2.disabled = false;
    updateScores();
}

// Event listeners for buttons
add1.addEventListener("click", () => {
    if (gameActive) {
        player1Score++;
        updateScores();
    }
});

add2.addEventListener("click", () => {
    if (gameActive) {
        player2Score++;
        updateScores();
    }
});

reset1.addEventListener("click", () => {
    if (gameActive) {
        player1Score = 0;
        updateScores();
    }
});

reset2.addEventListener("click", () => {
    if (gameActive) {
        player2Score = 0;
        updateScores();
    }
});

resetAll.addEventListener("click", () => {
    resetGame();
});

setTarget.addEventListener("click", () => {
    const input = parseInt(targetInput.value, 10);
    if (input > 0) {
        targetScore = input;
        resetGame();
        alert(`Target Score set to ${targetScore}`);
    } else {
        alert("Please enter a valid target score greater than 0.");
    }
});
