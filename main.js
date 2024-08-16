const log = (text) => console.log(text);

//const testRandom = (max) => console.log(getRandomInteger(max));

/**
 * Returns a random integer whose value is less than or equal to the given max value
 * @param {number} max - Maximum possible integer value
 * @returns {number} - Random integer between 0 and max (inclusive)
 */
const getRandomInteger = (max) => Math.floor(Math.random() * (max + 1));

/**
 * Returns true if the given guess exists, is a number, is positive and less than the max
 * @param {number} guess - Number to validate
 * @param {number} max - Maximum allowed value
 * @returns {boolean} - 'TRUE' if the guess is valid, 'FALSE' otherwise
 */
const guessIsValid = (guess, max) => typeof guess === 'number' && guess > 0 && guess < max;


/**
 * Executes the guessing game. 
 * Picks a random number to be the hidden "magic" number which the user is prompted to guess.
 * Prompts the user to guess as long as the number of attempts has not exceeded the number of chances AND as long as the
 * magic number has not been guessed.
 * Provides feedback to the user after each guess indicating whether their guess was too low, too high or if it was the correct answer
 * Displays a "Game Over" message if the user has not guessed correctly before their last attempt.
 */
function guessingGame() {
    const magicNumber = getRandomInteger(10);
    let countOfGuesses = 9;
    let isAMatch = false;

    while (!isAMatch && countOfGuesses > 0) {
        const userGuess = parseInt(prompt("Please enter a number from 0 through 10. You have " + countOfGuesses + " guesses left. " + magicNumber));
        log(typeof userGuess);

        countOfGuesses--;

        if (!guessIsValid(userGuess, 10)) {
            alert("not valid input");
            continue;
        }

        if (userGuess == magicNumber) {
            alert(userGuess + " is the correct number!");
            isAMatch = true;
        } else if (userGuess < magicNumber) {
            alert(userGuess + " is too low.");
        } else {
            alert(userGuess + " is too high.");
        }
    }

    if (!isAMatch) {
        alert("You've used all your guesses. The correct number was " + magicNumber + ".");
    }
}