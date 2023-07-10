'use strict';

// global aspect
let bool = true;

// handle random number
const secretPointing = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// handle message section
const messagePointing = document.querySelector('.message');
const initialMsg = '🤔 Start guessing...';
const winnerMsg = '🥳 Winner !! Winner !! Chicken Dinner !!';
const lossMsg = '🥲 You lossed';

// handle score
const scorePointing = document.querySelector('.score');
let score = Number(scorePointing.textContent);

// handle highscore
const highscorePointing = document.querySelector('.highscore');
let highscore = Number(highscorePointing.textContent);

// handle input from text-box
const guessPointing = document.querySelector('.guess');

// handle check button
const checkPointing = document.querySelector('.check');
checkPointing.addEventListener('click', function () {
  if (!bool) {
    alert('Select Again To Play');
    return;
  }

  let guessNumber = Number(guessPointing.value);

  if (!guessNumber) {
    messagePointing.textContent = '⛔️ No number!';
  } else if (guessNumber === secretNumber) {
    messagePointing.textContent = winnerMsg;
    document.querySelector('body').style.backgroundColor = '#60b347';
    bool = false;
    secretPointing.textContent = secretNumber;
    console.log(highscore,score);
    highscorePointing.textContent = Math.max(highscore,score);
  } else {
    score--;
    scorePointing.textContent = score;
    let difference = Math.abs(guessNumber - secretNumber);
    if (difference > 3) {
      if (guessNumber > secretNumber) {
        messagePointing.textContent = '📈 Too High!';
      } else {
        messagePointing.textContent = '📉 Too Low!';
      }
    } else {
      if (guessNumber > secretNumber) {
        messagePointing.textContent = '📈 High!';
      } else {
        messagePointing.textContent = '📉 Low!';
      }
    }
  }

  if(score <= 0)
  {
    messagePointing.textContent = lossMsg;
    document.querySelector('body').style.backgroundColor = 'blue';
    bool = false;
  }
});

// handle again button
const restartPointing = document.querySelector('.again');

restartPointing.addEventListener('click',function(){
    highscore = score;
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    secretPointing.textContent = "?";
    messagePointing.textContent = initialMsg;
    document.querySelector('body').style.backgroundColor = '#222';
    bool = true;
    scorePointing.textContent = 20;
    guessPointing.value = '';
    
})