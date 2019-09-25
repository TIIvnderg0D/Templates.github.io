const menuText = document.querySelector('.submenu-rev');
const menuItem = document.querySelector('.revealed');

/*function subMenu() {
    menuItem.classList.remove('revealed');
    menuItem.classList.add('hidden');
    menuText.classList.remove('submenu-rev');
    menuText.classList.add('submenu');
}
menuText.addEventListener('click', subMenu);*/

menuText.onclick = function() {
    menuItem.classList.toggle('open');
}