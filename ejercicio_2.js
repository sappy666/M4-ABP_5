// Ejercicio 2 Construya una función que imprima si un número es primo o no. Los números primos son aquellos que son divisibles solo por 1 y por sí mismos.
function esPrimo(n) {
  if (n <= 1) {
    return false;
  }

  // Verificar si es divisible por algún número entre 2 y su mitad
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
