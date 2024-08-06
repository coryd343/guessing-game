function getRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

function guessIsValid(guess, max) {
    return guess !== undefined
    && !isNaN(guess)
    && guess > 0
    && guess <= max;
}

function guessingGame() {
    const chances = 10;
    let attempts = 1;
    let currGuess = -1;
    const max = 100;
    const magicNumber = getRandom(max);

    alert(`Guess the number between 1 and ${max} in less than 10 chances!`);
    while(attempts <= chances) {
        currGuess = prompt(`What is your guess? (${chances + 1 - attempts} chances remaining)`);
        if (!guessIsValid(currGuess, max)) {
            alert(`Please enter a valid number (>0 and <${max}`);
        }
        else if (currGuess < magicNumber) {
            alert("Too low");
        }
        else if (currGuess > magicNumber) {
            alert("Too high");
        }
        else {
            alert(`${magicNumber} was the correct number! You guessed in ${attempts} attempts.`);
            break;
        }
        attempts++;
    }
    if (attempts > chances) {
        alert("Sorry, you are out of chances!");
    }
}