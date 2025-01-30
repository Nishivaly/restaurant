export default function buildHome(content) {

    const home = document.createElement('div')
    const title = document.createElement('h1');
    const description = document.createElement('p');

    home.id = 'home';
    title.textContent = 'My restaurant lmao';
    description.textContent = "Here we sell a lot of cool shit idk bruh"

    home.appendChild(title);
    home.appendChild(description);
    
    content.appendChild(home);
}