// function moveRandomEl(elm) {
//     elm.style.position = "absolute";
//     elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//     elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
//   }
  
//   const moveRandom = document.querySelector("#move-random");
  
//   moveRandom.addEventListener("mouseenter", function (e) {
//     moveRandomEl(e.target);
//   });

function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// For desktop (mouse hover)
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// For mobile (touch tap)
moveRandom.addEventListener("touchstart", function (e) {
  e.preventDefault(); // prevent normal link behavior
  moveRandomEl(e.target);
});

