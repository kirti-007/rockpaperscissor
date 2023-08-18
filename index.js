const opponentDisplay = document.getElementById('OpponentChoice');
const userDisplay = document.getElementById('UserChoice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice ;
let OpponentChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    generateOpponentChoice();
    getResult();
}))

function generateOpponentChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)  + 1;
    // console.log(randomNumber);         to check it returns a whole numbeer or not

    if(randomNumber === 1){
        OpponentChoice = 'ROCK';
    }
    if(randomNumber === 2){
        OpponentChoice = 'SCISSOR';
    }
    if(randomNumber === 3){
        OpponentChoice = 'PAPER';
    }
    opponentDisplay.innerHTML = OpponentChoice;
}

function getResult(){
    if(OpponentChoice === userChoice){
        result = 'Its a DRAW !!!';
    }
    if((OpponentChoice === 'ROCK' && userChoice === 'SCISSOR') || (OpponentChoice === 'PAPER' && userChoice === 'ROCK') || (OpponentChoice === 'SCISSOR' && userChoice === 'PAPER')){
        result = 'Oops , You LOSE !!!';
    }
    if((OpponentChoice === 'SCISSOR' && userChoice === 'ROCK') || (OpponentChoice === 'ROCK' && userChoice === 'PAPER') || (OpponentChoice === 'PAPER' && userChoice === 'SCISSOR')){
        result = 'Yeahh, You WIN !!!';
    }
    resultDisplay.innerHTML = result;
}