import "./styles.css"
import loadHome from "./home-content";
import loadMenu from "./menu-content";
import loadAbout from "./about-content";

loadHome();

const contentDiv = document.querySelector("#content")
const homeNav = document.querySelector(".home-nav")
const menuNav = document.querySelector(".menu-nav")
const aboutNav = document.querySelector(".about-nav")

homeNav.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadHome()
})

menuNav.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadMenu()
})

aboutNav.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadAbout()
})


