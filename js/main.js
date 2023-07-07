let button = document.querySelector('.nav-button');
let nav_links = document.querySelector('.nav-links');
button.addEventListener('click', () => {
    nav_links.classList.toggle('open');
    Array.from(button.children).forEach(dash => {
        dash.classList.toggle('close');
    });
});
