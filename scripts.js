var desplegarMenu= document.getElementById("desplegar");
var contraerMenu=document.getElementById("contraer");

desplegarMenu.addEventListener("click", ()=>{

    document.getElementById("desplegable").style.top="-1.5em";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegar").style.display="none";
    document.getElementById("contraer").style.display="block";
    
});

contraerMenu.addEventListener("click", ()=>{

    document.getElementById("desplegable").style.top="-4em";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegar").style.display="block";
    document.getElementById("contraer").style.display="none";
    
});
