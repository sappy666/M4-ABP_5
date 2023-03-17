// Ejercicio 4 Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango.

function sumarPares(n) {
  let suma = 0;
  if (n>1000 || n<10 ){return}
  for (let i = n; i <= 1000; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  return suma;
}
console.log(
  sumarPares(998)
);