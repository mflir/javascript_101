var botiquin = [
  {
    nombre: 'Curitas',
    cantidad: 13
  }, 
  {
    nombre: 'Alcohol en gel',
    cantidad: 11
  },
  {
    nombre: 'Aspirinas',
    cantidad: 3
  },
  {
    nombre: 'Guantes de latex',
    cantidad: 4
  }
]; 
console.log(botiquin);


// Recorra el botiquín con los nuevos objetos mostrando el nombre y la cantidad de cada elemento.

var indice = 0;
while(indice < botiquin.length) {
  var elemento = botiquin[indice];
  console.log(elemento.nombre, elemento.cantidad);
  indice = indice + 1;
}