/* Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de la variable por la terminal.*/

var noValgoNi5 = 4;
console.log(noValgoNi5);

/*Declarar 3 variables:

    miAnoDeNacimiento y asignarle el valor de tu año de nacimiento.
    meGustariaTener80Anos y asignarle el número 80.
    voyATener80ElAno y asignarle el resultado de sumar las 2 variables anteriores

Mostrar por la terminal el año en el que vas a cumplir 80 años.*/

var miAnoDeNacimiento = 1988;
var meGustariaTener80Anos = 80;
var voyATener80ElAno = miAnoDeNacimiento + meGustariaTener80Anos;

console.log(voyATener80ElAno);



/*Declarar 3 variables:

    costoDeUnaTele y asignarle el valor 10000.
    ahorros y asignarle el valor 9000.
    dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.

Mostrar por la terminal cuanto dinero te falta para comprar la tele.*/

var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log("Necesito $"+ dineroQueMeFalta + " para comprar una tele.");


/*Declarar 3 variables:

    diasPorAno y asignarle el número 365
    cantidadDeAnosEnUnaDecada y asignarle el número 10
    cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.

Mostrar por la terminal cuantos días hay en una década.*/

var diasPorAno = 365;
var cantidadDeAnosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = diasPorAno * cantidadDeAnosEnUnaDecada;

console.log("En una decada hay " + cantidadDeDiasEnUnaDecada + " dias.");



/*Teniendo en cuenta que una pizza siempre tiene 8 porciones, 
mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.

Preguntas que te deberías hacer para resolver este ejercicio: 
¿Qué números menciona el enunciado?, ¿Los puedo guardar en variables?, 
¿Qué cuenta puedo hacer para obtener el resultado?*/

var cantidadDePorcionesEnLaMesa = 24;
var cantidadDePorcionesPorPizza = 8;
var cuantasPizzasTengo = cantidadDePorcionesEnLaMesa / cantidadDePorcionesPorPizza;

console.log("En la mesa tengo " + cuantasPizzasTengo);

/*Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente 
el animal que más te gusta. Escribir el código necesario para mostrar por la terminal el valor true 
si el animal que más te gusta es un 'perro'. De lo contrario, mostrar false. 
Usar el operador de igualdad (==). */

var miAnimalFavorito = "oveja" == "perro";

console.log(miAnimalFavorito);


/*Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena 
de caracteres 'flan' y 'flan con dulce de leche' (Podés crear todas las variables que quieras, 
incluso podés resolverlo sin usar variables).*/

console.log ("flan" != "flan con dulce de leche");


/*Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad
 y el número 18 usando el operador > (mayor). Mostrar el valor de la variable por la terminal.*/

var miEdad = 28;
var soyMayorDeEdad = miEdad > 18;

console.log(soyMayorDeEdad);


/*Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad y el número 25
usando el operador < (menor). Mostrar el valor de la variable por la terminal.*/

var soyMenorDe25 = miEdad < 25;
console.log(soyMenorDe25);


/*Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre del 
mes actual es igual a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). 
Mostrar el valor de la variable por la terminal.*/

var mesActual = "octubre";
var estamosEnEnero = mesActual == "Enero";

console.log(estamosEnEnero);


/*Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el nombre del mes
actual y el string 'Enero' son diferentes. Hacerlo usando el operador de desigualdad estricta (!==).
Mostrar el valor de la variable por la terminal.*/

console.log(mesActual !== "enero"); 



/*Declarar 3 variables:

    miNotaEnElParcial y asignarle un 8
    notaMinimaParaAprobar y asignarle un 6
    estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando el 
    operador >= (Mayor o igual).

Mostrar el valor de la variable estoyAprobado por la terminal.*/

var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;

var estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;

console.log(estoyAprobado);


/*Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar con 
el operador <= (Menor o igual) si la hora actual es menor o igual a 12. Mostrar el valor por la terminal.*/

var horaActual = 18;
var esHoraDeAlmorzar = horaActual <= 12;

console.log(esHoraDeAlmorzar);

 


