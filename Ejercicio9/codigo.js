function comprobartexto(texto){
    if (texto == texto.toUpperCase()){
        return "Todo maysuculas"
    } else if (texto == texto.toLowerCase()){
        return "Todo minusculas"
    } else {
        return "Hay de todo"
    }

}

var texto = prompt("introducir un texto");
alert(comprobartexto(texto));