let menuText = document.getElementsByClassName('menu-text');
let menuIcon = document.getElementById('fa');


if(menuIcon){
    menuIcon.addEventListener('mouseover', event =>{
   
        menuText.style.display = 'block';
    
    });
}



