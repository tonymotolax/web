// JavaScript Document

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var dataBase = null;	
let params = new URLSearchParams(location.search);
var id = params.get('id');
var datasesion = null;	




function startdb(){
	var loc = window.location.href;
	var res = loc.split("/");
	var pag = res[res.length-1];
	var url = 'pacientes/'+pag;

	if(localStorage.pagpac){
		localStorage.pagpac = url;
	}else{
		localStorage.setItem('pagpac', 'pacientes/index.html');
	}

	dataBase = indexedDB.open("pacientes", 1);	
	
	dataBase.onupgradeneeded = function(e){
		var active = dataBase.result; 
		var object = active.createObjectStore('paciente', {keyPath : 'id' , autoIncrement : true });
		object.createIndex('by_aa', 'aa', {unique : false });
		object.createIndex('by_bb', 'bb', {unique : false });
		object.createIndex('by_cc', 'cc', {unique : false });
		object.createIndex('by_dd', 'dd', {unique : false });
		object.createIndex('by_ee', 'ee', {unique : false });
		object.createIndex('by_ff', 'ff', {unique : false });
		object.createIndex('by_gg', 'gg', {unique : false });
		object.createIndex('by_hh', 'hh', {unique : false });
		object.createIndex('by_ii', 'ii', {unique : false });
		object.createIndex('by_jj', 'jj', {unique : false });
		object.createIndex('by_kk', 'kk', {unique : false });
		object.createIndex('by_ll', 'll', {unique : false });
		object.createIndex('by_mm', 'mm', {unique : false });
		object.createIndex('by_nn', 'nn', {unique : false });
		object.createIndex('by_oo', 'oo', {unique : false });
		object.createIndex('by_pp', 'pp', {unique : false });
		object.createIndex('by_qq', 'qq', {unique : false });
		object.createIndex('by_rr', 'rr', {unique : false });
		object.createIndex('by_ss', 'ss', {unique : false });
		object.createIndex('by_tt', 'tt', {unique : false });
		object.createIndex('by_uu', 'uu', {unique : false });
		object.createIndex('by_vv', 'vv', {unique : false });
		object.createIndex('by_ww', 'ww', {unique : false });
		
		
		var paresobject = active.createObjectStore('pares', {keyPath : 'id' , autoIncrement : true });
		paresobject.createIndex('by_aa', 'aa', {unique : false });
		paresobject.createIndex('by_bb', 'bb', {unique : false });	
		paresobject.createIndex('by_no', 'no', {unique : false });
		
		var sesionobject = active.createObjectStore('sesion', {keyPath : 'id' , autoIncrement : true });
		sesionobject.createIndex('by_no', 'no', {unique : false });
		sesionobject.createIndex('by_aa', 'aa', {unique : false });
		sesionobject.createIndex('by_bb', 'bb', {unique : false });
		sesionobject.createIndex('by_cc', 'cc', {unique : false });
		sesionobject.createIndex('by_dd', 'dd', {unique : false });
		sesionobject.createIndex('by_ee', 'ee', {unique : false });
		sesionobject.createIndex('by_ff', 'ff', {unique : false });	
		
	};
	
	
	
	dataBase.onsuccess = function(e){
		load(id);
		loaded();
	};
	
	dataBase.onerror = function(e){
		alert( dataBase.error.aa + '\n\n' + dataBase.error.message);	
	};
	
	

}



function addarera(){
	
	window.location.href = "update.html?id=" + id;
	
}



function load(id){
	
	var active = dataBase.result;
	var data = active.transaction(["paciente"], "readwrite");
	var object = data.objectStore("paciente");
	
	var request = object.get(parseInt(id));
	
	request.onsuccess = function(){
		
		var result = request.result;
		
		if(result !== undefined){
			
			document.getElementById("name").innerHTML = "Registro De "+ result.aa + " " +result.bb ;
			
			document.getElementById("cc").innerHTML = result.cc ;
			document.getElementById("dd").innerHTML = result.dd ;
			document.getElementById("ee").innerHTML = result.ee ;
			document.getElementById("ff").innerHTML = result.ff ;
			document.getElementById("gg").innerHTML = result.gg ;
			document.getElementById("hh").innerHTML = result.hh ;
			document.getElementById("jj").innerHTML = result.jj ;
			document.getElementById("kk").innerHTML = result.kk ;
			document.getElementById("ll").innerHTML = result.ll ;
			document.getElementById("mm").innerHTML = result.mm ;
			document.getElementById("nn").innerHTML = result.nn ;
			document.getElementById("oo").innerHTML = result.oo ;
			document.getElementById("pp").innerHTML = result.pp ;
			document.getElementById("qq").innerHTML = result.qq ;
			document.getElementById("rr").innerHTML = result.rr ;
			document.getElementById("ss").innerHTML = result.ss ;
			document.getElementById("tt").innerHTML = result.tt ;
			document.getElementById("uu").innerHTML = result.uu ;
			document.getElementById("vv").innerHTML = result.vv ;
			document.getElementById("ww").innerHTML = result.ww ;

		}
		
		
		
		
	}
	
}


function loaded(){
	
	var active = dataBase.result;
	var data = active.transaction(["sesion"], "readwrite");
	var object = data.objectStore("sesion");
	var index = object.index('by_aa');
	
	
	var elements = [];
	
	index.openCursor().onsuccess = function(e){
		
		var result = e.target.result;
		
		if(result === null){
			return;
		}
		
		elements.push(result.value);
		result.continue();
		
	};
	
	data.oncomplete = function(){
		
		var outerhtml = '';
		
		for(var key in elements){
			if (elements[key].ne == id){
				outerhtml += '\n\
				<tr>\n\
				<td>' + elements[key].aa + '</td>\n\
				<td>' + elements[key].bb + '</td>\n\
				<td>\n\
				<a href="mostrar-i.html?id='+ elements[key].ne +'&no='+ elements[key].no +'" ><button type="button" class="ver2">Ver</button></a>\n\
				</td>\n\
				<td>\n\
				<a href="eliminar-s.html?id='+ elements[key].id +'&ne='+ elements[key].ne +'&no='+ elements[key].no +'" ><button type="button" class="borrar">Eliminar</button></a>\n\
				</td>\n\
				<tr>';
			}
		}
		
		elements = [];
		document.querySelector("#elementslist").innerHTML = outerhtml;
	}
	
}


function nueva(){
	
	window.location.href = "nueva.html?id=" + id;
}


function regreso(){
	
	window.location.href= "index.html";
	
}