/* Se debe solicitar en pantalla que se ingresen los numeros de los integrantes de la familia
y dependiendo de la respuesta se debe implimir en consola el numero de ellos  */

//Definir las variables 

//variable integrantes pide seleccionar un número
//Prompt captura el dato y lo toma como un string, por eso se añade la función "Number"
let integrantes = Number(prompt ('Ingresar el número de integrantes'));
//Se define la variable mensaje como un string vacio
let mensaje = '';

//se inicia el condicional

switch (integrantes) {
    
    case integrantes = 0 :
        //Si el valor ingresado es cero, genera un alerta para añadir un valor correcto
        mensaje=alert('Escribir un valor válido');
        break;
    case integrantes = 1 :
        mensaje='Hay 1 persona';
        break;

    case integrantes =2 :
        mensaje='Hay 2 personas';
        break;2
        
    case integrantes = 3 :
        mensaje='Hay 3 personas';
        break;

    case integrantes = 4 :
        mensaje='Hay 4 personas';
        break;

    case integrantes = 5 :
        mensaje='Hay 5 personas';
        break;
    
    case integrantes = 6 :
        mensaje='Hay 6 personas';
        break;
    default:
        mensaje='Hay mas de 7 personas';
        break;
}

//Se imprime en pantalla
console.log(mensaje);
