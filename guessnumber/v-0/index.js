debugger
// validate func
function validateData(parameter) {
  if (!Number(parameter)) {
    if (parameter.lenght > 0) {
      alert("plz put number not a string");
      throw new Error("plz put number not a string");
    } else {
      alert("plz input something");
      throw new Error("plz input something");
    }
    // alert("plz input something");
    // throw new Error("plz input something");
    // return;
  }
  // if (!Number(parameter)) {
  //   alert("plz put number not a string");
  //   throw new Error("plz put number not a string");
  // }

  // return Number(parameter);
}
// client range
const clientRangeMin = validateData(+prompt("number range min"));
const clientRangeMax = validateData(+prompt("number range max"));

// random number
const randomNumber = Math.round(
  Math.random() * (clientRangeMax - clientRangeMin) + clientRangeMin
);

// client chance
let clientChance = 5;
// loop to guess number count down until chance become 0
while (clientChance > 0) {
  // client guess
  const clientGuess = window.prompt("your guess");

  // check the answer

  if (clientGuess && clientGuess == randomNumber) {
    window.alert(
      `answer is correct you'r answer is ${clientGuess} and computer number ${randomNumber} your chance ${clientChance}`
    );
    break;
  }
  console.log(clientGuess);
  // check if answer was bigger
  if (clientGuess > randomNumber) {
    window.alert("your answer is bigger than number");
  } else {
    window.alert("your answer is smaller than number");
  }

  clientChance--;
}
