const player = document.querySelector(".player");
let step = player.offsetWidth;
const maze = document.querySelector(".maze");

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" && player.offsetTop != 435) {
    player.style.top = player.offsetTop + step + "px";
  } else if (event.key === "ArrowUp" && player.offsetTop != 0) {
    player.style.top = player.offsetTop - step + "px";
  } else if (event.key === "ArrowLeft" && player.offsetLeft != 0) {
    player.style.left = player.offsetLeft - step + "px";
  } else if (event.key === "ArrowRight" && player.offsetLeft != 285) {
    player.style.left = player.offsetLeft + step + "px";
  }
});
