/*Ejercicios

    Dado el siguiente array de meses del año:

 var meses = [
        'Enero', // índice `0`
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'  // índice 11, equivalente a `meses.length - 1`
    ];
/*
   /* Escribir un programa que:
        Declare y asigne una variable que tenga como valor el número del mes de tu cumpleaños.
        Muestre por terminal el nombre del mes de tu cumpleaños.

RESPUESTA 

var miCumpleaños = meses[11];
    console.log(miCumpleaños);


*/

/*
   // Dado los siguientes arrays:

 var meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    var planetas = [
        'Mercurio',
        'Venus',
        'Tierra',
        'Marte',
        'Saturno',
        'Jupiter',
        'Urano',
        'Neptuno',
        'Plutón'
    ];

 /*       Mostrar por la terminal la cantidad de elementos que tiene cada uno.
        Mostrar por la terminal el último elemento de cada array (usando la propiedad length que tienen los arrays).
        Mostrar el cuarto planeta por pantalla (Marte).


RESPUESTAS

console.log(meses.length + planetas.length);
console.log(meses[meses.length-1]);
console.log(planetas[planetas.length-1]);

console.log(planetas[3]);

*/


/*


//    Dado el siguiente array de nombres:

    var nombres = ['Sofía', 'Abril'];
    var apellidos = ['Rodriguez', 'López'];

  //      Mostrar por la terminal el primer elemento de cada array.
  //      Crear un nuevo array llamado nombreCompleto que contenga 
  //    el segundo elemento del array nombres y el primer elemento del array apellidos. 
  //    Mostrar el nuevo array por la terminal.



console.log(nombres[0]);
console.log(apellidos[0]);

var nombreCompleto = [nombres[1] , apellidos [0]];
console.log(nombreCompleto);


 /*   Dado el siguiente array de participantes de una carrera y considerando que están ordenados en base al orden de llegada (el primer elemento es el primero en haber llegado):





    var corredores = [
        'Margarita', // ganó la carrera
        'Juan',
        'Raquel',
        'Ezequiel',
        'Gonzalo',
        'Martina',
        'Julian' // último 🙁
    ];

//        Mostrar por la terminal los 3 primeros en llegar a la meta usando índices numéricos.
//        Crear un nuevo array llamado losUltimos que contenga los 2 últimos corredores en 
//        llegar (usando la propiedad length que tienen los arrays). Mostrar este nuevo array 
//        por la terminal.

console.log(corredores[0] , corredores[1], corredores[2]);
var losUltimos = [corredores[corredores.length-1] , corredores[corredores.length-2]];
console.log(losUltimos);




