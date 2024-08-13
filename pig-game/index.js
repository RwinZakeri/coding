// roll button , new game button , hold
const rollBtn = document.querySelector(".rollBtn");
const HoldBtn = document.querySelector(".holdBtn");
// scores and current scored
const scoresText = document.querySelector(".dataInfo").children[1];

const currentScoreText = document.querySelector(".score").children[1];
const left = document.querySelector(".left");
const right = document.querySelector(".right");
// image
const diceImg = document.querySelector(".imageCon");
// game variables
let current = 0;
let scores = [0, 0];
let playerTurn = 0;
// switch player func
function switchPlayer() {
  current = 0;
  document.getElementById(`currentScore-${playerTurn}`).textContent = current;
  currentScoreText.textContent = current;

  playerTurn = playerTurn === 0 ? 1 : 0;
  left.classList.toggle("active");
  right.classList.toggle("active");
}
// roll dice func
rollBtn.addEventListener("click", function () {
  // 1. generate random number from 1 to 6
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  // 2. remove hidden class from img
  diceImg.classList.remove("hidden");
  // 3. add src to diceImg
  diceImg.children[0].src = `./images/dice-${randomNum}.png`;
  // check if random num equal to 1 turn change else rand + current

  if (randomNum !== 1) {
    current += randomNum;
    document.getElementById(`currentScore-${playerTurn}`).textContent = current;
  } else {
    switchPlayer();
  }
});

document.querySelector(".holdBtn").addEventListener("click", () => {
  scores[playerTurn] += current;
  document.getElementById(`score-${playerTurn}`).textContent =
    scores[playerTurn];
  switchPlayer();
});
