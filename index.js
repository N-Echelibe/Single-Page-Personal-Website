let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

window.addEventListener("scroll", function () {
  const arrow = document.getElementById("scroll");
  if (window.scrollY > 50) {
    arrow.style.opacity = "0";
  } else {
    arrow.style.opacity = "1";
  }
});
