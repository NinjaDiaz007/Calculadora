let operandoA,operandoB, operador;

function init() {
	Botones();
}
init();

function Botones(){
	let resultado = document.getElementById('resultado');
	let pantalla = document.getElementById('pantalla');
	let reset = document.getElementById('reset');
	let suma = document.getElementById('suma');
	let resta = document.getElementById('resta');
	let multiplicacion = document.getElementById('multiplicacion');
	let division = document.getElementById('division');
	let igual = document.getElementById('igual');
	let uno = document.getElementById('uno');
	let dos = document.getElementById('dos');
	let tres = document.getElementById('tres');
	let cuatro = document.getElementById('cuatro');
	let cinco = document.getElementById('cinco');
	let seis = document.getElementById('seis');
	let siete = document.getElementById('siete');
	let ocho = document.getElementById('ocho');
	let nueve = document.getElementById('nueve');
	let cero = document.getElementById('cero');
}

function limpiar(){
	pantalla.textContent = "";
}
function resetear(){
	operandoA = 0;
	operandoB = 0; 
	operador = "";
	resultado.textContent = "";
	pantalla.textContent = "";
}
function resolver(){
	let res;

	switch(operador){
		case "+":
		res = parseFloat(operandoA)+parseFloat(operandoB);
		break;

		case "-":
		res = parseFloat(operandoA)-parseFloat(operandoB);
		break;

		case "/":
		res = parseFloat(operandoA)/parseFloat(operandoB);
		break;

		case "*":
		res = parseFloat(operandoA)*parseFloat(operandoB);
		break;
	}

	//resetear();
	resultado.textContent = res;
}

// Eventos
uno.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "1";
}
dos.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "2";
}
tres.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "3";
}
cuatro.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "4";
}
cinco.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "5";
}
seis.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "6";
}
siete.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "7";
}
ocho.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "8";
}
nueve.onclick = function(e){
	pantalla.textContent = pantalla.textContent + "9";
}
cero.onclick = function() {
	pantalla.textContent = pantalla.textContent + "0";
}

reset.onclick = function(){
	resetear();
}

suma.onclick = function(){
	operandoA = pantalla.textContent;
	operador = "+";
	limpiar();
}
resta.onclick = function(){
	operandoA = pantalla.textContent;
	operador = "-";
	limpiar();
}
division.onclick = function(){
	operandoA = pantalla.textContent;
	operador = "/";
	limpiar();
}
multiplicacion.onclick = function(){
	operandoA = pantalla.textContent;
	operador = "*";
	limpiar();
}
igual.onclick = function(){
	operandoB = pantalla.textContent;
	resolver();
}