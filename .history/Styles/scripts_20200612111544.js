const menuText = document.querySelector('.menu-text');
const menuIcon = document.querySelector('.fa');

menuIcon.addEventListener('mouseOver', displayMenuText());

const displayMenuText = e => {
    alert('working');
}