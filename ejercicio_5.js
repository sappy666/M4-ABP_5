// Ejercicio 5 Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12.

function tablaMultiplicar(n) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
// Probamos
tablaMultiplicar(5);
