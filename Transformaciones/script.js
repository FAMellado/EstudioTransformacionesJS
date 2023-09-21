//Cambiar el color manualmente mediante una función en el código
//(Comentar función para no aplicarla, no borrar)

//mediante ID

/* 
var divsCajas = document.getElementById("caja1");

divsCajas.style.backgroundColor = "yellow";

*/

//Es necesario usar el DEFER por que al cargar la pagina, el navegador 
//carga primero el script antes de los objetos del html, entonces corre
//el script y no encuentra nada. El defer lo tira hasta despues de ejecutar
//la otra wea

//CON BUTTON 

// POR ID

function cambiarDiv2ARojo(){
    document.getElementById("caja2").style.backgroundColor = "Red";
}

function cambiarDivsARojo(){

    /*
     Elements por class genera una lista HTMLCollection la cual se puede
     recorrer como un arreglo [0]... y tiene un .lenght
     */
    var divsCajas = document.getElementsByClassName("caja");

    for (var i=0 ; i < divsCajas.length; i++){
        divsCajas[i].style.backgroundColor = "red";
    }
    
}

function cambiarDivsAVerde(){

    var divsCajas = document.getElementsByClassName("caja");

    for (var i = 0; i < divsCajas.length ; i++){

        divsCajas[i].style.backgroundColor = "green"

    }

}

function cambiarDivsANegro(){

    var divsCajas = document.getElementsByClassName("caja");

    for (var i=0; i < divsCajas.length ; i++){

        divsCajas[i].style.backgroundColor = "black";

    }
}

function cambiarDivsAAzul(){

    var divsCajas = document.getElementsByClassName("caja");

    for (var i=0 ; i < divsCajas.length ; i++){

        divsCajas[i].style.backgroundColor = "blue";

    }
}

function mensajeEnConsola(){
    console.log("Sufrimiento");
}

function mensajeEnNotificacion(){
    alert("AAAAAAAAAAAAAAA");
}

//Transformaciones

// Make sure to wait until the document is fully loaded before executing your scripts

function rotarDivs() {

    $(".caja").addClass("animacion-rotar");

    $(".caja").on("animationend", function() {
        $(this).removeClass("animacion-rotar");
    });
    
    
}

function bailarDivs(){

    $(".caja").addClass("bailar")

    $(".caja").on("animationend", function(){
        $(this).removeClass("bailar");
    });
}

function engordarDivs(){

    $(".caja").addClass("engordar");

    $(".caja").on("animationend", function(){
        $(this).removeClass("engordar");
    });
}

function estirarDivs(){

    $(".caja").addClass("estirar");
    $(".caja").on("animationend", function(){
        $(this).removeClass("estirar");
    });
}