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