var hoy = new Date();
var anio = hoy.getFullYear(); 
var dia = hoy.getDate();
var time =hoy.getHours();
	if(time>12){
		time=(time-12);
	}
var minutos=hoy.getMinutes();
var mes = hoy.getMonth();
	if(mes == 0){
		mes = "enero";
	}
	else if(mes == 1){
		mes = "febrero";
	}
	else if(mes == 2){
		mes = "marzo";
	}
	else if(mes == 3){
		mes = "abril";
	}
	else if(mes == 4){
		mes = "mayo";
	}
	else if(mes == 5){
		mes = "junio";
	}
	else if(mes == 6){
		mes = "julio";
	}
	else if(mes == 7){
		mes = "agosto";
	}
	else if(mes == 8){
		mes = "septiembre";
	}
	else if(mes == 9){
		mes = "octubre";
	}
	else if(mes == 10){
		mes = "noviembre";
	}
	else{
		mes = "diciembre";
	}
	var diactual = hoy.getDay();
if(diactual == 0){
		diactual = "lunes";
	}
	else if(diactual == 1){
		diactual = "martes";
	}
	else if(diactual == 2){
			diactual = "miercoles";
		}
	else if(diactual == 3){
			diactual = "jueves";
		}
	else if(diactual == 4){
			diactual = "viernes";
		}
	else if(diactual == 5){
			diactual = "sabado";
		}
	else if(diactual == 6){
			diactual = "domingo";
		}
	



document.getElementById("fecha").innerHTML =" "+dia+" de "+mes+"  del  "+anio;