//var arrayDeParametrosDeEjecucion = process.argv;
//console.log(arrayDeParametrosDeEjecucion);


//var parametros = process.argv;
//var nombre = parametros[2];
//console.log('Hola' , nombre); 

/*

var nombre1 = process.argv[2];
var nombre2 = process.argv[3];

console.log('este archivo ha recibidio 2 nombres como parametros de ejecucion');
console.log('el primero es' , nombre1);
console.log('el segundo es' , nombre2);

*/

var numeroEnFormatoTexto1 = process.argv[2];
var numeroEnFormatoTexto2 = process.argv[3];

console.log('los 2 numeros concatenados:' , numeroEnFormatoTexto1 + numeroEnFormatoTexto2);


var numero1 = Number(numeroEnFormatoTexto1);
var numero2 = Number(numeroEnFormatoTexto2);

console.log('los 2 numeros sumados:' , numero1 + numero2);




