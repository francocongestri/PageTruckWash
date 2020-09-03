// Empty JS for your own code to be here
function checkAnswer(){
    if (precio == 333){
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
}
function main(){
    var intentos = 0;
    while ((intentos < 4) && (ganaste == false)){
        document.getElementById("precio").submit();
        checkAnswer();
    }
}    