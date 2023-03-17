// Ejercicio 1 Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.

function sumatoria(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
