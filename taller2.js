/*taller 1
fecha 10/03/2022
realizado popr:daniela ospina y jose manuel
*/
console.log("solucion punto 1");
var lado;
lado = prompt("por favor hallar el area de un cuadrado");
console.log(areacuadrado);
var areacuadrado= lado**2;
//volumen cubo
var lado;
lado = prompt("por favo hallar el volumen del cubo");
console.log(volumencubo);
var volumencubo = lado**3;

console.log("solución punto 2");
var base
base = parseInt( prompt("Favor Ingresar La Base Del Rectangulo") );
var altura
altura = parseInt( prompt("Favor Ingresar La Altura Del Rectangulo"));
console.log("El Perimetro es de " + 2 * (base + altura));
console.log("El Area es de " + (base + altura));

console.log("Punto 3");

var radio;
radio = parseInt(prompt("Favor Ingresar El Radio") );
console.log("El Area Del Circulo Es ", Math.PI * radio * radio)

console.log("Punto 4");

var base1;
var base2;
var h;
base1 = parseInt(prompt("Favor de ingresar la primera base") );
base2 = parseInt(prompt("Favor de ingresar la segunda base") );
h = parseInt(prompt("Favor de ingresar la altura") );
console.log("El Area Del Trapezoide Es ", + (h * (base1 + base2) / 2) );

console.log("Punto 5");

var ancho;
var largo;
var profundo;
ancho = parseInt(prompt("Favor de ingresar lo ancho") );
largo = parseInt(prompt("Favor de ingresar lo largo") );
profundo = parseInt(prompt("Favor de ingresar lo profundo") );
console.log("La piscina se llenaria con", + ancho * largo * profundo, "litros");

console.log("Punto 6");

var alto1;
var ancho1;
var total;
alto1 = parseInt(prompt("Favor de ingresar lo alto") );
ancho1 = parseInt(prompt("Favor ingresar lo ancho") );
total = (alto1 * ancho1) * 22000
console.log("El Total a pagar es de: " + total + "$");

console.log("Punto 7A");

var cm;
var resultado;
cm = parseInt(prompt("Favor ingresar la longitud de centimetros que quieres convertir a kilometros"))
resultado = cm*(1/100)*(1/1000)
console.log("Los Centimetros han sido convertidos son " + resultado + "Km")

console.log("Punto 7B");

var dl;
var resultado2;
dl = parseInt(prompt("Favor ingresar los decilitros que quieres convertir a litro"))
resultado2 = dl*(0.1/1.0)
console.log("Los Decilitros han sido convertidos son " + resultado2 + "L")

console.log("Punto 7C");

var mg;
var resultado3;
mg = parseInt(prompt("Favor ingresar los microgramos que quieres convertir a gramos"))
resultado3 = mg*(1.0/1000000)
console.log("Los Microgramos han sido convertidos son " + resultado3 + "G")

console.log("Punto 7D");

var kilo;
var resultado4;
kilo = parseInt(prompt("Favor ingresar los kilometros que quieres convertir a milimetros"))
kilo = prompt("Favor ingresar los kilometros que quieres convertir a milimetros")
resultado4 = kilo*1000000
console.log("Los Kilometros han sido convertidos son " + resultado4 + " mm ")
