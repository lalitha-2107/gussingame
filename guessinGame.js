let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let userValue = parseInt(userInput.value);
    if (userValue > randomNumber) {
        gameResult.textContent = "Too High! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (userValue < randomNumber) {
        gameResult.textContent = "Too Low! Try Again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (randomNumber === userValue) {
        gameResult.textContent = "Congratulations! You get it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide a valid input";
        gameResult.style.backgroundColor = "red";
    }
}