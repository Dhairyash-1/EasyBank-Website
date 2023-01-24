"strict mode";

const hamburger = document.getElementById("toggle-btn");

hamburger.addEventListener("click", () => {

  if ((hamburger.getAttribute('src') == "./images/icon-hamburger.svg")) {
    hamburger.src = "./images/icon-close.svg";
  
  } else  {
    hamburger.src = "./images/icon-hamburger.svg";
    
  }

});
