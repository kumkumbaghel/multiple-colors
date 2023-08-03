const colorButtons = document.querySelectorAll(".colorButton");
const colorDisplay = document.getElementById("colorDisplay");

// Array of colors for the game
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

let targetColor;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function resetGame() {
  targetColor = getRandomColor();
  colorDisplay.style.backgroundColor = targetColor;
  colorButtons.forEach((button) => {
    button.style.backgroundColor = getRandomColor();
  });
}

function checkColor(clickedButton) {
  const selectedColor = clickedButton.style.backgroundColor;
  if (selectedColor === targetColor) {
    alert("Congratulations! You matched the color!");
  } else {
    alert("Oops! Try again!");
  }
  resetGame();
}

// Start the game when the page loads
resetGame();
