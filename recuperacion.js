/*taller de recuperacion
fecha 23/03/2022
realizado por: Jose Manuel Garcia*/
console.log("solucion punto 1");
var capasidadpiscina=prompt("porfavor ingrese el tamaño de la piscina");
var horas
horas=capasidadpiscina/145
console.log("el tiempo que tardara su piscina en llenarce de agua es ", horas);

console.log("solucion punto 2");
var metros =prompt("por favor ingrese una medida en metros");
var milimetros=metros*1000
console.log("la medida que ingreso es ", milimetros ," milimetros");

console.log("solucion punto 3");
var decimetros
decimetros=milimetros/100
console.log("el punto anterior es equivalente a ", decimetros ," decimetros");

console.log("solucion punto 4");
var kilometros
kilometros=decimetros/10000
console.log("el punto anterior es equivalente a ", kilometros ,"kilometros");

console.log("solucion punto 5");
var horasllamada=prompt("por favor ingrese la cantidad de horas que va a llamar");
var preciominuto
var costellamada
preciominuto=120*60
costellamada=horasllamada*preciominuto
console.log("el precio de su llamada es ", costellamada);

console.log("solucion punto 6");
var clase=prompt("ingrese cuantas horas de clase tomo");
var horasadicionales
horasadicionales=clase-1
var preciohoras
preciohoras=horasadicionales*25000
var totalclase
totalclase=preciohoras+40000
console.log("el costo de la clase fue de ", totalclase);