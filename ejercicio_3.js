// Ejercicio 3 Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1.

function cuentaRegresiva(n) {
  if (n >= 100) {
    console.log("El número debe ser menor a 100");
    return;
  }
  
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

// Probamos
cuentaRegresiva(5); // Imprime 5, 4, 3, 2, 1

