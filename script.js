const menuOpen = document.querySelector("#hamburger-menu")
const menuBg = document.querySelector("#menu-bg")
const navItems = document.querySelector("#nav-menu")
const hamburgerMenuLinks = document.querySelector("menu")

function onMenuClick() {
    menuOpen.classList.toggle("change")
    menuBg.classList.toggle("menubg")
    navItems.classList.toggle("change")
}