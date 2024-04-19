//Así se declara un array
let array = [1,2,3,6,4,5]

//el .sort lo que hace es modifica el array para ordenarlo de menor a mayor
array.sort()
console.log(array)

//el .push añade el elemento introducido al final del array. Como podemos observar en la consola, cuando lo visualizamos solo muestra el numero máximo de longitud de nuestro array
array.push(9)
let arrayPush2 = array.push(9)
console.log(arrayPush2)

//El .unshift hace exactamente lo mismo, solo que lo añade al principio. Cuando se muestra, también muestra el numero máximo de longitud de nuestro array
let arrayUnshift = array.unshift(7)

console.log(arrayUnshift)

//El .pop elimina el ultimo elemento de nuestro array
let arrayPop = array.pop()
console.log(arrayPop)
//El .shift elimina el primer elemento de nuestro array
let arrayShift = array.shift()

//El slice coge una parte del array que nosotros le indiquemos y crea un nuevo array solo con esa parte (Separa el array)
let arraySlice = array.slice(3,6)
console.log(arraySlice)

//El .concat concatena diferentes arrays en uno solo
let nuevoArray=[0,1]
let arrayFinal = array.concat(nuevoArray)
console.log(arrayFinal)

//Funciones para verificar como funciona el .some
if(array.some(function comprobar(n){
    if(n==4){
        return true;
    }
    else{
        return false;
    }
})){
    console.log("El número 4 ha sido encontrado")
}else{
    console.log("El número 4 no ha sido encontrado")
}

//EXactamente el mismo ejercicio que arriba pero muchisimo mas simplificado, la n es el número que recibe, luego viene lo que tiene que hacer esa función y por ultimo lo que devuelva
if(array.some((n)=>n==99)){
    console.log("El número 4 ha sido encontrado")
}else{
    console.log("El número 4 no ha sido encontrado")
}


//El array .forEach y el .map hacen exactamente lo mismo, la diferencia es que .forEach devuelve un array tipo void vacío, es decir no se crea ninguno, mientras que el .map sí que lo crea, aunque sea tipo void también

array.forEach((x) =>console.log(x))

array.map((x) =>console.log(x))


//Bucle que tenga un sumatorio

let sumatorio=0

array.forEach((x) =>{
    sumatorio = sumatorio + x
})

console.log(sumatorio)

//Tarea => CRUD de array de cualquier elemento
//Tarea => Inserta el número 2 en la posición 4
//Tarea => Actualiza la posición 6 al valor 1
//Tarea => Muestra por pantalla la posición 3
//Tarea => Borra la posición 7

//¿Qué recibe? ¿Qué hace? ¿Qué devuelve?

//Tarea 1 (Inserta el número 2 en la posición 4):
console.log("-------------------------------------------------------------------------")
console.log("Tarea 1: ")
let miarray = [1,2,3,4,5,6,7,8,9]

console.log(miarray)

miarray.splice(4,0,2)

console.log(miarray)

//Tarea 2 (Actualiza la posición 6 al valor 1):
console.log("Tarea 2: ")

console.log(miarray)

miarray[6] = 1

console.log(miarray)

//Tarea 3 (Muestra por pantalla la posición 3):
console.log("Tarea 3: ")

console.log("Mostrar posición 3 del array: "+miarray[3])

//Tarea 4 ( Borra la posición 7):
console.log("Tarea 4: ")
delete(miarray[7])

console.log(miarray)

console.log("-------------------------------------------------------------------------")

//Un objeto en JS es un JSON (JavaScript Object Notation)


//Así se crean objetos en JS
let ObjetoPersona1 = {
    nombre : "Javi",
    edad : 23,
    coches: [
        {
            marca: "Seat",
            año : 2000
        },
        {
            marca: "Audi",
            año : 1998
        },
    ]
}

let ObjetoPersona2 = {
    nombre : "Paco",
    edad : 19,
    coches: [
    ]
}

let listaPersonas = [ObjetoPersona1, ObjetoPersona2]

listaPersonas.forEach((x) => console.log(x.nombre))

listaPersonas.forEach((x) => {
    x.coches.forEach((z) => console.log(z))
})


let coche1 = document.querySelector("#Coche1")
console.log(coche1.childNodes[1].textContent)

//Tarea => Hazme un CRUD de elementos en el html con QuerySelector (El actualizarlo si no existe el UpdateChild, lo borro y lo creo de nuevo)

//Crear nuevo elemento (CREATE)
document.body.onload = añadirElemento;

function añadirElemento() {
  let nuevoDiv = document.createElement("div");

  let nuevoContenido = document.createTextNode("Hola a todos");

  nuevoDiv.appendChild(nuevoContenido);

  let divAnterior = document.getElementById("Tarea1");
  document.body.insertBefore(nuevoDiv, divAnterior);
}


//Poder leer cualquier elemento (READ):
console.log(Seccion1.childNodes[1].textContent)

//Actualizar (UPDATE)

document.body.onload = añado;

function añado() {
    let actualizarDiv = document.createElement("div");
  
    let contenidoActualizado = document.createTextNode("Contenido actualizado");
  
    actualizarDiv.appendChild(contenidoActualizado);
  
    let antiguoDiv = document.getElementById("Borrar");
    document.body.insertBefore(actualizarDiv, antiguoDiv);
}

//Borrar(DELETE)

let elemento = document.getElementById("Borrar");
elemento.remove(); 


