// Select the hamburger icon, sidebar, and nav
const hamburger = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar on hamburger click
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggles the 'active' class
});