let menuText = document.querySelector('menu-text');
let menuIcon = document.querySelector('fa');


const displayMenuText = e => {
    e.alert('working');
}

menuIcon.addEventListener('mouseover', displayMenuText());

