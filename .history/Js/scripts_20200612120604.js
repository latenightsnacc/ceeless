let menuHome = document.getElementById('homeText');
let menuHome = document.getElementById('homeIcon');

let menuAbout = document.getElementById('aboutText');
let menuHome = document.getElementById('aboutIcon');


if(menuHome){
    menuHome.addEventListener('mouseover', event =>{
   
        menuHome.style.display = 'block';
    
    });
}

if(menuIcon){
    menuIcon.addEventListener('mouseover', event =>{
   
        menuText.style.display = 'block';
    
    });
}



