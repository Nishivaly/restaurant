export default function buildMenu(content) {

    const menu = document.createElement('div')
    const title = document.createElement('h1');
    const description = document.createElement('p');

    menu.id = 'menu';
    menu.classList.add("tab")
    title.textContent = 'Food listing';
    description.textContent = "This is the menu we offer lmao"

    menu.appendChild(title);
    menu.appendChild(description);
    
    content.appendChild(menu);
}