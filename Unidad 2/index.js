var x = 10; // Alcance (SCOPE) de funcion o global
let y = 20;
{
    let y = 10;  // Alcance (SCOPE) de bloque
}
const PI = 3.1416; // Valores que NO se pueden MODIFICAR

var x = 20;
/*
+ Suma
- Resta
* Mult
/ Div
% Div Modular
*/

/*
== Igual
=== Strict Igual
!= No Igual
!== Strict Igual
> Mayor que
< Menor que
>= Mayor o Igual que
<= Menor o Igual que
*/

/*
&& Logico AND
|| Logico OR
*/

/*
in Propiedad en Objeto
instanceof Intancia de un Objeto 
*/

let x = 10; // Number
let name = "Joe"; // String
x = 30.1; // double

let num1 = 20;
let num2 = "20";

console.log(num1 == num2) // true
console.log(num1 === num2) // false

let variable = 10 + "Joe";
//let variable = "10" + "Joe"
let variable2 = 10+10+"Hola";
let variable3 = "Chao"+16+4;
console.log(variable);
console.log(variable2);
console.log(variable3);

//arrays
const autos = ["Volvo", "Susuki", "Nissan"];
//objetos
const persona = {
    id : 1,
    nombre : "Joe",
    correo : "joe@inacap.cl"
}
const persona2 = {
    "id" : 1,
    "nombre" : "Ale",
    "correo" : "ale@inacap.cl"
}
console.log(persona.nombre)
console.log(persona2)





function Sumar(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1 + num2);
    mostrarDato(num1);
    mostrarDato(num2);
}

function mostrarDato(dato){
    console.log(dato)
}

Sumar();

console.log(x);
console.log(y);





function OculteParrafo(){
    document.getElementById("demo").style.display = "none";
}
function MostrarParrafo(){
    document.getElementById("demo").style.display = "block";
}
function ToggleMostrar(){
    var parrafo = document.getElementById("demo");
    var estado = parrafo.style.display;
    console.log(parrafo);
    console.log(estado);
    alert(estado);

    if( estado === "none"){
        parrafo.style.display = "block";
    }else{
        parrafo.style.display = "none";
    }
}
