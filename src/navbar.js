import get from "./utilities/getElement.js"
import isScrolled from "./utilities/checkIfScrolled.js"

const navToggle = get(".nav-toggle-btn")
const navLinks = get(".nav-links")
const navbar = get(".nav")
navToggle.addEventListener("click", (e) => {
  navLinks.classList.toggle("show-links")
})

window.onscroll = () => {
  if (isScrolled()) {
    navbar.style.backgroundColor = "rgba(26, 30, 31, 0.8)"
  } else {
    navbar.style.backgroundColor = "rgba(26, 30, 31, 1)"
  }
}
