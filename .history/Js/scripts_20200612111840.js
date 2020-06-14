const menuText = document.querySelector('.menu-text');
const menuIcon = document.querySelector('.fa');

menuIcon.addEventListener('mouseover', displayMenuText());

const displayMenuText = e => {
    alert('working');
}