var nombre = 0;

function use(){
	document.getElementById("nombre").innerHTML=nombre;
}

use();

function more1(){
	nombre ++;
	use();
	return nombre;
}
function less1(){
	nombre --;
	use();
	return nombre;
}