console.log("javascript is connected!");

const heading = document.querySelector("h1");
heading.textContent = "Josh Gomez - Front-End Developer";

const button = document.getElementById("colorBtn");
button.addEventListener("click", function() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "#f0f8ff";
  } else {
    document.body.style.backgroundColor = "black";
  }
});
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click",function () {
  document.body.classList.toggle("dark");
});
const aboutBtn= document.getElementById("aboutBtn");
const aboutText = document.querySelector("#about p");
  aboutBtn.addEventListener("click", function () {
    if (aboutText.style.display === "none") {
      aboutText.style.display = "block";
    } else {
      aboutText.style.display = "none";
      }
    });
const cards = document.querySelectorAll(".project-card");
  cards.forEach(function(card) {
   card.addEventListener("click", function() {
    card.classList.toggle("active");
  });
});