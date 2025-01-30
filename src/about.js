export default function buildabout(content) {

    const about = document.createElement('div')
    const title = document.createElement('h1');
    const description = document.createElement('p');

    about.id = 'about';
    about.classList.add("tab")
    title.textContent = 'Contact';
    description.textContent = "This is the about page where u can see our shit lmao"

    about.appendChild(title);
    about.appendChild(description);

    content.appendChild(about);
}