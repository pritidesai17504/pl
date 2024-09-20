let isMoving = false;
let direction = 1; // 1 for right, -1 for left

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  isMoving = !isMoving;
  if (isMoving) {
    moveButton();
  }
});

function moveButton() {
  const left = parseInt(button.style.left);
  button.style.left = (left + direction) + "px";

  if (left <= 0 || left >= window.innerWidth - button.offsetWidth) {
    direction *= -1;
  }

  if (isMoving) {
    setTimeout(moveButton, 10);
  }
}