console.log("Hola desde fuera");

let nombre = "daniel";
let edad = 20;
let objeto = {nombre: nombre,edad: edad};
let fecha = new Date();

console.table(objeto);
console.table(numeros);
console.log(sumar(30,7));
console.log(fecha);


let edaed = 18;

if (edad >= 18) {
  console.info("Eres mayor de edad");
} else {
  console.warn("Eres menor de edad");
}




let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let edeed = anio_actual - anio;

if (edad >= 18) {
  console.info("Eres mayor de edad");
} else if (edad >= 12 && edad < 18) {
  if (edad == 12) {
    console.log("Eres un preadolescente");
  } else {
    console.log("Eres un adolescente");
  }
} else {
  console.warn("Eres un niño");
}




 let dia = prompt("Ingresa un número del 1 al");
    
     switch (dia) {
     case 1:
     console.log("Lunes");
     break;
     case 2:
     console.log("Martes");
     break;
     case 3:
     console.log("Miércoles");
     break;
     default:
     console.error("Día no válido");
     }