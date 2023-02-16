let firstNumberInput = document.getElementById('firstNumber');
let secondNumberInput = document.getElementById('secondNumber');
let userAnswerInput = document.getElementById('userInput');
let gameFinalResult = document.getElementById('gameResult');

function restartButton(){
    firstNumberInput.textContent = Math.ceil(Math.random()*100)
    secondNumberInput.textContent = Math.ceil(Math.random()*100)
    gameFinalResult.textContent = '';
    userAnswerInput.value = '';

}
restartButton();

function checkButton(){
    let firstRandomInteger = parseInt(firstNumberInput.textContent);
    let secondRandomInteger = parseInt(secondNumberInput.textContent);
    let userEnteredAnswer = parseInt(userAnswerInput.value);
    
    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

    if (userEnteredAnswer === sumOfTwoRandomIntegers){
        gameFinalResult.textContent = 'Congratulations! you got it right';
        gameFinalResult.style.backgroundColor = '#028a0f';

    } else{
        gameFinalResult.textContent = 'Please Try Again!';
        gameFinalResult.style.backgroundColor = '#1e217c';
    }
}

