"use strict";
let randumNubmer = Math.trunc(Math.random() * 20 + 1);
console.log(randumNubmer);
let clientChance = 20;
let scores = "";
let hightScore = "";
document.querySelector("ul").children[0].textContent = "score: " + clientChance;

document.getElementById("againBtn").addEventListener("click", () => {
  randumNubmer = Math.trunc(Math.random() * 20 + 1);
  console.log(randumNubmer);

  clientChance = 20;
  document.querySelector("ul").children[0].textContent = clientChance;
  document.querySelector(".answerInput").children[0].value = "";
  document.querySelector(".answer").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#2b2b2b";
});

document
  .querySelector(".answerInput")
  .children[1].addEventListener("click", function () {
    const clientGuess = Number(
      document.querySelector(".answerInput").children[0].value
    );

    if (!Boolean(clientGuess)) {
      document.querySelector(".message").textContent = "plz enter a number";
      return;
    } else if (clientGuess === randumNubmer) {
      scores = clientChance;
      document.querySelector(".message").textContent = "you win ";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".answer").textContent = randumNubmer;
      if (!scores) {
        document.querySelector("ul").children[1].textContent = scores;
      } else if (scores > hightScore) {
        // document.querySelector("ul").children[1].textContent = scores;
        hightScore = scores;
        document.querySelector("ul").children[1].textContent =
          "hight score : " + hightScore;
      }
    } else if (clientChance > 0) {
      if (clientGuess > randumNubmer) {
        document.querySelector(".message").textContent =
          "the number is smaller than ...";
        clientChance--;
        document.querySelector("ul").children[0].textContent = clientChance;
      } else if (clientGuess < randumNubmer) {
        document.querySelector(".message").textContent =
          "the number is bigger ...";
        clientChance--;
        document.querySelector("ul").children[0].textContent = clientChance;
      }
    } else {
      document.querySelector(".message").textContent = "no chance yet";
      document.querySelector("body").style.backgroundColor = "red";
    }
  });
