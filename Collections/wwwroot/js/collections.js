class Persona1 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Empleado1 extends Persona1 {
    constructor(nombre, edad, identificacion, experiencia) {
        super(nombre, edad);
        this.nombre = nombre;
        this.edad = edad;
        this.identificacion = identificacion;
        this.experiencia = experiencia;
    }
}
let personas = new Set();
let empleados = new Map();
function displayData(type, data) {
    const displayDiv = document.getElementById('display');
    const newElement = document.createElement('p');
    newElement.textContent = `Nueva ${type} Nombre: ${data.nombre} y edad: ${data.edad}`;
    if (type === 'Empleado') {
        newElement.textContent += ` EL id del empleado es: ${data.identificacion} y tiene una experiencia de: ${data.experiencia} años.`;
    }
    displayDiv.appendChild(newElement);
}
function displayMessage(message) {
    const displayDiv = document.getElementById('display');
    const newElement = document.createElement('p');
    newElement.textContent = message;
    displayDiv.appendChild(newElement);
}
function addPersona(nombre, edad) {
    let persona = new Persona1(nombre, edad);
    personas.add(persona);
    let sumaEdades = Array.from(personas).reduce((suma, persona) => suma + persona.edad, 0);
    const message = `La edad media de las personas introducidas es: ${sumaEdades / personas.size}`;
    console.log(message);
    displayData('Persona', persona);
    displayMessage(message);
}
function addEmpleado(nombre, edad, identificacion, experiencia) {
    if (!empleados.has(identificacion)) {
        let empleado = new Empleado1(nombre, edad, identificacion, experiencia);
        empleados.set(identificacion, empleado);
        let sumaEdades = Array.from(empleados.values()).reduce((suma, empleado) => suma + empleado.edad, 0);
        let sumaExperiencias = Array.from(empleados.values()).reduce((suma, empleado) => suma + empleado.experiencia, 0);
        const message1 = `La edad media de los empleados es: ${sumaEdades / empleados.size}`;
        const message2 = `La experiencia acumulada de los empleados es: ${sumaExperiencias}`;
        console.log(message1);
        console.log(message2);
        displayData('Empleado', empleado);
        displayMessage(message1);
        displayMessage(message2);
    }
}
//# sourceMappingURL=collections.js.map