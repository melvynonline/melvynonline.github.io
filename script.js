const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle the menu and dark background when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');   // Toggle the menu visibility
    hamburger.classList.toggle('active');  // Toggle the dark background for the hamburger
});
