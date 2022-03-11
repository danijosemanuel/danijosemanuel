console.log("hola mundo");//imprimir por consola
//comentario en linea;
/*comentario
en
varias
lineas
o
multilinea
*/

//variables
/*son espacios de memoria que almacenan datos o informacion
esisten varios tipos de variables en js  normalmente se utilizan para los siguientes: 
string: almacena cadenas de texto. se debe declarar o asigfnar el valor entre comillas
double: almacenan numeros reales 
int: almacdenan numeros enteros 
boolean: almacena valores (true o false ) 
/*

/*declarar una variable 
declarar una variables es crear, desirle al lemguaje como se llama la variable e indicarle que ya existe.
para decorle a una variable que puede utilizar ya sea la palabra reservada var o let 
*/ 

var nombre;
console.log(nombre);
/* inicialezar variable 
para inicializar variabale es necesario asiganr un valor cuando se creaestavariable 
*/
var apellido=(" ospina, garcia")
console.log(apellido);
/* asiganr un valor:
asiganar un valor se hace ,ediante el signo  igual, se debe hacer sobre una variable que ya fue declarda 
*/
nombre = "daniela; jose manuel"  
console.log(nombre + "" + apellido);
//dessde otra variable
var edad= 16;
var edadEstudiante= edad;
//desde el teclado 
var gradoEstudiantes=prompt("ingrse un grado: ");
console.log("el gradop es: "+ gradoEstudiantes);
/*son valores que una vez inicializadosno piueen cambiar lo que almacena. se crean con lapalabea reservada const, el nombvre de se escribe tpodo en mayusculas para diferenciarlos de las variables */
const PI= 3.1416
console.log 
//operadores
//suma
var suma 
suma=5+3;
let a = 10;
let b = 20;
suma = a+b;
console.log(suma);
//resta
var resultado;
resultadoo= a-b
console.log(resultado)
//multiplicacion
var producto;
producto= a*b;
console.log(producto);
//division 
var division;
division=a/b;
console.log(division)
//orden de operaciones
var res;
res=a*2
console.log(res);
res=a*2-1;
console.log(res);
res=a*(2-1); //10
console.log(res);
//residuo
var residuo=12 % 2; // 0
console.log(residuo);
//contadores
//incremento
var incre =1
console.log (incre);//1
incre=incre+1;
console.log(incre);//2
incre+1;
console.log(incre);//3
incre++;
console.log (incre);//4
// operaciones aumentadas 
//son operaciones que se le realizan a una variable y el resultadose guarda en si l la variable debe tener un valor ntes de realizar la operacion´++¿

var restAumenta =20;
restAumenta-=1;
restAumenta-=8;
console.log(restAumenta);

var productoAumenta =20;
productoAumenta*=1;
productoAumenta*=8;
console.log(productoAumenta);

cocientesaumento / =20;
cosienteaumento / =1;
console.log( cocienteaumento);

// potencia
var exp;
exp = 3**2;
console.log(exp);//9
exp = 3**3;
console.log(exp) //27
//cadenas o texto
// suma de cadenas 
var nombre = "dani y jose manuel"
var apellido = " ospina y garcia";
ver nombreCompleto = nombre + "" + apellido;
