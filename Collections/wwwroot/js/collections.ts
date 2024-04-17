class Persona1 {
    constructor(public nombre: string, public edad: number) { }
}

class Empleado1 extends Persona1 {
    constructor(public nombre: string, public edad: number, public identificacion: string, public experiencia: number) {
        super(nombre, edad);
    }
}

let personas = new Set<Persona1>();
let empleados = new Map<string, Empleado1>();

function displayData(type: string, data: Persona1 | Empleado1) {
    const displayDiv = document.getElementById('display');

    const newElement = document.createElement('p');
    newElement.textContent = `Nueva ${type} Nombre: ${data.nombre} y edad: ${data.edad}`;

    if (type === 'Empleado') {
        newElement.textContent += ` EL id del empleado es: ${(data as Empleado1).identificacion} y tiene una experiencia de: ${(data as Empleado1).experiencia} años.`
    }

    displayDiv.appendChild(newElement);
}

function displayMessage(message: string) {
    const displayDiv = document.getElementById('display');

    const newElement = document.createElement('p');
    newElement.textContent = message;

    displayDiv.appendChild(newElement);
}

function addPersona(nombre: string, edad: number): void {
    let persona = new Persona1(nombre, edad);
    personas.add(persona);

    let sumaEdades = Array.from(personas).reduce((suma, persona) => suma + persona.edad, 0);
    const message = `La edad media de las personas introducidas es: ${sumaEdades / personas.size}`;
    console.log(message);

    displayData('Persona', persona);
    displayMessage(message);
}

function addEmpleado(nombre: string, edad: number, identificacion: string, experiencia: number): void {
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