const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('translate-x-full');
});