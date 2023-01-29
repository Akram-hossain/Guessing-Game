let totalAttemps = 5;
let attemps = 0;
let totalWins = 0;
let totalLosts = 0;
const cardBody = document.querySelector('.card');
const form = cardBody.querySelector('form');
const gussingNumber = cardBody.querySelector('#gussingNumber');
const checkButton = cardBody.querySelector('#check');
const resultText = cardBody.querySelector('.result-text');
const remainingAttmp = cardBody.querySelector('.remaining-attmp');
const totalLostWin = cardBody.querySelector('.total-lost-win');

form.addEventListener('submit',function(event) {
    event.preventDefault(); 
    attemps++;
    if(attemps == totalAttemps){
        gussingNumber.disabled = true;
        checkButton.classList.add('disabled'); 
    }if(attemps < 6 ){
        let gussingNumbers = Number(gussingNumber.value);
        chekResult(gussingNumbers); 
        remainingAttmp.innerHTML = `Attempt Remaining ${totalAttemps - attemps}`;
        if ((totalAttemps - attemps) < 1) {
            remainingAttmp.classList.add('red');
        }
    }
    gussingNumber.value = '';
});

function chekResult(gussingNumber){ 
    const randomNumber = getRandomNumber(totalAttemps); 
    if (randomNumber === gussingNumber) {
        totalWins++;
        resultText.innerHTML = `<span class='green'>You have won</span>; The random number is ${randomNumber}`;
    }else{
        totalLosts++;
        resultText.innerHTML = `<span class='red'>You have lost</span>; The random number is ${randomNumber}`;
    }
    totalLostWin.innerHTML = `<span class='green'>Total Wins: ${totalWins}</span>; <span class='red'>Total Lost: ${totalLosts}</span>`;
}


function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
} 