let menuHomeText = document.getElementById('homeText');
let menuHomeIcon = document.getElementById('homeIcon');

let menuAboutText = document.getElementById('aboutText');
let menuAboutIcon = document.getElementById('aboutIcon');

UIkit.util.ready(function () {

    var brandIdentity = document.getElementById('brandIdentity-progressbar');

    var animate = setInterval(function () {

        brandIdentity.value += 10;

        if (brandIdentity.value >= brandIdentity.max) {
            clearInterval(animate);
        }

    }, 1000);

});


if(menuHomeIcon){
    menuHomeIcon.addEventListener('mouseover', event =>{
        
        
        menuHomeText.style.display = 'block';
        if(menuHomeText.style.display === 'block'){
            menuHomeText.style.display = 'none';
        }

        
    
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



