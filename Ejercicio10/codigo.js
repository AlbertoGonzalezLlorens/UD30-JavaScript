function comprobarpal(texto){
    var reves;
    texto=texto.toLowerCase();
    texto=texto.replace(/ /g,'');
    for(i=texto.length;i>=0;i--){
        reves+=texto[i-1];
    }
    console.log(texto);
    console.log(reves);
    if(texto==reves){
        return "palíndramo"
    }else{
        return "no es palíndramo"
    }
}

var texto = prompt("introducir un texto");
alert(comprobarpal(texto));