const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggles the menu visibility
    hamburger.classList.toggle('active'); // Adds/removes the active class for animation
});
