let menuHomeText = document.getElementById('homeText');
let menuHomeIcon = document.getElementById('homeIcon');

let menuAboutText = document.getElementById('aboutText');
let menuAboutIcon = document.getElementById('aboutIcon');


if(menuHomeIcon){
    menuHomeIcon.addEventListener('mouseover', event =>{
        
        if(menuHomeText.style.display = 'none'){
            menuHomeText.style.display = 'block';
        }
        menuHomeText.style.display = 'none';

        
    
    });
}

if(menuAboutIcon){
    menuAboutIcon.addEventListener('mouseover', event =>{
   
        menuAboutText.style.display = 'block';
    
    });
}



