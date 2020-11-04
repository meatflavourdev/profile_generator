const readline = require("readline");

const questionArr = [
  `What's your name? Nicknames are also acceptable 😁 `,
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  `What's your favourite thing to eat for that meal?`,
  `Which sport is your absolute favourite?`,
  `What is your superpower? In a few words, tell us what you are amazing at!`,
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = [];
const askQuestions = function (questionArr) {
  if (questionArr.length <= 0) {
    rl.close();
    console.log(
      `---\n${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]}, over any other sport, and is amazing at ${answers[6]}.`
    );
    return;
  } // No question to ask
  rl.question(questionArr.shift(), (answer) => {
    answers.push(answer);
    console.log(`Thank you for your valuable feedback: ${answer}`);
    askQuestions(questionArr);
  });
};

askQuestions(questionArr);
