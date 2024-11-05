function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const cursorBorder = document.getElementById("cursor-border");

document.addEventListener("mousemove", (e) => {
  const cursorSize = 10;

  // Calculate constrained positions to avoid overflow
  const x = Math.min(window.innerWidth - 26, Math.max(cursorSize, e.pageX));
  const y = Math.min(
    window.innerHeight - cursorSize,
    Math.max(cursorSize, e.pageY)
  );

  cursorBorder.style.left = `${x}px`;
  cursorBorder.style.top = `${y}px`;
});

// var opacity = 0;
// var intervalID = 0;
// window.onload = fadeIn;

// function fadeIn() {
//   setInterval(show, 200);
// }

// function show() {
//   var body = document.getElementById("body");
//   opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
//   if (opacity < 1) {
//     opacity = opacity + 0.1;
//     body.style.opacity = opacity;
//   } else {
//     clearInterval(intervalID);
//   }
// }
