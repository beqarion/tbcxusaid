// accordeon menu functionality
import get from "./utilities/getElement.js"

const questions = get([".question-header"])

questions.forEach((q) => {
  q.addEventListener("click", function (e) {
    const caretBox = this.querySelector(".caret-box")
    const answer = this.nextElementSibling
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null
      caretBox.classList.remove("active")
    } else {
      closeAllQuestions()
      caretBox.classList.add("active")
      answer.style.maxHeight = answer.scrollHeight + "px"
    }
  })
})

function closeAllQuestions() {
  const answers = get([".answer-collapsable"])
  const caretBoxes = get([".caret-box"])

  answers.forEach((a) => (a.style.maxHeight = null))
  caretBoxes.forEach((c) => c.classList.remove("active"))
}
