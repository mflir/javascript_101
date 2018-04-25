
var operacion = process.argv[2];
var numero1ComoString = process.argv[3];
var numero2ComoString = process.argv[4];
var numero1 = Number(numero1ComoString);
var numero2 = Number(numero2ComoString);

console.log('La operación que se solicitó fue:', operacion);

if (operacion === 'sumar') {
    console.log('El resultado es', numero1 + numero2);
} else {
    console.log('El resultado es', numero1 - numero2);
}