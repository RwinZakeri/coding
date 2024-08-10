// validate prompt's... check is not empty (trim , length) and not a string
function validate(parameter) {
  if (!parameter || !parameter.trim()) {
    window.alert("plz enter something");
    throw new Error("plz enter something");
  } else if (!Number(parameter)) {
    window.alert("plz enter a number not a string");
    throw new Error("plz enter a number not a string");
  }
  return Number(parameter);
}
// client range min && convert to number
const clientRangeMin = validate(window.prompt("min range"));
// client range max && convert to number
const clientRangeMax = validate(window.prompt("max range"));
// choose random number
const RandomNumber = Math.round(
  Math.random() * (clientRangeMax, clientRangeMin) + clientRangeMin
);
console.log(clientRangeMin, clientRangeMax, RandomNumber);
// define client chance
let clientChance = 5;
// check guess until client chance done
for (clientChance; clientChance > 0; ) {
  const clientGuess = validate(window.prompt("you'r guess"));
  if (clientGuess === RandomNumber) {
    window.alert(
      `your wiiiin , correct answer was ${RandomNumber} and you'r answer was ${clientGuess} with ${clientChance} chance`
    );
    console.log(
      `your wiiiin , correct answer was ${RandomNumber} and you'r answer was ${clientGuess} with ${clientChance} chance`
    );
    break;
  }
  if (clientGuess > RandomNumber) {
    window.alert("you'r guess is bigger than computer number");
    clientChance--;
  } else {
    window.alert("you'r guess is smaller than computer number");
    clientChance--;
  }
}
