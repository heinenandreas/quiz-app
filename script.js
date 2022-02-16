console.log('Hello World!');

const answerButton = document.querySelector("[data-js='button_show_answer']");
const hideAnswer = document.querySelector("[data-js='hide_answer']");

answerButton.addEventListener('click', () => {
  hideAnswer.classList.toggle('answer');
  // hideAnswer.classList.toggle("[data-js='answer']");
});

/* ==================================== */
/* ------Create-Question-Counter------- */
/* ==================================== */

function countCharactersQuestion() {
  valueOfQuestion = document.getElementById('new-question').value;
  console.log(valueOfQuestion);
  characterOutput = valueOfQuestion.length;
  document.getElementById('currentCharakters-question').innerHTML =
    300 - characterOutput;
  console.log(characterOutput);
}

function countCharactersAnswer() {
  valueOfQuestion = document.getElementById('new-answer').value;
  console.log(valueOfQuestion);
  characterOutput = valueOfQuestion.length;
  document.getElementById('currentCharakters-answer').innerHTML =
    300 - characterOutput;
  console.log(characterOutput);
}
