import get from "./utilities/getElement.js"

const dots = get([".dot"])
const prev = get(".prev")
const next = get(".next")

let slideIndex = 1
showSlide(slideIndex)

// manual slider
function showSlide(n) {
  const slides = get([".slide"])
  const dots = get([".dot"])
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides.forEach((s) => (s.style.display = "none"))
  dots.forEach((d) => d.classList.remove("dot-active"))

  slides[slideIndex - 1].style.display = "flex"
  dots[slideIndex - 1].classList.add("dot-active")
}
function plusSlides(n) {
  showSlide((slideIndex += n))
}

dots.forEach((el, i) => {
  el.addEventListener("click", () => {
    showSlide((slideIndex = i + 1))
    restartAutoCarousel()
  })
})
prev.addEventListener("click", () => {
  plusSlides(-1)
  restartAutoCarousel()
})
next.addEventListener("click", () => {
  plusSlides(1)
  restartAutoCarousel()
})

// automatic slider
let interval
function startAutoCarousel() {
  interval = setInterval(() => {
    showSlide((slideIndex += 1))
  }, 2500)
}
function stopAutoCarousel() {
  clearInterval(interval)
}
function restartAutoCarousel() {
  stopAutoCarousel()
  startAutoCarousel()
}

// observer
// auto slider becomes active when -
// carousel section comes into the view
const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      console.log("incoming into view")
      startAutoCarousel()
    } else {
      stopAutoCarousel()
      console.log("its still out of view")
    }
  },
  { rootMargin: "100px 0px 100px 0px" }
)

observer.observe(get(".partners-section"))

// Touch events for carousel navigation
let touchStartX

get(".slider-container").addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX
})

get(".slider-container").addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].clientX
  const touchDiff = touchEndX - touchStartX

  if (touchDiff > 0) {
    plusSlides(-1) // Swipe right, go to previous slide
  } else if (touchDiff < 0) {
    plusSlides(1) // Swipe left, go to next slide
  }

  restartAutoCarousel()
})
