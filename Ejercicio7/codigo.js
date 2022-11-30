var numero = window.prompt("Introducir valor del factorial");
var calculo = 1;

for(i=1;i<=numero;i++){
    calculo*=i;
    console.log(calculo);
}

alert("El valor del factorial és "+calculo);