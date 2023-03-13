// Ejercicio 1 Cree una función que dado un número n cree un arreglo de largo n, donde en cada posición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1
function sumatoria(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
