// JavaScript Document
var bd;
function iniciar(){
	
	zonadatos=document.getElementById("zonadatos");
	
	boton=document.getElementById("grabar");
	
	boton.addEventListener("click",agregarobjeto, false);
	
	var solicitud=indexedDB.open("biomagnetismo");
	
	solicitud.onsuccess=function(e){
		
		bd=e.target.result;
		
				
	}
	
	solicitud.onupgradeneeded=function(e){
		
				bd=e.target.result;
		bd.createObjectStore("pacientes", {keyPath: "clave"});
		
	}	
	
}

function agregarobjeto(){
	
	var clave=document.getElementById("clave").value;
	
	var titulo=document.getElementById("texto").value;
	
	var Fecha=document.getElementById("fecha").value;
	
	var transaccion=bd.transaction(["pacientes"], "readwrite");
	
	var almacen=transaccion.objectStore("pacientes");
	
	var agregar=almacen.add({clave: clave, titulo: titulo, Fecha: Fecha});
	
	agregar.addEventListener("success", mostrar, false);
	
	
	document.getElementById("clave").value=""
	
	document.getElementById("texto").value=""
	
	document.getElementById("fecha").value=""
}

function mostrar(){
	
	zonadatos.innerHTML="";
	
	var transaccion=bd.transaction(["pacientes"],"readonly");
	
	var almacen=transaccion.objectStore("pacientes");
	
	var cursor=almacen.openCursor();
	
	cursor.addEventListener("success", mostrarDatos, false);	
	
}

function mostrarDatos(e){
	
	var cursor=e.target.result;
	
	if(cursor){
		
		zonadatos.innerHTML+="<div>" + cursor.value.clave + " - " + cursor.value.titulo + " - " + cursor.value.Fecha + "</div>";
		
		cursor.continue();
		
		
	}
	
	
	
}





window.addEventListener("load", iniciar, false);


