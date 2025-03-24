const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".mobile-sidebar");
const closeSidebarBtn = document.querySelector('.x-icon')
const linksMenu = document.querySelectorAll('.mobile-links > li')

function openMenu() {
    sidebar.classList.add('open')
}   

function closeMenu() {
    sidebar.classList.remove('open')
}


linksMenu.forEach(link => {
	link.addEventListener("click", closeMenu)
})
closeSidebarBtn.addEventListener('click', closeMenu)
menuBtn.addEventListener("click", openMenu);


export {openMenu, closeMenu}