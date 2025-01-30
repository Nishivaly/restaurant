export default function buildHome(content) {

    const home = document.createElement('div')
    const title = document.createElement('h1');
    const description = document.createElement('p');

    home.id = 'home';
    home.classList.add("tab")
    title.textContent = 'My restaurant lmao';
    description.textContent = "Here we sell a lot of cool shit idk bruh"

    home.appendChild(title);
    home.appendChild(description);

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(home);
}