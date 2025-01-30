import "./styles.css"
import buildHome from "./home.js"
import buildMenu from "./menu.js";
import buildAbout from "./about.js";

const content = document.querySelector("#contentw");

(() => {
    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const aboutButton = document.querySelector('#about-button');

    homeButton.addEventListener('click', () => {
        buildHome(content);
    });

    menuButton.addEventListener('click', () => {
        buildMenu(content);
    });

    aboutButton.addEventListener('click', () => {
        buildAbout(content);
    });

})();

buildHome(content);