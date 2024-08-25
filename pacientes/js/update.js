// JavaScript Document
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let params = new URLSearchParams(location.search);
var id = params.get('id');
var dataBase = null;	

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
		
	};
	
	dataBase.onerror = function(e){
		alert( dataBase.error.aa + '\n\n' + dataBase.error.message);	
	};
	
	

}


function add() {
	
	var active =  dataBase.result;
	var data = active.transaction(["paciente"], "readwrite");
	var object = data.objectStore("paciente");
	
	var request = object.put({
		id: parseInt(id),
		aa : document.querySelector("#aa").value.toLowerCase(),
		bb : document.querySelector("#bb").value.toLowerCase(),
		cc : document.querySelector("#cc").value,
		dd : document.querySelector("#dd").value,
		ee : document.querySelector("#ee").value,
		ff : document.querySelector("#ff").value,
		gg : document.querySelector("#gg").value,
		hh : document.querySelector("#hh").value,
		jj : document.querySelector("#jj").value,
		kk : document.querySelector("#kk").value,
		ll : document.querySelector("#ll").value,
		mm : document.querySelector("#mm").value,
		nn : document.querySelector("#nn").value,
		oo : document.querySelector("#oo").value,
		pp : document.querySelector("#pp").value,
		qq : document.querySelector("#qq").value,
		rr : document.querySelector("#rr").value,
		ss : document.querySelector("#ss").value,
		tt : document.querySelector("#tt").value,
		uu : document.querySelector("#uu").value,
		vv : document.querySelector("#vv").value,
		ww : document.querySelector("#ww").value
	});
	
	request.onerror = function(e){
		alert(request.error.aa + '\n\n' + request.error.message );
	};
	
	data.oncomplete = function(e){
		window.location.href = "mostrar.html?id=" + id;		
		alert("Se Actualizo correctamente");
		
		
	};
	
}




function load(id){
	
	var active = dataBase.result;
	var data = active.transaction(["paciente"], "readwrite");
	var object = data.objectStore("paciente");
	
	var request = object.get(parseInt(id));
	
	request.onsuccess = function(){
		
		var result = request.result;
		
		if(result !== undefined){
			

			
			document.querySelector("#aa").value =  result.aa ;
			document.querySelector("#bb").value =  result.bb ;
			document.querySelector("#cc").value =  result.cc ;
			document.querySelector("#dd").value =  result.dd ;
			document.querySelector("#ee").value =  result.ee ;
			document.querySelector("#ff").value =  result.ff ;
			document.querySelector("#gg").value =  result.gg ;
			document.querySelector("#hh").value =  result.hh ;
			document.querySelector("#jj").value =  result.jj ;
			document.querySelector("#kk").value =  result.kk ;
			document.querySelector("#ll").value =  result.ll ;
			document.querySelector("#mm").value =  result.mm ;
			document.querySelector("#nn").value =  result.nn ;
			document.querySelector("#oo").value =  result.oo ;
			document.querySelector("#pp").value =  result.pp ;
			document.querySelector("#qq").value =  result.qq ;
			document.querySelector("#rr").value =  result.rr ;
			document.querySelector("#ss").value =  result.ss ;
			document.querySelector("#tt").value =  result.tt ;
			document.querySelector("#uu").value =  result.uu ;
			document.querySelector("#vv").value =  result.vv ;
			document.querySelector("#ww").value = result.ww;
		}
		
		
		
		
	}
	
}



function regreso(){
	
	window.location.href = "mostrar.html?id=" + id;	
	
}