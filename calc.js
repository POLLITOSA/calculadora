function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function validarNotas(nota1, nota2, nota3) {
    return nota1 >= 0 && nota1 <= 10 &&
           nota2 >= 0 && nota2 <= 10 &&
           nota3 >= 0 && nota3 <= 10;
}

function obtenerMensaje(nombre, promedio) {
    if (promedio >= 7) {
        return `${nombre}, ¡felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`;
    } else {
        return `${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`;
    }
}

function main() {
    let nombre = prompt("Ingrese su nombre:");
    let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
    let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
    let nota3 = parseFloat(prompt("Ingrese la nota 3:"));

    if (validarNotas(nota1, nota2, nota3)) {
        let promedio = calcularPromedio(nota1, nota2, nota3);
        let mensaje = obtenerMensaje(nombre, promedio);
        console.log(mensaje);
    } else {
        console.log("Error: Las notas deben estar en el rango de 0 a 10.");
    }
}

main();
