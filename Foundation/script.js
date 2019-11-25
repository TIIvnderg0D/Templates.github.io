const menuItem1 = document.getElementById('nav-services');
const menuItem2 = document.getElementById('nav-works');
const menuItem3 = document.getElementById('nav-news');
const menuItem4 = document.getElementById('nav-shop');
const menuText1 = menuItem1.querySelector('.submenu');
const menuText2 = menuItem2.querySelector('.submenu');
const menuText3 = menuItem3.querySelector('.submenu');
const menuText4 = menuItem4.querySelector('.submenu');
const nav = document.querySelector('.nav');
const closeNav = document.getElementById('nav-close');
const menuHeader = document.getElementById('menu');
const pageMenu = document.querySelector('.page-menu');
const cart = document.getElementById('shopping-cart');
const cartOpen = document.querySelector('.shopping-cart__wrapper');
const menuAdaptIcon = document.querySelector('.menu');
const menuAdapt = document.querySelector('.hidden-menu');

menuText1.onclick = function() {
    menuItem1.classList.toggle('open');
}

menuText2.onclick = function() {
    menuItem2.classList.toggle('open');
}

menuText3.onclick = function() {
    menuItem3.classList.toggle('open');
}

menuText4.onclick = function() {
    menuItem4.classList.toggle('open');
}

closeNav.onclick = function() {
    nav.classList.add('close');
}

menuHeader.onclick = function() {
    pageMenu.classList.toggle('open');
}

cart.onclick = function() {
    cartOpen.classList.toggle('open');
}

menuAdaptIcon.onclick = function() {
    menuAdapt.classList.toggle('open');
}
