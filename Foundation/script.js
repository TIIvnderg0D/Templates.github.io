const menuWrapper = document.querySelector('.opened-wrapper');
const menuItem = document.querySelector('.opened');

function subMenu() {

    menuItem.classList.remove('opened');
    menuItem.classList.add('grouped');
}
menuItem.addEventListener('click', subMenu);