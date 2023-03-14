const menuButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", ()=>{
    menuButton.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
})