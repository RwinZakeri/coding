// validate func
function validateData(parameter) {
  if (!Boolean(parameter.trim())) {
    alert("plz input something");
    throw new Error("plz input something");
    return;
  }
  if (!Number(parameter.trim())) {
    alert("plz put number not a string");
    throw new Error("plz put number not a string");
  }

  return Number(parameter);
}

// client range
const clientRangeMin = validateData(prompt("number range min"));
const clientRangeMax = validateData(prompt("number range max"));
// random number
const randomNumber = Math.floor(
  Math.random() * (clientRangeMin, clientRangeMax)
);
// client chance
let clientChance = 5;
// loop to guess number count down until chance become 0
while (clientChance > 0) {
  // client guess
  const clientGuess = validateData(window.prompt("your guess"));

  // check the answer

  if (clientGuess && clientGuess == randomNumber) {
    window.alert(
      `answer is correct you'r answer is ${clientGuess} and computer number ${randomNumber} your chance ${clientChance}`
    );
    break;
  }
  // check if answer was bigger
  if (clientGuess > randomNumber) {
    window.alert("your answer is bigger than number");
  } else {
    window.alert("your answer is smaller than number");
  }

  clientChance--;
}
