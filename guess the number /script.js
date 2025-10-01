let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);



const userInput =  document.querySelector('#guessField')
const submitBtn =  document.querySelector('#subt')
const prevGuess= document.querySelector('.guesses')
const hiOrlow = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const addBTN= document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuesses = []
let numGuess = 1

let playGame = true

if(playGame){
    submitBtn.addEventListener('click',function (e) {
        e.preventDefault()
        const num = parseInt(userInput.value)
        validateNum(num)
    })
}

function validateNum(num) {
    if(isNaN(num)){
        alert("enter a valid number")
    }
    else if(num<1){
        alert("enter a number between 1 to 100")
    }
    else if(num>100){
        alert("enter a number between 1 to 100")
    }
    else{
       preGuesses.push(num)
       if(numGuess === 11){
        cleanNum(num)
        displayMsg(`GAME OVER ,the random number is ${randomNumber}`)
        endGame()
       }
       else{
        checkNum(num)
        cleanNum(num)

       }
    }
    
}

function checkNum(num) {
   if(num===randomNumber) {
    displayMsg("you guessed it right")
    endGame()
   }
   else if(num>randomNumber){
    displayMsg("number is too high ")
   }
   else if(num<randomNumber){
    displayMsg("number is too low ")
   }

}

function cleanNum(num) {
    userInput.value=''
    prevGuess.innerHTML += `${num},`
    numGuess++
    remaining.innerHTML = `${11 - numGuess} `

}

function displayMsg(msg) {
    hiOrlow.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    addBTN.appendChild(p)
    playGame = false;
    newGame();

}

function newGame() {
   const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuesses = [];
    numGuess = 1;
    prevGuess.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    addBTN.removeChild(p);

    playGame = true;
  });
    

}