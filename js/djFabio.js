
// slaides das fotos 
function Slaide1(){

	document.getElementById("foto").src="fotos/foto3.jpg";
	setTimeout("Slaide2()", 1000);

}

function Slaide2(){
	document.getElementById("foto").src="fotos/foto1.jpg";
	setTimeout("Slaide3()", 1000);


}

function Slaide3(){

	document.getElementById("foto").src="fotos/foto5.jpg";
	setTimeout("Slaide1()", 1000);

}

