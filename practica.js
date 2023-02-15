/* Crear un prototipo "personaProto" que incluya los métodos: caminar, saludar y comer. */
const personaProto = {
  caminar:'estoy caminando',
  saludar: 'Hola',
  comer:'estoy comiendo',
};

var personaObj = Object.create(personaProto);


/* Crear un prototipo "estudianteProto" que incluya los métodos: estudiar y dormir. Este prototipo debe tener como prototipo "personaProto". */
const estudianteProto =  {
  estudiar: 'estoy estudiando',
  dormir: 'estoy durmiendo',
};

var estudianteObj = Object.create(personaProto);


/* Crear un prototipo "profesorProto" que incluya los métodos: enseñar y calificar. Este prototipo debe tener como prototipo "personaProto". */
const profesorProto =  {
  ensenar: 'estoy ensenando',
  calificar: 'estoy calificando',
};

var profesorObj = Object.create(personaProto);


/* Crear un constructor "EstudianteConstructor" que acepte como parámetros nombre, edad y escuela. 
  Este constructor debe crear objetos que tengan como prototipo "estudianteProto". */
function estudianteConstructor(nombre, edad, escuela ) {
  this.nombre = nombre;
  this.edad = edad;
  this.escuela = escuela;
}

const estudiantelisa = new estudianteConstructor('Lisa', '20 años', 'UCR');
const estudianteSam= new estudianteConstructor('Sam', '21 años', 'Cetav');

var constructorEstudiante = Object.create(estudianteProto);


/* Crear un constructor "ProfesorConstructor" que acepte como parámetros nombre, carrera y escuela. 
  Este constructor debe crear objetos que tengan como prototipo "profesorProto". */
function profesorConstructor(nombre, carrera, escuela ) {
  this.nombre = nombre;
  this.carrera = carrera;
  this.escuela = escuela;
}
  
const profesoraIrene = new profesorConstructor("Irene", "profesora", "CETAV");
const profesorTom= new profesorConstructor('Tom', 'profesor', 'UNA');

var constructorProfesor = Object.create(profesorProto);


/* Todos los métodos deben hacer uso de al menos una de las propiedades del objeto. 
Por ejemplo, el método "saludar" puede devolver "Hola! Soy -nombre-" */



/* Haciendo uso de "EstudianteConstructor", crear un par de objetos diferentes y 
  llamar métodos de sus prototipos "estudianteProto" y "personaProto" */



/* Haciendo uso de "ProfesorConstructor", crear un par de objetos diferentes y 
  llamar métodos de sus prototipos "profesorProto" y "personaProto" */