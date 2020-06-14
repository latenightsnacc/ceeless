let menuHome = document.getElementById('homeText');
let menuHome = document.getElementById('homeIcon');

let menuAbout = document.getElementById('aboutText');
let menuAbout = document.getElementById('aboutIcon');


if(menuHome){
    menuHome.addEventListener('mouseover', event =>{
   
        menuHome.style.display = 'block';
    
    });
}

if(menuAbout){
    menuAbout.addEventListener('mouseover', event =>{
   
        menuAbout.style.display = 'block';
    
    });
}



