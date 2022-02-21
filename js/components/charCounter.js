/* ==================================== */
/* ------Create-Charakter-Counter------ */
/* ==================================== */

export const textareaQuestion = document.querySelector(
  '[data-js="new-question"]'
);
export const counterQuestion = document.querySelector(
  '[data-js="currentCharakters-question"]'
);

function questionCount() {
  textareaQuestion.onkeyup = function () {
    counterQuestion.textContent = 300 - this.value.length;
  };
}

export const textareaAnswer = document.querySelector('[data-js="new-answer"]');
export const counterAnswer = document.querySelector(
  '[data-js="currentCharakters-answer"]'
);

function answerCount() {
  textareaAnswer.onkeyup = function () {
    counterAnswer.textContent = 300 - this.value.length;
  };
}

export { questionCount, answerCount };
