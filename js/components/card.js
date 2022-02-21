/* ==================================== */
/* ------------Show-Answer------------- */
/* ==================================== */

// const answerButton = document.querySelector("[data-js='button_show_answer']");
// const hideAnswer = document.querySelector("[data-js='hide_answer']");

// answerButton?.addEventListener('click', () => {
//   hideAnswer.classList.toggle('answer');
// });

export const answerButtons = document.querySelectorAll("[data-js='answer']");

function toggleAnswer() {
  answerButtons.forEach(answer => {
    const button = answer.querySelector("[data-js='button_show_answer']");
    const showAnswer = answer.querySelector("[data-js='hide_answer']");
    button.addEventListener('click', () => {
      showAnswer.classList.toggle('answer');
    });
  });
}

export default toggleAnswer;
