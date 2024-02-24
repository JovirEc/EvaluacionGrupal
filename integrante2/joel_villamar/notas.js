let estudiantes = [
    {nombre: "Edwin", apellido: "Erazo", nota1: 8.4, nota2: 9.5, nota3: 8.7, total: 26.6, promedio: 8.7},
    {nombre: "Martiza", apellido: "Rosero", nota1: 5.4, nota2: 8.5, nota3: 9.7, total: 23.6, promedio: 9.7},
    {nombre: "Esteban", apellido: "Guaranda", nota1: 9.4, nota2: 10.0, nota3: 9.0, total: 28.4, promedio: 9.0},
    {nombre: "Ricardo", apellido: "Batista", nota1: 6.4, nota2: 9.5, nota3: 8.9, total: 24.8, promedio: 8.9},
]

mostrarOnload = function(){
    mostrarTablaFn()
    deshabilitarComponente("botonGuardar")

}

calcularTotal = function(n1,n2,n3){
    let suma = n1+n2+n3
    return suma
}

calcularPromedio = function(p1,p2,p3){
    let promedio = (p1+p2+p3)/3
    return promedio
}

calcular = function(){
    let nota1 = recuperarFloat("lblNota1")
    let nota2 = recuperarFloat("lblNota2")
    let nota3 = recuperarFloat("lblNota3")
    let totalSuma
    let totalPromedio

    totalSuma = calcularTotal(nota1,nota2,nota3)
    totalPromedio = calcularPromedio(nota1,nota2,nota3)

    let floatSuma = totalSuma.toFixed(1)
    let floatPromedio = totalPromedio.toFixed(1)

    mostrarTexto("lblSuma","Total es: "+floatSuma)
    mostrarTexto("lblPromedio","Promedio es: "+floatPromedio)
    habilitarComponente("botonGuardar")
}

guardar = function(){
    let nombre = recuperarTexto("lblNombre")
    let apellido = recuperarTexto("lblApellido")

    let nota1 = recuperarFloat("lblNota1")
    let nota2 = recuperarFloat("lblNota2")
    let nota3 = recuperarFloat("lblNota3")
    let totalSuma = calcularTotal(nota1,nota2,nota3)
    let totalPromedio = calcularPromedio(nota1,nota2,nota3)
    let floatSuma = totalSuma.toFixed(1)
    let floatPromedio = totalPromedio.toFixed(1)

    let estudiante = {}

    estudiante.nombre = nombre
    estudiante.apellido = apellido
    estudiante.nota1 = nota1
    estudiante.nota2 = nota2
    estudiante.nota3 = nota3
    estudiante.total = floatSuma
    estudiante.promedio = floatPromedio 

    estudiantes.push(estudiante)
    mostrarTablaFn()
    alert("Notas guardadas con éxito")
    limpiar()
    deshabilitarComponente("botonGuardar")
}

mostrarTablaFn = function(){
    let tabla = ""
    let estudiante
    tabla = "<table><tr>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>NOTA 1</th>"+
    "<th>NOTA 2</th>"+
    "<th>NOTA 3</th>"+
    "<th>TOTAL</th>"+
    "<th>PROMEDIO</th>"+
    "</tr>"
    for(let i = 0; i < estudiantes.length; i++){
        estudiante = estudiantes[i]
        tabla += "<tr>"+
            "<td>"+estudiante.nombre+"</td>"+
            "<td>"+estudiante.apellido+"</td>"+
            "<td>"+estudiante.nota1+"</td>"+
            "<td>"+estudiante.nota2+"</td>"+
            "<td>"+estudiante.nota3+"</td>"+
            "<td>"+estudiante.total+"</td>"+
            "<td>"+estudiante.promedio+"</td>"+
            "</tr>"
        }
    tabla += "</table>"
    let tablita = document.getElementById("lblTabla")
    tablita.innerHTML = tabla
}

limpiar = function(){
    mostrarTextoEnCaja("lblNombre","")
    mostrarTextoEnCaja("lblApellido","")
    mostrarTextoEnCaja("lblNota1","")
    mostrarTextoEnCaja("lblNota2","")
    mostrarTextoEnCaja("lblNota3","")
    mostrarTextoEnCaja("lblSuma","")
    mostrarTextoEnCaja("lblPromedio","")
}