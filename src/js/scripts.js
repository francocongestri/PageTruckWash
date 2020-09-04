//Funciones adivinanza
/*function checkAnswer(){
    if (document.getElementById("question0") == 1113){
            ganaste = true;
            alert("Ganaste!");
        }
        else {
            intentos++
            if (intentos == 1){
                alert("Incorrecto \n intenta nuevamente");
            }
            else if(intentos == 2){
                alert("Incorrecto \n Es un numero de cuatro cifras");
            }
            else if(intentos == 3){
                alert("Incorrecto \n En la pagina esta escrito el precio");
            }
            else if(intentos == 4){
                alert("Perdiste");
            }
        }
}*/

//Verificar var a = document.getElementById("id").value;
function main(){
    var intentos = 0;
    var ganaste = false;
    while ((intentos < 4) && (ganaste == false)){
        document.getElementById("adivinanza")
        if (document.getElementById("question0") == 1113){
            ganaste = true;
            alert("Ganaste!");
        }
        else {
            intentos++
            if (intentos == 1){
                alert("Incorrecto! \n intenta nuevamente");
            }
            else if(intentos == 2){
                alert("Incorrecto! \n Es un numero de cuatro cifras");
            }
            else if(intentos == 3){
                alert("Incorrecto! \n En la pagina esta escrito el precio");
            }
            else if(intentos == 4){
                alert("Perdiste!");
            }
        }
    }
}    
//Fin funciones adivinanza