const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = Math.floor(Math.random() * 100 + 1);

console.log(
  "I thought about a number between 1 and 100, let's see how many tries you need to find that out!"
);

function ask(tries = 0) {
  readline.question(`Your ${++tries}. guess? `, (guess) => {
    if (parseInt(guess) > num) {
      console.log("It is smaller than that.");
      ask(tries);
    } else if (parseInt(guess) < num) {
      console.log("It is larger than that.");
      ask(tries);
    } else {
      console.log(`YES, you found out in ${tries} tries. Good job!`);
      readline.close();
    }
  });
}

ask();
