// для появления элеменотов при скролле
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.2] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  ".contacts__inner, .about__inner , .skills__inner,.works__inner,.services__inner"
);
for (let elm of elements) {
  observer.observe(elm);
}
//добавление класса (это для бургера)
$(document).ready(function () {
  $(".header__menu-burger").click(function () {
    $(".header__menu-burger").toggleClass("open-menu");
    $(".header__list").toggleClass("open-menu");
  });
});

//progress
let progressSection = document.querySelector(".progress-section");
let progressBar = document.querySelector(".progress-bar");
let progressNum = document.querySelector(".progress-num");

let x, y;
// window.addEventListener("mousemove", (e) => {
//   x = e.clientX;
//   y = e.clientY;
// });
function updateProgressBar() {
  progressSection.style.transform = `translate(${x}px, ${y}px)`;
  progressBar.style.height = `${getScrollPercentage()}%`;
  progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`;
  requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  return (
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}
updateProgressBar();

// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};
