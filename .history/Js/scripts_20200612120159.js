let menuText = document.getElementsByClassName('homeText');
let menuIcon = document.getElementById('homeIcon');


if(menuIcon){
    menuIcon.addEventListener('mouseover', event =>{
   
        menuText.style.display = 'block';
    
    });
}



