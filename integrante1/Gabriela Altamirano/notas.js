let notas = [
    { nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7 },
    { nombre: "Maritza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7 },
    { nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0 },
    { nombre: "Ricardo", apellido: "Bastia", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9 },
]

function calcularTotal(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma
}
function calcularPromedio(p1, p2, p3) {
    let nota;
    let suma = (p1 + p2 + p3) / 3;
    nota = suma
    return nota
}
function calcular() {
    let promedio;
    let promedioDecimales;
    let nota1 = recuperarFloat("Nota1");
    let nota2 = recuperarFloat("Nota2");
    let nota3 = recuperarFloat("Nota3");
    promedio = calcularPromedio(nota1, nota2, nota3);
    let respuesta = "El promedio es de " + promedio;
    mostrarTexto("lblPromedio", respuesta);
    habilitarComponente("btnGuardar");
}
function guaradar() {
    let nombres = recuperarTexto("Nombre");
    let apellidos = recuperarTexto("Apellido");
    let not1 = recuperarFloat("Nota1");
    let not2 = recuperarFloat("Nota2");
    let not3 = recuperarFloat("Nota3");
    let totalG = calcularTotal();
    let promedioG = calcularPromedio();
    estudiantes = {}
    estudiantes.nombre = nombres;
    estudiantes.apellido = apellidos;
    estudiantes.nota1 = not1
    estudiantes.nota2 = not2
    estudiantes.nota3 = not3
    estudiantes.total = totalG;
    estudiantes.promedio = promedioG;
    agregar(estudiantes);
    alert("Notas agregadas correctamente");
    limpiar();
    mostraraTablas();
}
function mostraraTablas() {
    let cmpTabla = document.getElementById("tablaEstudiantes");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>NOTA1</th>" +
        "<th>NOTA2</th>" +
        "<th>NOTA3</th>" +
        "<th>TOTAL</th>" +
        "<th>PROMEDIO</th>" +
        "</tr>";

    //bucle para mostrar los objetos
    for (let i = 0; i < notas.length; i++) {
        let datosEstudiante;
        datosEstudiante = notas[i];
        contenidoTabla +=
            "<tr><td>" + datosEstudiante.nombre + "</td>" +
            "<td>" + datosEstudiante.apellido + "</td>" +
            "<td>" + datosEstudiante.nota1 + "</td>" +
            "<td>" + datosEstudiante.nota2 + "</td>" +
            "<td>" + datosEstudiante.nota3 + "</td>" +
            "<td>" + datosEstudiante.total + "</td>" +
            "<td>" + datosEstudiante.promedio + "</td>" +
            
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
    deshabilitarComponente("btnGuardar");
}
function agregar(estudiante) {
    let resultado;
    resultado = notas.push(estudiante);
}
function limpiar() {
    mostrarTextoEnCaja("Nombre", "");
    mostrarTextoEnCaja("Apellido", "");
    mostrarTextoEnCaja("Nota1", "");
    mostrarTextoEnCaja("Nota2", "");
    mostrarTextoEnCaja("Nota3", "");
    deshabilitarComponente("btnGuardar");
}