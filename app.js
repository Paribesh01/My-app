const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open"); 
});
const links = document.querySelectorAll("nav ul li a");
for (let link of links) {
  link.addEventListener("click", function() {
    menu.classList.remove;
  })};