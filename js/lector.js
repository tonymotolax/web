var act = false;
var pau = false;
function  inicio(acc){
	var sit = document.getElementById("arr");
	var ple = document.getElementById("pou");
	var tit = document.getElementById("titulo").textContent||document.getElementById("titulo").innerText;
	var tipo = document.getElementById("tipo").itextContent||document.getElementById("tipo").innerText;
	var cont = document.getElementById("cont").textContent||document.getElementById("cont").innerText;
	var haba = tit + ',' + tipo + ','+ cont;
	var str = haba;
	var src = haba.replace(/&nbsp;/gi, ' ');	
	const habla = new SpeechSynthesisUtterance();
	habla.volume = 1;
	habla.rate = 1;
	habla.pitch=-6;
	habla.text =  src;
	if(acc === 'inicio'){
		if(act){
			console.log('Acabar contenido');
			ple.style.display = 'none';
			sit.src = '../iconos/au-pl.png';
			ple.src = '../iconos/au-pa.png';
			window.speechSynthesis.cancel();
			act = false;
			pau = false;
		}else{
			console.log('Leer contenido');
			ple.style.display = 'block';
			sit.src = '../iconos/au-st.png';
			act=true;
			window.speechSynthesis.speak(habla);
		}
	}else{
		if(pau){
			console.log('Play contenido');
			ple.src = '../iconos/au-pa.png';
			window.speechSynthesis.resume();
			pau = false;
		}else{
			console.log('Pauso contenido');
			ple.src = '../iconos/au-rs.png';
			pau=true;
			window.speechSynthesis.pause();
		}
	}
	habla.onend = (event) =>{
		ple.style.display = 'none';
		sit.src = '../iconos/au-pl.png';
		ple.src = '../iconos/au-pa.png';
		act = false;		
		pau = false;
	}
}



var arr = false;
var pou = false;
function  vida(pal){
	var inicio = document.getElementById("ini");
	var pause = document.getElementById("pau");
	var hea = document.getElementById("pares-a").textContent||document.getElementById("pares-a").innerText;
	var fri = hea;
	var sni = fri.replace(/-/gi, ',');	
	var srta = sni.replace(/font></gi, 'font>.<');	
	var tstk= srta.replace(/&nbsp;/gi, ' ');
	const spk = new SpeechSynthesisUtterance();
	spk.volume = 1;
	spk.rate = 1;
	spk.pitch=-6;
	spk.text =  tstk;
	if(pal === 'inicio'){
		if(arr){
			console.log('Acabar pares');
			pause.style.display = 'none';
			inicio.src = '../iconos/au-pl.png';
			pause.src = '../iconos/au-pa.png';
			window.speechSynthesis.cancel();
			arr = false;
			pou = false;
		}else{
			console.log('Inicia pares');
			pause.style.display = 'block';
			inicio.src = '../iconos/au-st.png';
			arr=true;
			window.speechSynthesis.speak(spk);
		}
	}else{
		if(pou){
			console.log('Play pares');
			pause.src = '../iconos/au-pa.png';
			window.speechSynthesis.resume();
			pou = false;
		}else{
			console.log('Pause pares');
			pause.src = '../iconos/au-rs.png';
			pou=true;
			window.speechSynthesis.pause();
		}
	}
	spk.onend = (event) =>{
		pause.style.display = 'none';
		inicio.src = '../iconos/au-pl.png';
		pause.src = '../iconos/au-pa.png';
		arr = false;		
		pou = false;
	}
}
