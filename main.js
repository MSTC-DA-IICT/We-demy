const menuIcon = document.getElementById("mobile-menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu-open")
});