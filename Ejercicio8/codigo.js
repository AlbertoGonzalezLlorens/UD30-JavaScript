var numero = window.prompt("introducir un valor entero");

function espar(numero){
    if(numero%2){
        return "El resultado es par";
    }else{
        return "El resultado es impar";
    }
}

alert(espar(numero));