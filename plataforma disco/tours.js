let nombreUsuario = prompt("Hola ¿cuál es tu nombre?")
let edad = prompt("¿Cuantos años tenes?")
alert("Hola " + nombreUsuario +" de " + edad+ " años. ¿Te interesa comprar tickets? ;D ")


let nombre = prompt("Cuál es tu nombre?");
const span = document.querySelector("#welcome");

if (nombre.length < 2) {
  nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
}
span.textContent = "Hola, " + nombre;