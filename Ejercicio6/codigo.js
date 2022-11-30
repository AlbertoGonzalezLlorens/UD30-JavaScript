var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = window.prompt("Introducir los numeros del DNI");
var letra = window.prompt("Introducir la letra");

if (dni<0||dni>99999999){
    alert("Número no válido");
}else{
    console.log(dni%23);
    if(letra == letras[dni%23]){
        alert("Letra correcta"+letras[dni%23]);
    }else{
        alert("Letra incorrecta, has introducido "+letra+" y deberia ser "+letras[dni%23]);
    }
}