let menuHomeText = document.getElementById('homeText');
let menuHomeIcon = document.getElementById('homeIcon');

let menuAboutText = document.getElementById('aboutText');
let menuAboutIcon = document.getElementById('aboutIcon');


if(menuHomeIcon){
    menuHomeIcon.addEventListener('mouseover', event =>{
        
        if(menuHomeText.style.display = 'block'){
            menuHomeText.style.display = 'none'; 
        } else {
            menuHomeText.style.display = 'block';
        }
        
    
    });
}

if(menuAboutIcon){
    menuAboutIcon.addEventListener('mouseover', event =>{
   
        menuAboutText.style.display = 'block';
    
    });
}



