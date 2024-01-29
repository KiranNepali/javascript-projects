const plusBtn = document.querySelectorAll(".plus-btn");

const questions = document.querySelectorAll(".question");

plusBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const clickedQuestion = e.currentTarget.parentElement.parentElement;
    const text = e.currentTarget.parentElement.parentElement.children[1];
    text.classList.toggle("show-ans");

    // minus buttton

    // remove other ans
    questions.forEach((question) => {
      const otherAnswer = question.querySelector(".ans");
      console.log(otherAnswer);
      if (
        question !== clickedQuestion &&
        otherAnswer.classList.contains("show-ans")
      ) {
        otherAnswer.classList.remove("show-ans");
      }
    });
  });
});
