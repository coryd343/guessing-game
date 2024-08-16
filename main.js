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
    const magicNumber = getRandomInteger(100);
    let countOfGuesses = 5;
    let isAMatch = false;
    let message = `Please enter a number from 0 through 100. You have ${countOfGuesses} guesses left. (${magicNumber})`
    let userGuess = -1;

    while (!isAMatch && countOfGuesses > 0) {
        userGuess = parseInt(prompt(message));

        if (!guessIsValid(userGuess, 100)) {
            message = `Not a valid input. No worries! That one's a freebie. You still have ${countOfGuesses} guesses left. Please enter a number from 0 through 100. (${magicNumber})`
            continue;
        }

        countOfGuesses--;

        if (userGuess === magicNumber) {
            isAMatch = true;
        } else if (userGuess < magicNumber) {
            message = `${userGuess} is too low. Please enter a number from 0 through 100. You have ${countOfGuesses} guesses left. (${magicNumber})`
        } else {
            message = `${userGuess} is too high. Please enter a number from 0 through 100. You have ${countOfGuesses} guesses left. (${magicNumber})`
        }
    }
    if (isAMatch) {
        message = `${userGuess} is correct!`
    }

    if (!isAMatch) {
        message = `You didn't guess the number. Like a turd.`
    }
    alert(message);
}