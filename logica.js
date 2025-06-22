const nombre = prompt("¿Cuál es tu nombre?");
const edadTexto = prompt("¿Cuál es tu edad?");
const edad = parseInt(edadTexto);

if (!nombre || nombre.trim() === "") {
  alert("Por favor, ingresa un nombre válido.");
} else if (isNaN(edad)) {
  alert("Por favor, ingresa una edad válida.");
} else if (edad >= 18) {
  alert(nombre + ", puedes conducir");
} else {
  alert(nombre + ", no puedes conducir");
}



