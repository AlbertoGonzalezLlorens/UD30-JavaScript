var valores= [true,5,false,"hola","adios",2];

//4a

if (valores[3].length<valores[4].length){
    console.log(valores[4]);
}else{
    console.log(valores[3]);
}

//4b

var valorfalso = valores[0] == valores[2];
var valorcierto = valores[0] != valores[2];
console.log(valorfalso);
console.log(valorcierto);

//4c

console.log("Suma: " + (valores[1] + valores[5]))
console.log("Resta (5-2): " + (valores[1] - valores[5]))
console.log("División (5/2): " + (valores[1] / valores[5]))
console.log("Multiplicación: " + (valores[1] * valores[5]))
console.log("Modulo (5%2): " + (valores[1] % valores[5]))