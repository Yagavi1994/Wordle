document.addEventListener("DOMContentLoaded", function() {
    const wordToGuess = "APPLE", "MANGO"; // Change this to the word you want users to guess
    let guessedWord = Array(wordToGuess.length).fill("_");

    const keyboard = document.getElementById("keyboard-area");
    const gridElements = document.querySelectorAll(".grid");
    const resetButton = document.getElementById("reset");

    // Update the display of the guessed word
    function updateDisplay() {
        gridElements.forEach((grid, index) => {
            grid.textContent = guessedWord[index];
        });
    }

    // Check if the guessed letter is in the word and update the guessed word
    function checkLetter(letter) {
        const indices = [];
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === letter) {
                indices.push(i);
            }
        }
        if (indices.length > 0) {
            indices.forEach(index => {
                guessedWord[index] = letter;
            });
        } else {
            // Incorrect guess logic can be added here (e.g., decrementing a counter)
        }
        updateDisplay();
    }

    // Event listener for keyboard buttons
    keyboard.addEventListener("click", function(event) {
        if (event.target.classList.contains("key")) {
            const letter = event.target.dataset.key;
            if (letter) {
                checkLetter(letter);
            }
        }
    });

    // Event listener for reset button
    resetButton.addEventListener("click", function() {
        guessedWord = Array(wordToGuess.length).fill("_");
        updateDisplay();
        // Add logic to reset any other game state (e.g., reset counters)
    });

    // Initial display update
    updateDisplay();
});
