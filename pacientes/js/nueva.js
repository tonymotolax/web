// JavaScript Document
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var dataBase = null;	
let params = new URLSearchParams(location.search);
var idea;
if(params.get('no')){
	var id = params.get('id');
	var date = params.get('no');
}else{
	var id = params.get('id');
	var f = new Date();
	var date = f.getDate() + (f.getMonth() +1) + f.getFullYear() + f.getMinutes() +f.getSeconds()+ f.getMilliseconds() +id;
}




var o=new Date();
var datte = o.getDate() + "/" + (o.getMonth() +1) + "/" + o.getFullYear()
function regreso(){
	
	window.location.href= "mostrar.html?id="+id;
}




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
		loadall();
		loading(id);
		if(params.get('no')){
			load(id);
			console.log('se cargó de nuevo');
		}
	};
	
	dataBase.onerror = function(e){
		alert( dataBase.error.aa + '\n\n' + dataBase.error.message);	
	};

}

function load(id){
	
	var active = dataBase.result;
	var data = active.transaction(["sesion"], "readwrite");
	var object = data.objectStore("sesion");
	var index = object.index("by_no");
	var request = index.get(date);
	
	request.onsuccess = function(){
		
		var result = request.result;
		
		if(result !== undefined){
			

			idea=result.id;
			document.getElementById("cc").value = result.cc ;
			document.getElementById("dd").value = result.dd ;
			document.getElementById("ee").value = result.ee ;
			document.getElementById("ff").value = result.ff ;
			document.getElementById("fecha").value = result.aa ;
			document.getElementById("bbb").value = result.bb ;

		}
		
		


	}
	
}

function loadall(){
	
	var active = dataBase.result;
	var data = active.transaction(["pares"], "readonly");
	var object = data.objectStore("pares");
	var index = object.index('by_aa')
	
	
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
			
			if (elements[key].no == date){
				
				outerhtml += 
				
				'\n\
				<tr>\n\
				<td>' + elements[key].aa + '</td>\n\
				<td>' + elements[key].bb + '</td>\n\
				<td>\n\
				<button type="button" onClick="deleten('+ elements[key].id +');" class="borrar">Eliminar</button>\n\
				</td>\n\
				<tr>';
			}
		}
		
		elements = [];
		document.querySelector("#elementslist").innerHTML = outerhtml;
	}
	
}


function add() {
	
	var active =  dataBase.result;
	var data = active.transaction(["pares"], "readwrite");
	var object = data.objectStore("pares");
	var put =  parseInt(date);
	var request = object.put({
		
		aa : document.querySelector("#aa").value,
		bb : document.querySelector("#bb").value,
		no : put
	});
	
	request.onerror = function(e){
		alert(request.error.aa + '\n\n' + request.error.message );
	};
	
	data.oncomplete = function(e){
		
		document.querySelector("#aa").value = '';
		document.querySelector("#bb").value = '';
		alert("Se agregó correctamente");
		loadall();
		
	};
	
}


function added() {
	
	var active =  dataBase.result;
	var data = active.transaction(["sesion"], "readwrite");
	var object = data.objectStore("sesion");
	if(idea !== undefined){
		var request = object.put({
			id: parseInt(idea),
			aa : datte,
			bb : document.querySelector("#bbb").value,
			cc : document.querySelector("#cc").value,
			dd : document.querySelector("#dd").value,
			ee : document.querySelector("#ee").value,
			ff : document.querySelector("#ff").value,
			no : date,
			ne : id

		});
	}else{
		var request = object.put({

			aa : datte,
			bb : document.querySelector("#bbb").value,
			cc : document.querySelector("#cc").value,
			dd : document.querySelector("#dd").value,
			ee : document.querySelector("#ee").value,
			ff : document.querySelector("#ff").value,
			no : date,
			ne : id

		});
	}
	
	
	request.onerror = function(e){
		alert(request.error.aa + '\n\n' + request.error.message );
	};
	
	data.oncomplete = function(e){
		window.location.href= "nueva.html?id="+id+'&no='+ date ;
		alert("Se guardó correctamente");

		
	};
	
}


function loading(id){
	
	var active = dataBase.result;
	var data = active.transaction(["paciente"], "readwrite");
	var object = data.objectStore("paciente");
	var request = object.get(parseInt(id));
	
	request.onsuccess = function(){
		
		var result = request.result;

		if(result !== undefined){
			
			document.querySelector("#dd").value =  result.ee ;
			
			document.getElementById("name").innerHTML = "Sesión De "+ result.aa + " " +result.bb ;
			document.getElementById("fecha").innerHTML = datte ;

		}
		


	}
	
}



function deleten(identroi){
	
	var active = dataBase.result;
	var data = active.transaction(["pares"], "readwrite");
	var object = data.objectStore("pares");
	var request = object.delete(parseInt(identroi));
	
	
	request.onerror = function(e){
		alert(request.error.aa + '\n\n' + request.error.message );
	};
	
	data.oncomplete = function(e){
		loadall();
		alert("Se Elimino correctamente");

		
	};
	
	
}