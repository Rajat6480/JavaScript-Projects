let randomnum = parseInt(Math.random()*100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1
let playGame = true;

if(playGame){
    submit.addEventListener("click",((e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    }))
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Enter a number greater than or equal to 1')
    }
    else if (guess>100){
        alert('Enter a number less than or equal to 100')
    }

    prevGuess.push(guess)

    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game over . Random number was ${randomnum}`)
        endGame();
    }
    else{
        displayGuess(guess)
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess<randomnum){
        displayMessage(`Number is toooooo low`)
    }
    else if(guess === randomnum){
        displayMessage(`You guessed it right`)
    }
    else{
        displayMessage(`Number is toooooo high`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){

        randomnum = parseInt(Math.random()*100 + 1);
        prevGuess = []
        guessSlot.innerHTML = ""
        numGuess = 1
        userInput.innerHTML=""
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        displayMessage('Game Restarted')
        playGame= true

    })
}



