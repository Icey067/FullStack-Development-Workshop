// step 1 : get all instances of all the required elements

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");

const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//step 2 : declare all the variables 

let scores, currentScore, activePlayer, playing;

//step 3 : create a function to initialize the game

function init() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
15
    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    dice.classList.add("hidden");
    player1.classList.remove("player--active");
    player2.classList.remove("player--active");
    player1.classList.remove("player--winner");
    player2.classList.remove("player--winner");
    player1.classList.add("player--active");
}

init();

// step 4 : roll dice functionality
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
    if (playing) {
        let randomNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(randomNumber);
        dice.src = `./assets/${randomNumber}.jpeg`;
        dice.classList.remove("hidden");
        if (randomNumber === 1) {
            switchPlayer();
        }
        else {
            currentScore += randomNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            dice.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener("click", init);

