let menuHomeText = document.getElementById('homeText');
let menuHomeIcon = document.getElementById('homeIcon');

let menuAboutText = document.getElementById('aboutText');
let menuAboutIcon = document.getElementById('aboutIcon');


if(menuHomeIcon){
    menuHomeIcon.addEventListener('mouseover', event =>{
        
        
        menuHomeText.style.display = 'none';

        
    
    });
}

if(menuAboutIcon){
    menuAboutIcon.addEventListener('mouseover', event =>{
   
        menuAboutText.style.display = 'block';

        if(menuAboutText.style.display = 'block'){
            menuAboutText.style.display = 'none';
        }
    
    });
}



