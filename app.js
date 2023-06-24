const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const displayResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
console.log(possibleChoices);
let userChoice;
let computerChoice;
let result;



possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id;// ( e.target.id ------> event ka id name)
    userChoiceDisplay.innerHTML=userChoice; 
    generateComputerChoice();
    getResult();
}))



function generateComputerChoice(){
    const randomNumber = Math.floor((Math.random()*3))+1;
    
    if(randomNumber === 1){
        computerChoice = 'rock';

    }

    else if(randomNumber === 2){
        computerChoice = 'paper';    
    }

    else if(randomNumber === 3){
        computerChoice = 'scissor';
    }
    
    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult(){
    if (computerChoice === userChoice) {
        displayResult.innerHTML = 'It is draw';
    }
    if (computerChoice ==='rock' && userChoice==='paper') {
        displayResult.innerHTML = 'you Win';
    }
    if (computerChoice ==='rock' && userChoice==='scissor') {
        displayResult.innerHTML = 'Computer Win';
    }

    if (computerChoice ==='paper' && userChoice==='scissor') {
        displayResult.innerHTML = 'You win';
    }

    if (computerChoice ==='paper' && userChoice==='rock') {
        displayResult.innerHTML = 'Computer win';
    }

    if (computerChoice ==='scissor' && userChoice==='rock') {
        displayResult.innerHTML = 'You win';
    }

    if (computerChoice ==='scissor' && userChoice==='paper') {
        displayResult.innerHTML = 'Computer win';
    }
}


