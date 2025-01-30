import "./styles.css"
import buildHome from "./home.js"
import buildMenu from "./menu.js";
import buildAbout from "./about.js";

const content = document.querySelector("#content");

(() => {
    const homeButton = document.querySelector('#home-button');
    const menuButton = document.querySelector('#menu-button');
    const aboutButton = document.querySelector('#about-button');

    function wipeContent() {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    homeButton.addEventListener('click', () => {
        wipeContent();
        buildHome(content);
    });

    menuButton.addEventListener('click', () => {
        wipeContent();
        buildMenu(content);
    });

    aboutButton.addEventListener('click', () => {
        wipeContent();
        buildAbout(content);
    });

})();

buildHome(content);