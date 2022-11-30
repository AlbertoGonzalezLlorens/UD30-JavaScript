var numero = prompt("introducir un valor entero");

function espar(numero){
    if(numero%2 ==0){
        return "El resultado es par"
    }else{
        return "El resultado es impar"
    }
}

alert(espar(numero));