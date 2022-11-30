var factorial = prompt("Introducir valor del factorial");
var calculo = 1;

for(i=1;i<=factorial;i++){
    calculo*=i;
}

alert("El valor del factorial és "+calculo);