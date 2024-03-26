//Learnt the following codes for Wordle Game from Web Dev Simplified Youtube Tutorial.

// The words from targetWords.json and dictionary.json which are used to play the Game.
import dictionary from "./data/dictionary.js";
import targetWords from "./data/targetwords.js";

// Global Variables

const WORD_LENGTH = 5;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;
const keyboard = document.querySelector("[data-keyboard]");
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const targetWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log(targetWord);



// Function to initiate interaction with the game when a letter is clicked or pressed.

startInteraction();
function startInteraction() {
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("keydown", handlePressKey);
}



// Function to stop interaction with the game when the correct word is guessed

function stopInteraction() {
    document.removeEventListener("click", handleMouseClick);
    document.removeEventListener("keydown", handlePressKey);
}



// Function to declare what happens when a key is clicked

function handleMouseClick(e) {
    if (e.target.matches("[data-key]")) {
        pressKey(e.target.dataset.key);
        return;
    }

    if (e.target.matches("[data-enter]")) {
        submitGuess();
        return;
    }

    if (e.target.matches("[data-delete]")) {
        deleteKey();
        return;

    }
}



// Function to declare what happens when a key is pressed.

function handlePressKey(e) {
    if (e.key === "Enter") {
        submitGuess();
        return;
    }

    if (e.key === "Backspace" || e.key === "Delete") {
        deleteKey();
        return;
    }

    if (e.key.match(/^[a-z]$/)) {
        pressKey(e.key);
        return;
    }


}



// Function to enter the letter in the guess grid when it's clicked or pressed in the keyboard.

function pressKey(key) {
    const activeTiles = getActiveTiles();
    if (activeTiles.length >= WORD_LENGTH) return
    const nextTile = guessGrid.querySelector(":not([data-letter])");
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key;
    nextTile.dataset.state = "active";
}



// Function to delete the letter in the guess grid when delete/backspace key is clicked or pressed in the keyboard.

function deleteKey() {
    const activeTiles = getActiveTiles();
    const lastTile = activeTiles[activeTiles.length - 1];
    if (lastTile === undefined) return;
    lastTile.textContent = "";
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
}



// Function to get letter counts for given word

const getLetterCount = (word) => {
    const map = {}
    const wordArr = [...word]
    wordArr.forEach((letter) => {
        if(letter in map) {
            map[letter] += 1
        } else {
            map[letter] = 1
        }
    })
    return map
}



/** Function to submit the word when pressed enter and
 * check whether enough letters are entered.
 * whether the entered guess is a valid word from dictionary.
 * check if number of times a letter present in the guess is equal to number of times it is present in target word.
 * check whether the word guessed is equal to the target word to see has the player won.
 * and if no remaining tiles are there to see has the player lost the game.
*/

function submitGuess() {
    const activeTiles = [...getActiveTiles()];
    if (activeTiles.length !== WORD_LENGTH) {
        showAlert("Not enough letters");
        shakeTiles(activeTiles);
        return;
    }

    const guess = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter;
    }, "");

    if (!dictionary.includes(guess)) {
        showAlert("Not in word list");
        shakeTiles(activeTiles);
        return;
    }
   
    // Holds count of each letter in target word
    // Eg: LLAMA will have {"L": 2, "A": 2, "M": 1}
    const targetLetterCount = getLetterCount(targetWord)

    // Holds state (ie., correct/wrong/wrong-location) of each letter
    const letterStateArr = Array(WORD_LENGTH)

    // Handle correct letters
    for(let i = 0; i < WORD_LENGTH; i++) {
        const targetLetter = targetWord[i]
        const inputLetter = activeTiles[i].dataset.letter
        if(targetLetter === inputLetter) {
            // Decrease the remaining letter by 1
            targetLetterCount[targetLetter] -= 1
            // Mark the letter position as correct
            letterStateArr[i] = 'correct'
        }
    }

    // Handle incorrect letters
    for(let i = 0; i < WORD_LENGTH; i++) {
        // Continue with next iteration, if letter is already marked correct
        if(letterStateArr[i]) {
            continue;
        }
        const inputLetter = activeTiles[i].dataset.letter
        // If the remaining letter count is 0, it is wrong, else it's in wrong-location
        if(inputLetter in targetLetterCount && targetLetterCount[inputLetter] > 0) {
            letterStateArr[i] = 'wrong-location'
        } else {
            letterStateArr[i] = 'wrong'
        }
    }

    if (guess === targetWord) {
        activeTiles.forEach((...params) => flipTile(...params, letterStateArr));
        setTimeout(() => {
            danceTiles(activeTiles);
        }, FLIP_ANIMATION_DURATION * 5);
        stopInteraction();
        // Pop confetti
        jsConfetti.addConfetti();
        handleGameResult("win", guess);
        return;
    }

    const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])");
    if (remainingTiles.length === 0) {
        handleGameResult("lose", targetWord);
        stopInteraction();
    }

    stopInteraction();
    activeTiles.forEach((...params) => flipTile(...params, letterStateArr));
}



// Function to show alert based on whether the player has won or lost and open statistics.

function handleGameResult(result, word) {
    if (result === "win") {
        updateGameStatistics("win");
        showAlert(`Congratulation, You Win`, 5000);
        setTimeout(() => {
            openStatistics();
        }, 4000);
    }
    else if (result === "lose") {

        showAlert(`Oops.. You missed it.. The correct word is '${word.toUpperCase()}'..`, null);
        updateGameStatistics("lose");
        setTimeout(() => {
            openStatistics();
        }, 3000);
    }
}



/** Function to apply flip tile animation to the word once it's submitted
 * Checks whether the letters in the word is in correct or wrong location and adds respective classes to them.
 */

function flipTile(tile, index, array, letterStateArr) {

    const letter = tile.dataset.letter;
    const key = keyboard.querySelector(`[data-key="${letter}"i]`);

    setTimeout(() => {
        tile.classList.add("flip");
    }, (index * FLIP_ANIMATION_DURATION) / 2);

    tile.addEventListener("transitionend", () => {
        tile.classList.remove("flip");
        
        key.classList.add(letterStateArr[index]);
        tile.dataset.state = letterStateArr[index]

        if (index === array.length - 1) {
            tile.addEventListener("transitionend", () => {
                startInteraction();
            },
                { once: true }
            );
        }
    },
        { once: true }
    );
}



// Function to select the active tiles.

function getActiveTiles() {
    return guessGrid.querySelectorAll('[data-state="active"]');
}



//Function to show alert messages in the game.

function showAlert(message, duration = 1000) {
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);
    if (duration == null) return;

    setTimeout(() => {
        alert.classList.add("hide")
        alert.addEventListener("transitioned", () => {
            alert.remove();
        });
    }, duration);
}



//Function to add shake tiles animation when a word not in the dictionary is entered.

function shakeTiles(tiles) {
    tiles.forEach(tile => {
        tile.classList.add("shake");
        tile.addEventListener(
            "animationend",
            () => {
                tile.classList.remove("shake");
            },
            { once: true }
        );
    });
}



//Function to add dance tiles animation when the correct word is guessed.

function danceTiles(tiles) {
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add("dance")
            tile.addEventListener(
                "animationend",
                () => {
                    tile.classList.remove("dance");
                },
                { once: true }
            );
        }, (index * DANCE_ANIMATION_DURATION) / 5);
    });
}



//The code from here are my own code and not followed from any tutorial.

// Function to toggle between light and dark mode icons with flip animation

const modeButton = document.getElementById("mode");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

function toggleModeIcon() {

    moonIcon.classList.add("rotate");
    sunIcon.classList.add("rotate");

    setTimeout(() => {

        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");

        moonIcon.classList.remove("rotate");
        sunIcon.classList.remove("rotate");
    }, 500);
}

modeButton.addEventListener("click", () => {
    toggleModeIcon();
    toggleTheme();
});



// Function to toggle theme

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Save the current theme preference to localStorage
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}


// Function to reset the page without resetting the theme

function resetPageWithoutThemeReset() {
    location.reload();
}



// Function to initialize sun/moon icon classes

function initializeSunMoon() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// Initialize sun/moon icons on load
window.addEventListener('load', initializeSunMoon);


// Attach event listeners to reset button.
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetPageWithoutThemeReset);

// Initialize confetti instance
const jsConfetti = new JSConfetti()



// Rules Box

const howToPlayBtn = document.getElementById("how-to-play");
const htpBody = document.getElementById("htp-body");
const closeButton = document.getElementById("close");
const rulesBoxOverlay = document.getElementById("rules-box-overlay");


// Function to open rule box

function openRulesBox() {
    htpBody.setAttribute("data-display-container", "true");
    rulesBoxOverlay.classList.remove("hidden");
}


howToPlayBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling up
    openRulesBox();
});



// Function to close rule box

function closeRulesBox() {
    htpBody.setAttribute("data-display-container", "false");
    rulesBoxOverlay.classList.add("hidden");
}

closeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    closeRulesBox();
});

// Event listener to close rules box when clicked outside of it
document.body.addEventListener("click", function (event) {
    if (!htpBody.contains(event.target) && event.target !== howToPlayBtn) {
        closeRulesBox();
    }
});



// Function to open and close themes menu when themes button is clicked.

const themesButton = document.getElementById('themes');
const themesMenu = document.getElementById('themes-container');
const themesCloseButton = document.getElementById('close-button');
const transparentOverlay = document.getElementById('transparent-overlay');

// Function to open themes menu.

function openThemesMenu() {
    themesMenu.classList.remove("hidden");
    transparentOverlay.classList.remove("hidden"); // Added a new overlay to prevent other modals from opening while themes menu is open.

}

themesButton.addEventListener("click", function (event) {
    event.stopPropagation();
    openThemesMenu();
});

// Function to close themes menu.

function closeThemesMenu() {
    themesMenu.classList.add("hidden");
    transparentOverlay.classList.add("hidden");

}

themesCloseButton.addEventListener("click", closeThemesMenu);

// Event listener to close themes menu when clicking outside of it
document.body.addEventListener("click", function (event) {
    if (event.target !== themesButton && !themesMenu.contains(event.target)) {
        closeThemesMenu();
    }
});



// Functions to change theme colors

// Orange theme.

function orangeTheme() {
    document.body.classList.remove('purple', 'blue', 'red');
    document.body.classList.add('orange');
    localStorage.setItem('tileColor', 'orange');
}
const orange = document.getElementById('orange');
orange.addEventListener('click', orangeTheme);


// Purple Theme

function purpleTheme() {
    document.body.classList.remove('orange', 'blue', 'red');
    document.body.classList.add('purple');
    localStorage.setItem('tileColor', 'purple');

}
const purple = document.getElementById('purple');
purple.addEventListener('click', purpleTheme);


// Blue Theme

function blueTheme() {
    document.body.classList.remove('purple', 'orange', 'red');
    document.body.classList.add('blue');
    localStorage.setItem('tileColor', 'blue');
}
const blue = document.getElementById('blue');
blue.addEventListener('click', blueTheme);


// Red Theme

function redTheme() {
    document.body.classList.remove('purple', 'orange', 'blue');
    document.body.classList.add('red');
    localStorage.setItem('tileColor', 'red');
}
const red = document.getElementById('red');
red.addEventListener('click', redTheme);



// Function to open and close statistics when statistics button is clicked.

const statisticsButton = document.getElementById('statistics-button');
const statistics = document.getElementById('statistics-parent-container');
const statisticsCloseButton = document.getElementById('statistics-close');
const overlay = document.getElementById('overlay');

// Function to open statistics menu.

function openStatistics() {
    statistics.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

statisticsButton.addEventListener("click", function (event) {
    event.stopPropagation();
    openStatistics();
});

// Function to close statistics menu.

function closeStatistics() {
    statistics.classList.add("hidden");
    overlay.classList.add("hidden");
}


statisticsCloseButton.addEventListener("click", function (event) {
    event.stopPropagation();
    closeStatistics();
});

// Event listener to close statistics menu when clicked outside of it
document.body.addEventListener("click", function (event) {
    if (!statistics.contains(event.target) && event.target !== statisticsButton) {
        closeStatistics();
    }
});



// Function to update statistics

// Initialize game statistics

let gamesWon = 0;
let gamesLost = 0;

// Function to retrieve game statistics from local storage

function retrieveGameStatistics() {
    gamesWon = parseInt(localStorage.getItem('gamesWon')) || 0;
    gamesLost = parseInt(localStorage.getItem('gamesLost')) || 0;
}

// Call retrieveGameStatistics function to initialize game statistics

retrieveGameStatistics();



// Function to update game statistics and save them to local storage

function updateGameStatistics(result) {
    if (result === "win") {
        gamesWon++;
    } else if (result === "lose") {
        gamesLost++;
    }

    // To calculate win percentage

    const totalGames = gamesWon + gamesLost;
    const winPercentage = totalGames > 0 ? ((gamesWon / totalGames) * 100).toFixed(2) : 0;

    // Update UI to display game statistics

    document.getElementById('games-won').textContent = gamesWon;
    document.getElementById('games-lost').textContent = gamesLost;
    document.getElementById('total-games').textContent = totalGames;
    document.getElementById('win-percentage').textContent = winPercentage + '%';

    // Save updated game statistics to local storage

    localStorage.setItem('gamesWon', gamesWon);
    localStorage.setItem('gamesLost', gamesLost);
}



// Function to display game statistics when the statistics menu is opened

function displayGameStatistics() {

    // Display the current game statistics

    document.getElementById('games-won').textContent = gamesWon;
    document.getElementById('games-lost').textContent = gamesLost;

    // Calculate and display total games and win percentage

    const totalGames = gamesWon + gamesLost;
    const winPercentage = totalGames > 0 ? ((gamesWon / totalGames) * 100).toFixed(2) : 0;
    document.getElementById('total-games').textContent = totalGames;
    document.getElementById('win-percentage').textContent = winPercentage + '%';
}

// Call displayGameStatistics function when the statistics menu is opened

statisticsButton.addEventListener("click", function () {
    openStatistics();
    displayGameStatistics();
});