let menuText = document.getElementsByClassName('menu-Text');
let menuIcon = document.getElementById('menu-Icon');


if(menuIcon){
    menuIcon.addEventListener('mouseover', event =>{
   
        menuText.style.display = 'block';
    
    });
}



