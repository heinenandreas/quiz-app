console.log('Hello World!');

/* ==================================== */
/* ------------Show-Answer------------- */
/* ==================================== */

const answerButton = document.querySelector("[data-js='button_show_answer']");
const hideAnswer = document.querySelector("[data-js='hide_answer']");

answerButton?.addEventListener('click', () => {
  hideAnswer.classList.toggle('answer');
});

/* ==================================== */
/* ----------Bookmark-change----------- */
/* ==================================== */

const bookmarkInactive = document.querySelector(
  "[data-js='bookmark-inaktive1']"
);

bookmarkInactive?.addEventListener('click', () => {
  bookmarkInactive.classList.toggle('bookmark-style-active');
});

// bookmarkInactive?.addEventListener('click', () => {
//   if (bookmarkInactive.classList.contains('bookmark-style-inactive') == true) {
//     bookmarkInactive.classList.remove('bookmark-style-inactive');
//     bookmarkInactive.classList.add('bookmark-style-active');
//   } else {
//     bookmarkInactive.classList.remove('bookmark-style-active');
//     bookmarkInactive.classList.add('bookmark-style-inactive');
//   }
// });

/* ==================================== */
/* ------Create-Question-Counter------- */
/* ==================================== */

function countCharactersQuestion() {
  valueOfQuestion = document.getElementById('new-question').value;
  // console.log(valueOfQuestion);
  characterOutput = valueOfQuestion.length;
  document.getElementById('currentCharakters-question').textContent =
    300 - characterOutput;
  // console.log(characterOutput);
}

function countCharactersAnswer() {
  valueOfQuestion = document.getElementById('new-answer').value;
  // console.log(valueOfQuestion);
  characterOutput = valueOfQuestion.length;
  document.getElementById('currentCharakters-answer').textContent =
    300 - characterOutput;
  // console.log(characterOutput);
}
