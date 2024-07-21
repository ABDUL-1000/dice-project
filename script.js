
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const current0=document.getElementById('current--0')
const current1=document.getElementById('current--1')

const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
let currentScore=0;
let activePlayer=0;
let currentPlayer=0;
let score = [0,0];
let playing = true;
btnHold.able=true;
btnRoll.able=true;
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function(){
   if (playing){
    // btnRoll.able=true;
    // btnHold.able=false;
    dice.classList.remove('hidden')
    //generating the random number
    const diceNumber = Math.trunc(Math.random()*6)+1;
    //display of random image
    dice.src=`./image/dice-${diceNumber}.png`;
    
    //checking for roll
    if (diceNumber !==1){
        currentScore+=diceNumber;
        // current0.textContent=currentScore;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        btnHold.disabled=false;

    } else {
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer=activePlayer===0?1:0;
        currentScore=0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
    }
    });
    btnHold.addEventListener('click', function (){
        
        console.log(activePlayer);
        
        if (playing){
            
            score[activePlayer]+=currentScore;
        
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    
        activePlayer=activePlayer===0?1:0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore=0;
          
        if (score[activePlayer] >=100){
            playing=false;
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            playing=false;
            
        }
        
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        dice.classList.add('hidden');
        
        }

        // console.log(activePlayer);
        
   });
btnNew.addEventListener('click', function(){
    btnHold.disabled=false;
score0.textContent=0;
score1.textContent=0;
current0.textContent=0;
current1.textContent=0;
dice.classList.add('hidden');
score[activePlayer]=0;
document.getElementById(`current--${activePlayer}`).textContent=0;
document.getElementById(`score--${activePlayer}`).textContent=0;
score = [0,0];    
document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
playing =true; 

btnHold.able=false;

});


