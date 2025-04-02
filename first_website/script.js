function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const cursorBorder = document.getElementById("cursor-border");

document.addEventListener("mousemove", (e) => {
  const cursorSize = 10; 
  
  const maxWidth = document.documentElement.scrollWidth - cursorSize;
  const maxHeight = document.documentElement.scrollHeight - cursorSize;

  const x = Math.min(maxWidth, Math.max(cursorSize, e.pageX));
  const y = Math.min(maxHeight, Math.max(cursorSize, e.pageY));

  cursorBorder.style.left = `${x}px`;
  cursorBorder.style.top = `${y}px`;
});
