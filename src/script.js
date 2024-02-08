// E1
function calcularExponente() {
    let base      = parseInt(document.getElementById('base').value);
    let exponente = parseInt(document.getElementById('exponente').value);
    let resultado = document.getElementById('resultado-1');
    
    if(isNaN(base) || isNaN(exponente)) {
        alert('Debes ingresar base y exponente en el ejercicio 1.');
    } else {
        let resultadoOperacion = Math.pow(base, exponente);
        resultado.innerHTML = `El resultado es: ${resultadoOperacion}`;
    }
}

// E2
function calcularGrados() {
    let centigrados = parseInt(document.getElementById('centigrados').value);
    let resultado = document.getElementById('resultado-2');

    if(isNaN(centigrados)) {
        alert('Debes ingresar los grados centigrados en el ejercicio 2.');
    } else {
        let resultadoOperacion = (centigrados * 1.8) + 32;
        resultado.innerHTML = `El resultado en grados Farenheit es: ${resultadoOperacion}`;
    }
}

// E3
let nombres = [];
function agregarNombre() {
    let nombre  = document.getElementById('nombre').value;
    let listado = document.getElementById('nombres');
    let htmlData = '';

    if(nombre !== '') nombres = [...nombres, nombre];
    nombres.forEach(n => htmlData += `<li>${n}</li>`);
    listado.innerHTML = htmlData;
    document.getElementById('nombre').value = '';
}

function filtrarNombres() {
    let numero  = parseInt(document.getElementById('numero-letras').value);
    let filtrados = document.getElementById('nombres-filtrados');
    let htmlData = '';

    if(isNaN(numero)) {
        alert('Debes ingresar el numero de letras en el ejercicio 3.');
    } else {
        nombres.forEach(n => {
            if(n.length >= numero) htmlData += `<li>${n}</li>`;
        });
        filtrados.innerHTML = htmlData;
    }
}

// E4
let personas = [
    {nombre: 'Eduardo',  fecha: new Date('21/08/1994').toLocaleDateString('es-GT'), edad: 29},
    {nombre: 'Diana',   fecha: new Date('22/03/2019').toLocaleDateString('es-GT'), edad: 4},
    {nombre: 'Julia', fecha: new Date('25/04/2003').toLocaleDateString('es-GT'), edad: 20},
    {nombre: 'Leonel', fecha: new Date('13/02/1996').toLocaleDateString('es-GT'), edad: 27},
    {nombre: 'Hector', fecha: new Date('14/11/2000').toLocaleDateString('es-GT'), edad: 23},
    {nombre: 'Jaime', fecha: new Date('29/12/2015').toLocaleDateString('es-GT'), edad: 8},
    {nombre: 'Jose',  fecha: new Date('08/09/2012').toLocaleDateString('es-GT'), edad: 11},
]

function mostrarEdades() {
    let input = document.getElementById('fecha').value;
    let listado = document.getElementById('personas');
    if(input === '') {
        alert('Debes ingresar la fecha en el ejercicio 4.');
    } else {
        let dateData = input.split('-'); 
        let a = parseInt(dateData[0]);
        let m = parseInt(dateData[1] -1);
        let d = parseInt(dateData[2]);
        let fecha = new Date(a, m, d).toLocaleDateString('es-GT');
        let htmlData = '';
        
        personas.forEach(persona => {
            if(persona.fecha === fecha) {
                htmlData += `<li>${persona.nombre} nacio el ${persona.fecha}</li>`
            }
        });
        listado.innerHTML = htmlData;
    }
}

// E5
function calcularPalabras() {
    let hilera = document.getElementById('hilera').value.trim();
    let resultado = document.getElementById('resultado-5');
    
    if(hilera === '') {
        alert('Debes ingresar una hilera en el ejercicio 5.');
    } else {
        let result = hilera.split(' ').length;
        resultado.innerHTML = `El total de palabras es: ${result}`;
    }
}

// E6
let numeros = [];
function agregarNumero() {
    let numero  = parseInt(document.getElementById('numero').value);
    let listado = document.getElementById('numeros');
    let htmlData = '';

    if(isNaN(numero)) {
        alert('Debes ingresar un numero en el ejercicio 6.');
    } else {
        numeros = [...numeros, numero];
        numeros.forEach(n => htmlData += `<li>${n}</li>`);
    }
    listado.innerHTML = htmlData;
}

function calcularPromedio() {
    let resultado = document.getElementById('resultado-6');
    if(numeros.length === 0) {
        alert('Debes ingresar al menos un numero en el ejercicio 6.');
    } else {
        let suma = numeros.reduce( (sum, num) => sum += num);
        let nums = numeros.length;
        let result = suma / nums;
        resultado.innerHTML = `El promedio de los numeros ingresados es: ${result}`;
    }
}

// E7
function cambiarColor() {
    let cuadro = document.getElementById("cuadro-color");
    let color  = document.getElementById('color').value;
    cuadro.style.backgroundColor = color;
}