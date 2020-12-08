// Menu functionality
const menuButton = document.querySelector('.navbar-toggler');
const menuIcon = document.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
    const menuOpened = menuButton.getAttribute('aria-expanded');
    console.log(menuOpened)
    menuIcon.src = menuOpened == 'true' ? 'images/icons/icon-x-mark.png' : 'images/icons/icon-menu.png';
});

// Form
function sendMessage(event) {
    event.preventDefault();
    const form = document.querySelector('#contactForm');
    const formData = new FormData(form);
    alert('Hey! we got your data but the email functionality is not available yet, please send me an email: fdutari2@gmail.com. Thanks!');
}