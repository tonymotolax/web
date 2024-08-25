// JavaScript Document

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var dataBase = null;	
let params = new URLSearchParams(location.search);
var id = params.get('id');
var no = params.get('no');
var ne = params.get('ne');
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
		
		document.querySelector("#name").innerHTML = nombre;
		
	};
	
	dataBase.onerror = function(e){
		alert( dataBase.error.aa + '\n\n' + dataBase.error.message);	
	};
	
	

}

function eliminar(){
	
	var active = dataBase.result;
	var data = active.transaction(["sesion"], "readwrite");
	var object = data.objectStore("sesion");
	var request = object.delete(parseInt(id));
	
	request.onerror = function(e){
		alert(request.error.aa + '\n\n' + request.error.message );
	};
	
	data.oncomplete = function(e){
		
		window.location.href= "mostrar.html?id="+ne;

		
	};
}

function regreso(){
	
	window.location.href= "mostrar.html?id="+ne;
	
}