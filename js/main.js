"strict mode";

const hamburger = document.getElementById("toggle-btn");
const navlinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("hidden");
  if (hamburger.getAttribute("src") == "./images/icon-hamburger.svg") {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
});
