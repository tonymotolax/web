var frame = document.getElementById('bloqueo2');	

function start() {
	if(localStorage.activadosp){
		if(localStorage.activadosp !== 'si'){
			if(document.getElementById('bodyin')){
				document.getElementById('bodyin').innerHTML = ' <div id="bloqueo" >\n\
             <iframe src="bloqueo.html" name="bloqueo2" id="bloqueo2" scrolling="yes" frameborder="0"style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px; z-index: 9999999"></iframe>\n\
             </div><script src="main.js" type="text/javascript"></script>';
         }else{
             document.getElementById('bodyino').innerHTML = ' <div id="bloqueo" >\n\
             <iframe src="../bloqueo.html" name="bloqueo2" id="bloqueo2" scrolling="yes" frameborder="0"style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px; z-index: 9999999"></iframe>\n\
             </div><script src="main.js" type="text/javascript"></script>';
         }
         nuevoCss();
         frame.src = "bloqueo.html";
     }else{
         nuevoCss();
     }		
 }else{
  if(document.getElementById('bodyin')){
    document.getElementById('bodyin').innerHTML = ' <div id="bloqueo" >\n\
    <iframe src="bloqueo.html" name="bloqueo2" id="bloqueo2" scrolling="yes" frameborder="0"style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px; z-index: 9999999"></iframe>\n\
    </div><script src="main.js" type="text/javascript"></script>';
}else{
 document.getElementById('bodyino').innerHTML = ' <div id="bloqueo" >\n\
 <iframe src="../bloqueo.html" name="bloqueo2" id="bloqueo2" scrolling="yes" frameborder="0"style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px; z-index: 9999999"></iframe>\n\
 </div><script src="main.js" type="text/javascript"></script>';
}
localStorage.setItem('activadosp', 'no');		
frame.src = "bloqueo.html";
nuevoCss();
}

}



function clave(){
	document.getElementById("activar").style.display = 'block';
	var d = new Date();
	var e = parseInt(d.getTime())+(d.getMinutes());
	var f = parseInt(d.getTime())*(d.getMinutes());
	var g = (e+f)*998843998843;
	var h = g / 720397;
	var arr = Array.from(String(h), Number)
	var ke= arr.slice( 0, 17 );
	var abc = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
	var aABC = abc.split(',');
	var l1 = aABC[parseInt(ke[7] + ke[8])];
	var l2 = aABC[parseInt(ke[5] + ke[14])];
	var l3 = aABC[parseInt(ke[13] + ke[14])];
	var l4 = aABC[parseInt(ke[15] + ke[2])];
	var l5 = aABC[parseInt(ke[6] + ke[14])];
	var cad = l1+l2+l3+l4+l5;
	var ena= ke.slice(6, -6);
	var ded = ena.join('');
	var clave =cad+ded;
	localStorage.setItem('clave', clave);	
    var str = navigator.userAgent;
    var res = str.split("(");
    var ses = res.join(")");
    var ext = ses.split(")");
    var com = ext.splice(1, 1);
    var na = com.join("");
    var me = na.split(";");
    var ur = me[0]+me[2];
    var kan = ur.split(" ");
    var ojo = kan.join("").toLowerCase();
    document.getElementById('activar3').src = "https://www.guiabiomagnetismo.com/activa/index.php?clave="+clave+"&dis="+ojo;
    console.log(ojo);
}
function activa() {
	var pass = document.getElementById('pass').value;
	var clave = localStorage.getItem("clave");
	if(pass===clave){
		localStorage.setItem('activadosp', 'si');	
		window.location.href = "bloqueo2.html";
	}
}

if(document.getElementById('si')){
	document.getElementById('si').addEventListener('click', clave);
}

if(document.getElementById('acivar2')){
	document.getElementById('acivar2').addEventListener('click', activa);
}


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var textError = document.querySelector('.error');
var escucha = document.getElementById('start_img');
var activo = false;

const speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.rate = 1;
speech.pitch = -6;

const speechi = new SpeechSynthesisUtterance();
speechi.volume = 1;
speechi.rate = 1;
speechi.pitch = -6;

function iniciob() {
    var recog = false;
    if (activo) {
        escucha.src = 'iconos/bocina.gif';
        activo = false;
    } else {

        var reconocimiento = new SpeechRecognition();
        reconocimiento.lang = 'es-MX';
        reconocimiento.interimResults = false;
        reconocimiento.maxAlternatives = 1;
        speechi.text = '¿en qué te puedo ayudar?';
        window.speechSynthesis.speak(speechi);
        speechi.onend = (event) => {
            console.log("ha iniciado el reconocimiento");
            escucha.src = 'iconos/menu-bocina.gif';
            activo = true;
            reconocimiento.start();
            reconocimiento.onresult = (event) => {
                var resultadoEscucha = event.results[0][0].transcript;
                var str = resultadoEscucha;
                var res = str.split(" ");
                //comandos a ocupar

                if (resultadoEscucha === 'abrir pacientes') {
                    console.log('abrir pacientes' + screen.width);
                    if (screen.width > 1040) { document.getElementById('pac').click();
                    console.log('abrio pacientes '); }
                    if (screen.width < 1041 & screen.width > 750) { document.getElementById('pat').click();
                    console.log('abrio pacientes tablet'); }
                    if (screen.width < 751) { document.getElementById('pa').click();
                    console.log('abrio pacientes celular'); }

                    recog = true;

                }
                if (res[0].toLowerCase() === 'buscar') {
                    var com = res.splice(1, res.length);
                    var src = com.join(" ");
                    document.getElementById('search').value = src;
                    search();
                    openBuscar();
                    recog = true;
                }

                if (res[0].toLowerCase() === 'abrir') {
                    var com = res.splice(1, res.length);
                    var src = com.join(" ").toLowerCase();
                    let arreglo = [{
                        nombre: "articulos",
                        pag: "articulos.htm"
                    }, {
                        nombre: "bacterias",
                        pag: "bacterias.htm"
                    }, {
                        nombre: "lista de bacterias",
                        pag: "bacterias.htm"
                    }, {
                        nombre: "pares de bacterias",
                        pag: "bacterias2.htm"
                    }, {
                        nombre: "configuracion",
                        pag: "configuracion.htm"
                    }, {
                        nombre: "directorio",
                        pag: "directorio/directorio.htm"
                    }, {
                        nombre: "disfuncionales",
                        pag: "disfuncionales.htm"
                    }, {
                        nombre: "pares disfuncionales",
                        pag: "disfuncionales.htm"
                    }, {
                        nombre: "enfermedades complejas",
                        pag: "ecomplejas.htm"
                    }, {
                        nombre: "emergencia",
                        pag: "emerg.htm"
                    }, {
                        nombre: "primeros auxilios",
                        pag: "emerg.htm"
                    }, {
                        nombre: "emocionales",
                        pag: "emocionales.htm"
                    }, {
                        nombre: "trastornos emocionales",
                        pag: "emocionales.htm"
                    }, {
                        nombre: "pares emocionales",
                        pag: "emocionales2.htm"
                    }, {
                        nombre: "especiales",
                        pag: "especiales.htm"
                    }, {
                        nombre: "pares especiales",
                        pag: "especiales2.htm"
                    }, {
                        nombre: "eventos",
                        pag: "eventos.htm"
                    }, {
                        nombre: "novedades",
                        pag: "articulos.htm"
                    }, {
                        nombre: "noticias",
                        pag: "eventos.htm"
                    }, {
                        nombre: "uso de la guía",
                        pag: "gdeg.htm"
                    }, {
                        nombre: "hongos",
                        pag: "hongos.htm"
                    }, {
                        nombre: "pares de hongos",
                        pag: "hongos2.htm"
                    }, {
                        nombre: "pares adicionales",
                        pag: "mas_pares.htm"
                    }, {
                        nombre: "clasificación de pares",
                        pag: "otrospares.htm"
                    }, {
                        nombre: "padecimientos",
                        pag: "padecimientos.htm"
                    }, {
                        nombre: "parasitos",
                        pag: "parasitos.htm"
                    }, {
                        nombre: "pares de parasitos",
                        pag: "parasitos2.htm"
                    }, {
                        nombre: "portada",
                        pag: "portada.htm"
                    }, {
                        nombre: "inicio",
                        pag: "portada.htm"
                    }, {
                        nombre: "reservorios",
                        pag: "reservorios.htm"
                    }, {
                        nombre: "virus",
                        pag: "virus.htm"
                    }, {
                        nombre: "lista de virus",
                        pag: "virus.htm"
                    }, {
                        nombre: "pares de virus",
                        pag: "virus2.htm"
                    }, {
                        nombre: "lista de hongos",
                        pag: "hongos.htm"
                    }, {
                        nombre: "bioenergética",
                        pag: "tutorial/bioenergetica.htm"
                    }, {
                        nombre: "cabeza",
                        pag: "tutorial/cabeza.htm"
                    }, {
                        nombre: "puntos en cabeza",
                        pag: "tutorial/cabeza.htm"
                    }, {
                        nombre: "puntos en cuello",
                        pag: "tutorial/cuello.htm"
                    }, {
                        nombre: "cuello y brazos",
                        pag: "tutorial/cuello.htm"
                    }, {
                        nombre: "espalda",
                        pag: "tutorial/espalda.htm"
                    }, {
                        nombre: "puntos en espalda",
                        pag: "tutorial/espalda.htm"
                    }, {
                        nombre: "puntos en dorso",
                        pag: "tutorial/espalda.htm"
                    }, {
                        nombre: "dorso",
                        pag: "tutorial/espalda.htm"
                    }, {
                        nombre: "glosario",
                        pag: "tutorial/glosario.htm"
                    }, {
                        nombre: "goiz durán",
                        pag: "tutorial/goizduran.htm"
                    }, {
                        nombre: "isaac goiz durán",
                        pag: "tutorial/goizduran.htm"
                    }, {
                        nombre: "doctor isaac goiz durán",
                        pag: "tutorial/goizduran.htm"
                    }, {
                        nombre: "doctor goiz durán",
                        pag: "tutorial/goizduran.htm"
                    }, {
                        nombre: "puntos en la mujer",
                        pag: "tutorial/mujer.htm"
                    }, {
                        nombre: "mujer",
                        pag: "tutorial/mujer.htm"
                    }, {
                        nombre: "que es el par biomagnético",
                        pag: "tutorial/par.htm"
                    }, {
                        nombre: "par biomagnético",
                        pag: "tutorial/par.htm"
                    }, {
                        nombre: "piernas",
                        pag: "tutorial/piernas.htm"
                    }, {
                        nombre: "puntos en piernas",
                        pag: "tutorial/piernas.htm"
                    }, {
                        nombre: "lista de puntos",
                        pag: "tutorial/puntos.htm"
                    }, {
                        nombre: "puntos de cuerpo",
                        pag: "tutorial/torso.htm"
                    }, {
                        nombre: "puntos en tronco",
                        pag: "tutorial/torso.htm"
                    }, {
                        nombre: "puntos en torso",
                        pag: "tutorial/torso.htm"
                    }, {
                        nombre: "torso",
                        pag: "tutorial/torso.htm"
                    }, {
                        nombre: "tratamiento",
                        pag: "tutorial/tratamiento.htm"
                    }, {
                        nombre: "tratamiento con biomagnetismo",
                        pag: "tutorial/tratamiento.htm"
                    }, {
                        nombre: "tutorial",
                        pag: "tutorial/tutorial.htm"
                    }, {
                        nombre: "desbloqueo de emociones",
                        pag: "rastreos/emociones-desbloq.htm"
                    }, {
                        nombre: "código de la emoción",
                        pag: "rastreos/emociones-desbloq.htm"
                    }, {
                        nombre: "nutrimentos",
                        pag: "rastreos/nutrimentos.htm"
                    }, {
                        nombre: "péndulo",
                        pag: "rastreos/pendulo.htm"
                    }, {
                        nombre: "uso del péndulo",
                        pag: "rastreos/péndulo.htm"
                    }, {
                        nombre: "protocolos",
                        pag: "rastreos/protocolos.htm"
                    }, {
                        nombre: "protocolo avanzado",
                        pag: "rastreos/r-avanzado.htm"
                    }, {
                        nombre: "protocolo basico",
                        pag: "rastreos/r-basico.htm"
                    }, {
                        nombre: "protocolo 173 puntos",
                        pag: "rastreos/r-basico-fte.htm"
                    }, {
                        nombre: "ciento setenta y tres puntos",
                        pag: "rastreos/r-basico-fte.htm"
                    }, {
                        nombre: "protocolo ciento setenta y tres puntos",
                        pag: "rastreos/r-basico-fte.htm"
                    }, {
                        nombre: "rastreo en brazos",
                        pag: "rastreos/r-brazos.htm"
                    }, {
                        nombre: "rastreo en cabeza",
                        pag: "rastreos/r-cabeza.htm"
                    }, {
                        nombre: "rastreo en piernas",
                        pag: "rastreos/r-piernas.htm"
                    }, {
                        nombre: "rastreo en torso",
                        pag: "rastreos/r-torso.htm"
                    }, {
                        nombre: "rastreo en tronco",
                        pag: "rastreos/r-torso.htm"
                    }, {
                        nombre: "rastreo en pecho",
                        pag: "rastreos/r-torso.htm"
                    }, {
                        nombre: "rastreo en abdomen",
                        pag: "rastreos/r-torso.htm"
                    }, {
                        nombre: "rastreo en espalda",
                        pag: "rastreos/r-dorso.htm"
                    }, {
                        nombre: "aerogenus",
                        pag: "../padecimientos/a_aerogenus.htm"
                    }, {
                        nombre: "aerobacter aerogenus",
                        pag: "../padecimientos/a_aerogenus.htm"
                    }, {
                        nombre: "abandono",
                        pag: "../padecimientos/abandono.htm"
                    }, {
                        nombre: "abraham",
                        pag: "../padecimientos/abraham.htm"
                    }, {
                        nombre: "polo polo",
                        pag: "../padecimientos/abraham.htm"
                    }, {
                        nombre: "abseso hepático",
                        pag: "../padecimientos/absesohepatico.htm"
                    }, {
                        nombre: "ácaro",
                        pag: "../padecimientos/acaro.htm"
                    }, {
                        nombre: "ácaros",
                        pag: "../padecimientos/acaro.htm"
                    }, {
                        nombre: "acidez",
                        pag: "../padecimientos/accidez.htm"
                    }, {
                        nombre: "actonomices",
                        pag: "../padecimientos/actinomices.htm"
                    }, {
                        nombre: "adenovirus",
                        pag: "../padecimientos/adenovirus.htm"
                    }, {
                        nombre: "adenovirus dos",
                        pag: "../padecimientos/adenovirus2.htm"
                    }, {
                        nombre: "adenovirus treinta y seis",
                        pag: "../padecimientos/adenovirus36.htm"
                    }, {
                        nombre: "adicciones",
                        pag: "../padecimientos/adicciones.htm"
                    }, {
                        nombre: "aftosa",
                        pag: "../padecimientos/aftosa.htm"
                    }, {
                        nombre: "fiebre aftosa",
                        pag: "../padecimientos/aftosa.htm"
                    }, {
                        nombre: "agalactie",
                        pag: "../padecimientos/agalactiae.htm"
                    }, {
                        nombre: "alcoholismo",
                        pag: "../padecimientos/alcoholismo.htm"
                    }, {
                        nombre: "alcolismo",
                        pag: "../padecimientos/alcoholismo.htm"
                    }, {
                        nombre: "alegria alimentaria",
                        pag: "../padecimientos/alergia_a.htm"
                    }, {
                        nombre: "alergrias alimentarias",
                        pag: "../padecimientos/alergia_a.htm"
                    }, {
                        nombre: "alergia alimentaria",
                        pag: "../padecimientos/alergia_a.htm"
                    }, {
                        nombre: "alex",
                        pag: "../padecimientos/alex.htm"
                    }, {
                        nombre: "disfunción renal",
                        pag: "../padecimientos/alex.htm"
                    }, {
                        nombre: "alopecia",
                        pag: "../padecimientos/alopecia.htm"
                    }, {
                        nombre: "altivez",
                        pag: "../padecimientos/altivez.htm"
                    }, {
                        nombre: "altruismo",
                        pag: "../padecimientos/altruismo.htm"
                    }, {
                        nombre: "alvaro",
                        pag: "../padecimientos/alvaro.htm"
                    }, {
                        nombre: "sistema endocrino",
                        pag: "../padecimientos/alvaro.htm"
                    }, {
                        nombre: "alzheimer",
                        pag: "../padecimientos/alzheimer.htm"
                    }, {
                        nombre: "amibiasis",
                        pag: "../padecimientos/amibiasis.htm"
                    }, {
                        nombre: "amiloidosis",
                        pag: "../padecimientos/amiloidosis.htm"
                    }, {
                        nombre: "amnesia",
                        pag: "../padecimientos/amnesia.htm"
                    }, {
                        nombre: "ana alicia",
                        pag: "../padecimientos/"
                    }, {
                        nombre: "taquicardia",
                        pag: "../padecimientos/"
                    }, {
                        nombre: "choque anafiláctico",
                        pag: "../padecimientos/anafilactico.htm"
                    }, {
                        nombre: "anafiláctico",
                        pag: "../padecimientos/anafilactico.htm"
                    }, {
                        nombre: "anemia",
                        pag: "../padecimientos/anemia.htm"
                    }, {
                        nombre: "angeles",
                        pag: "../padecimientos/angeles.htm"
                    }, {
                        nombre: "anisakis",
                        pag: "../padecimientos/anisakis.htm"
                    }, {
                        nombre: "anorexia",
                        pag: "../padecimientos/anorexia.htm"
                    }, {
                        nombre: "ansiedad",
                        pag: "../padecimientos/ansiedad.htm"
                    }, {
                        nombre: "antineoplásico",
                        pag: "../padecimientos/antineoplasico.htm"
                    }, {
                        nombre: "antrax",
                        pag: "../padecimientos/antrax.htm"
                    }, {
                        nombre: "antrax virus",
                        pag: "../padecimientos/antrax.htm"
                    }, {
                        nombre: "apatía",
                        pag: "../padecimientos/apatia.htm"
                    }, {
                        nombre: "apego",
                        pag: "../padecimientos/apego.htm"
                    }, {
                        nombre: "apendicitis",
                        pag: "../padecimientos/apendicitis.htm"
                    }, {
                        nombre: "apnea",
                        pag: "../padecimientos/apenea.htm"
                    }, {
                        nombre: "area visual",
                        pag: "../padecimientos/area-visual.htm"
                    }, {
                        nombre: "pérdida de vista",
                        pag: "../padecimientos/area-visual.htm"
                    }, {
                        nombre: "arenillas",
                        pag: "../padecimientos/arenillas.htm"
                    }, {
                        nombre: "arsénico",
                        pag: "../padecimientos/arsenico.htm"
                    }, {
                        nombre: "artritis",
                        pag: "../padecimientos/artritis.htm"
                    }, {
                        nombre: "asfixia",
                        pag: "../padecimientos/asfixia.htm"
                    }, {
                        nombre: "asma",
                        pag: "../padecimientos/asma.htm"
                    }, {
                        nombre: "asma alérgica",
                        pag: "../padecimientos/asma_a.htm"
                    }, {
                        nombre: "asperjilus",
                        pag: "../padecimientos/asperjillus.htm"
                    }, {
                        nombre: "asperjillus",
                        pag: "../padecimientos/asperjillus.htm"
                    }, {
                        nombre: "astrovirus",
                        pag: "../padecimientos/astrovirus.htm"
                    }, {
                        nombre: "astrofia",
                        pag: "../padecimientos/astrofia.htm"
                    }, {
                        nombre: "autismo",
                        pag: "../padecimientos/autismo.htm"
                    }, {
                        nombre: "autoestima",
                        pag: "../padecimientos/autoestima.htm"
                    }, {
                        nombre: "autoinmune",
                        pag: "../padecimientos/autoinmune.htm"
                    }, {
                        nombre: "sistema autoinmune",
                        pag: "../padecimientos/autoinmune.htm"
                    }, {
                        nombre: "inmuno competencia",
                        pag: "../padecimientos/autoinmune.htm"
                    }, {
                        nombre: "bacilo paratifi",
                        pag: "../padecimientos/b_paratiyphico.htm"
                    }, {
                        nombre: "bacilo paratifico",
                        pag: "../padecimientos/b_paratiyphico.htm"
                    }, {
                        nombre: "paratifico",
                        pag: "../padecimientos/b_paratiyphico.htm"
                    }, {
                        nombre: "babesia",
                        pag: "../padecimientos/babesia.htm"
                    }, {
                        nombre: "bacteria de laboratoria",
                        pag: "../padecimientos/bacteria_lab.htm"
                    }, {
                        nombre: "bacteria de laboratorio",
                        pag: "../padecimientos/bacteria_lab.htm"
                    }, {
                        nombre: "balantidium",
                        pag: "../padecimientos/balantidium_t.htm"
                    }, {
                        nombre: "balantidium t",
                        pag: "../padecimientos/balantidium_t.htm"
                    }, {
                        nombre: "balantidium tifo",
                        pag: "../padecimientos/balantidium_t.htm"
                    }, {
                        nombre: "bandas amnióticas",
                        pag: "../padecimientos/b-amnioticas.htm"
                    }, {
                        nombre: "bansal",
                        pag: "../padecimientos/bansal.htm"
                    }, {
                        nombre: "técnica bansal",
                        pag: "../padecimientos/bansal.htm"
                    }, {
                        nombre: "bartonela",
                        pag: "../padecimientos/bartonella.htm"
                    }, {
                        nombre: "bazo",
                        pag: "../padecimientos/bazo_disf.htm"
                    }, {
                        nombre: "disfunción del bazo",
                        pag: "../padecimientos/bazo_disf.htm"
                    }, {
                        nombre: "benavides",
                        pag: "../padecimientos/benavides.htm"
                    }, {
                        nombre: "disfunción estómago",
                        pag: "../padecimientos/benavides.htm"
                    }, {
                        nombre: "disfunción del estómago",
                        pag: "../padecimientos/benavides.htm"
                    }, {
                        nombre: "disfunción estomacal",
                        pag: "../padecimientos/benavides.htm"
                    }, {
                        nombre: "bipolar",
                        pag: "../padecimientos/bipolar.htm"
                    }, {
                        nombre: "trastorno bipolar",
                        pag: "../padecimientos/bipolar.htm"
                    }, {
                        nombre: "blastocistis",
                        pag: "../padecimientos/blastocistis_h.htm"
                    }, {
                        nombre: "blastocistis h",
                        pag: "../padecimientos/blastocistis_h.htm"
                    }, {
                        nombre: "blastocistis hóminis",
                        pag: "../padecimientos/blastocistis_h.htm"
                    }, {
                        nombre: "blastomicosis",
                        pag: "../padecimientos/blastomicosis.htm"
                    }, {
                        nombre: "bonilla",
                        pag: "../padecimientos/bonilla.htm"
                    }, {
                        nombre: "suicidio",
                        pag: "../padecimientos/bonilla.htm"
                    }, {
                        nombre: "bordetela",
                        pag: "../padecimientos/bordetella.htm"
                    }, {
                        nombre: "bordetella",
                        pag: "../padecimientos/bordetella.htm"
                    }, {
                        nombre: "borrelia",
                        pag: "../padecimientos/borrelia.htm"
                    }, {
                        nombre: "botiquín",
                        pag: "../padecimientos/botiquin.htm"
                    }, {
                        nombre: "botulismo",
                        pag: "../padecimientos/botulismo.htm"
                    }, {
                        nombre: "bradicardia",
                        pag: "../padecimientos/bradicardia.htm"
                    }, {
                        nombre: "parálisis del brazo",
                        pag: "../padecimientos/brazo_paralisis.htm"
                    }, {
                        nombre: "brucela",
                        pag: "../padecimientos/brucela.htm"
                    }, {
                        nombre: "brucelosis",
                        pag: "../padecimientos/brucela.htm"
                    }, {
                        nombre: "brucela abortus",
                        pag: "../padecimientos/brucela_a.htm"
                    }, {
                        nombre: "burkholderia",
                        pag: "../padecimientos/borkholderia_c.htm"
                    }, {
                        nombre: "burcolderia",
                        pag: "../padecimientos/borkholderia_c.htm"
                    }, {
                        nombre: "cain",
                        pag: "../padecimientos/cain.htm"
                    }, {
                        nombre: "envidia",
                        pag: "../padecimientos/cain.htm"
                    }, {
                        nombre: "calcificación lumbar",
                        pag: "../padecimientos/cal_lumbar.htm"
                    }, {
                        nombre: "calambres",
                        pag: "../padecimientos/calambres.htm"
                    }, {
                        nombre: "dolor de cálculos",
                        pag: "../padecimientos/calculos_auch.htm"
                    }, {
                        nombre: "cálculos renales",
                        pag: "../padecimientos/calculos_ren.htm"
                    }, {
                        nombre: "cálculos de vesícula",
                        pag: "../padecimientos/calculos_ves.htm"
                    }, {
                        nombre: "campilobacter",
                        pag: "../padecimientos/campylobacter_j.htm"
                    }, {
                        nombre: "campilobacter jejuni",
                        pag: "../padecimientos/campylobacter_j.htm"
                    }, {
                        nombre: "cáncer",
                        pag: "../padecimientos/cancer.htm"
                    }, {
                        nombre: "cáncer de estómago",
                        pag: "../padecimientos/cancer_estomago.htm"
                    }, {
                        nombre: "cáncer de garganta",
                        pag: "../padecimientos/cancer_garganta.htm"
                    }, {
                        nombre: "cáncer de mama",
                        pag: "../padecimientos/cancer_mama.htm"
                    }, {
                        nombre: "cáncer de páncreas",
                        pag: "../padecimientos/cancer_pancreas.htm"
                    }, {
                        nombre: "cáncer de próstata",
                        pag: "../padecimientos/cancer_prostata.htm"
                    }, {
                        nombre: "cáncer de útero",
                        pag: "../padecimientos/cancer_uterino.htm"
                    }, {
                        nombre: "cáncer uterino",
                        pag: "../padecimientos/cancer_uterino.htm"
                    }, {
                        nombre: "cáncer de vejiga",
                        pag: "../padecimientos/cancer_vejiga.htm"
                    }, {
                        nombre: "cáncer tratamiento",
                        pag: "../padecimientos/cancer-trata.htm"
                    }, {
                        nombre: "tratamiento para el cáncer",
                        pag: "../padecimientos/cancer-trata.htm"
                    }, {
                        nombre: "cándida",
                        pag: "../padecimientos/candida_a.htm"
                    }, {
                        nombre: "cándida albicans",
                        pag: "../padecimientos/candida_a.htm"
                    }, {
                        nombre: "cansancio",
                        pag: "../padecimientos/cansancio.htm"
                    }, {
                        nombre: "cansancio crónico",
                        pag: "../padecimientos/cansancio.htm"
                    }, {
                        nombre: "cardias",
                        pag: "../padecimientos/cardias.htm"
                    }, {
                        nombre: "disfunción del cardias",
                        pag: "../padecimientos/cardias.htm"
                    }, {
                        nombre: "cardio uno",
                        pag: "../padecimientos/cardio1.htm"
                    }, {
                        nombre: "balance cardiovascular",
                        pag: "../padecimientos/cardio1.htm"
                    }, {
                        nombre: "pares del corazón",
                        pag: "../padecimientos/cardio1.htm"
                    }, {
                        nombre: "trastornos cardiovasculares",
                        pag: "../padecimientos/cardiovasculares.htm"
                    }, {
                        nombre: "carmen",
                        pag: "../padecimientos/carmen.htm"
                    }, {
                        nombre: "disfunción ovárica",
                        pag: "../padecimientos/carmen.htm"
                    }, {
                        nombre: "tunel carpiano",
                        pag: "../padecimientos/carpiano.htm"
                    }, {
                        nombre: "carpiano",
                        pag: "../padecimientos/carpiano.htm"
                    }, {
                        nombre: "caspa",
                        pag: "../padecimientos/caspa.htm"
                    }, {
                        nombre: "castañeda",
                        pag: "../padecimientos/castaneda.htm"
                    }, {
                        nombre: "trastornos visuales",
                        pag: "../padecimientos/castaneda.htm"
                    }, {
                        nombre: "cataratas",
                        pag: "../padecimientos/cataratas.htm"
                    }, {
                        nombre: "catarro",
                        pag: "../padecimientos/catarro.htm"
                    }, {
                        nombre: "catarro común",
                        pag: "../padecimientos/catarro.htm"
                    }, {
                        nombre: "celos",
                        pag: "../padecimientos/celos.htm"
                    }, {
                        nombre: "celulitis",
                        pag: "../padecimientos/celulitis.htm"
                    }, {
                        nombre: "cerebrovascular",
                        pag: "../padecimientos/cerebrovascular.htm"
                    }, {
                        nombre: "derrame cerebral",
                        pag: "../padecimientos/cerebrovascular.htm"
                    }, {
                        nombre: "ictus",
                        pag: "../padecimientos/cerebrovascular.htm"
                    }, {
                        nombre: "chaco",
                        pag: "../padecimientos/chaco.htm"
                    }, {
                        nombre: "chakras",
                        pag: "../padecimientos/chakras.htm"
                    }, {
                        nombre: "chapingo",
                        pag: "../padecimientos/chapingo.htm"
                    }, {
                        nombre: "crisis convulsivas",
                        pag: "../padecimientos/chapingo.htm"
                    }, {
                        nombre: "chikungunya",
                        pag: "../padecimientos/chikungunya.htm"
                    }, {
                        nombre: "chikunguya",
                        pag: "../padecimientos/chikungunya.htm"
                    }, {
                        nombre: "choque eléctrico",
                        pag: "../padecimientos/choque-electrico.htm"
                    }, {
                        nombre: "descarga eléctrica",
                        pag: "../padecimientos/choque-electrico.htm"
                    }, {
                        nombre: "ciatalgia",
                        pag: "../padecimientos/ciatalgia.htm"
                    }, {
                        nombre: "cisticerco",
                        pag: "../padecimientos/cisticerco.htm"
                    }, {
                        nombre: "citomegalovirus",
                        pag: "../padecimientos/citomegalovirus.htm"
                    }, {
                        nombre: "clamidia intestinalis",
                        pag: "../padecimientos/clamidia_i.htm"
                    }, {
                        nombre: "clamidia pneumoniae",
                        pag: "../padecimientos/clamidia_pn.htm"
                    }, {
                        nombre: "clamidia neumonía",
                        pag: "../padecimientos/clamidia_pn.htm"
                    }, {
                        nombre: "clamidia psitasi",
                        pag: "../padecimientos/clamidia_ps.htm"
                    }, {
                        nombre: "clamidia psitachi",
                        pag: "../padecimientos/clamidia_ps.htm"
                    }, {
                        nombre: "clamidia tracomatis",
                        pag: "../padecimientos/clamidia_.htm"
                    }, {
                        nombre: "clamidia tucans",
                        pag: "../padecimientos/clamidia_tu.htm"
                    }, {
                        nombre: "clamidia trachomatis",
                        pag: "../padecimientos/clamidia_t.htm"
                    }, {
                        nombre: "clorstridium malignum",
                        pag: "../padecimientos/clorstridium_m.htm"
                    }, {
                        nombre: "clorstridium",
                        pag: "../padecimientos/clorstridium_d.htm"
                    }, {
                        nombre: "clorstridium dificile",
                        pag: "../padecimientos/clorstridium_d.htm"
                    }, {
                        nombre: "clorstridium difficile",
                        pag: "../padecimientos/clorstridium_d.htm"
                    }, {
                        nombre: "clorstridium perfringes",
                        pag: "../padecimientos/clorstridium_p.htm"
                    }, {
                        nombre: "clyptospora",
                        pag: "../padecimientos/clyptospora_cay.htm"
                    }, {
                        nombre: "clyptospora cayetanesis",
                        pag: "../padecimientos/clyptospora_cay.htm"
                    }, {
                        nombre: "coccidio",
                        pag: "../padecimientos/coccidio_i.htm"
                    }, {
                        nombre: "coccidio inmintis",
                        pag: "../padecimientos/coccidio_i.htm"
                    }, {
                        nombre: "cólera",
                        pag: "../padecimientos/colera.htm"
                    }, {
                        nombre: "vibro cólera",
                        pag: "../padecimientos/colera.htm"
                    }, {
                        nombre: "hepatitis G",
                        pag: "../padecimientos/colera.htm"
                    }, {
                        nombre: "colitis",
                        pag: "../padecimientos/colitis.htm"
                    }, {
                        nombre: "disfunción del colon",
                        pag: "../padecimientos/colon_disf.htm"
                    }, {
                        nombre: "concentración",
                        pag: "../padecimientos/concentracion.htm"
                    }, {
                        nombre: "conciencia",
                        pag: "../padecimientos/conciencia.htm"
                    }, {
                        nombre: "congreso",
                        pag: "../padecimientos/congreso.htm"
                    }, {
                        nombre: "reservorio de parásitos",
                        pag: "../padecimientos/congreso.htm"
                    }, {
                        nombre: "contractura",
                        pag: "../padecimientos/contractura.htm"
                    }, {
                        nombre: "convulsiones",
                        pag: "../padecimientos/convulsiones.htm"
                    }, {
                        nombre: "coronarias",
                        pag: "../padecimientos/coronarias.htm"
                    }, {
                        nombre: "arterias coronarias",
                        pag: "../padecimientos/coronarias.htm"
                    }, {
                        nombre: "corrección hormonal",
                        pag: "../padecimientos/corrrec-hormonal.htm"
                    }, {
                        nombre: "balance hormonal",
                        pag: "../padecimientos/corrrec-hormonal.htm"
                    }, {
                        nombre: "corynebacter difteria",
                        pag: "../padecimientos/corynebac_difteria.htm"
                    }, {
                        nombre: "coxsackie",
                        pag: "../padecimientos/coxsackie.htm"
                    }, {
                        nombre: "creatinina",
                        pag: "../padecimientos/creatinina.htm"
                    }, {
                        nombre: "criptococus",
                        pag: "../padecimientos/criptococcus_n.htm"
                    }, {
                        nombre: "criptococus neoformans",
                        pag: "../padecimientos/criptococcus_n.htm"
                    }, {
                        nombre: "crohn",
                        pag: "../padecimientos/crohn.htm"
                    }, {
                        nombre: "síndrome de crohn",
                        pag: "../padecimientos/crohn.htm"
                    }, {
                        nombre: "cromosoma 1",
                        pag: "../padecimientos/cromo-1.htm"
                    }, {
                        nombre: "cromosoma uno",
                        pag: "../padecimientos/cromo-1.htm"
                    }, {
                        nombre: "cromosoma 2",
                        pag: "../padecimientos/cromo-2.htm"
                    }, {
                        nombre: "cromosoma 3",
                        pag: "../padecimientos/cromo-3.htm"
                    }, {
                        nombre: "cromosoma 4",
                        pag: "../padecimientos/cromo-4.htm"
                    }, {
                        nombre: "cromosoma 5",
                        pag: "../padecimientos/cromo-5.htm"
                    }, {
                        nombre: "cromosoma 6",
                        pag: "../padecimientos/cromo-6.htm"
                    }, {
                        nombre: "cromosoma 7",
                        pag: "../padecimientos/cromo-7.htm"
                    }, {
                        nombre: "cromosoma 8",
                        pag: "../padecimientos/cromo-8.htm"
                    }, {
                        nombre: "cromosoma 9",
                        pag: "../padecimientos/cromo-9.htm"
                    }, {
                        nombre: "cromosoma 10",
                        pag: "../padecimientos/cromo-10.htm"
                    }, {
                        nombre: "cromosoma 11",
                        pag: "../padecimientos/cromo-11.htm"
                    }, {
                        nombre: "cromosoma 12",
                        pag: "../padecimientos/cromo-12.htm"
                    }, {
                        nombre: "cromosoma 13",
                        pag: "../padecimientos/cromo-13.htm"
                    }, {
                        nombre: "cromosoma 14",
                        pag: "../padecimientos/cromo-14.htm"
                    }, {
                        nombre: "cromosoma 15",
                        pag: "../padecimientos/cromo-15.htm"
                    }, {
                        nombre: "cromosoma 16",
                        pag: "../padecimientos/cromo-16.htm"
                    }, {
                        nombre: "cromosoma 17",
                        pag: "../padecimientos/cromo-17.htm"
                    }, {
                        nombre: "cromosoma 18",
                        pag: "../padecimientos/cromo-18.htm"
                    }, {
                        nombre: "cromosoma 20",
                        pag: "../padecimientos/cromo-20.htm"
                    }, {
                        nombre: "cromosoma equis ye",
                        pag: "../padecimientos/cromo-xy.htm"
                    }, {
                        nombre: "crueldad",
                        pag: "../padecimientos/crueldad.htm"
                    }, {
                        nombre: "criptocides",
                        pag: "../padecimientos/cryptocides_p.htm"
                    }, {
                        nombre: "cryptocides",
                        pag: "../padecimientos/cryptocides_p.htm"
                    }, {
                        nombre: "criptospora",
                        pag: "../padecimientos/cryptospora_cay.htm"
                    }, {
                        nombre: "criptospora cayetanesis",
                        pag: "../padecimientos/cryptospora_cay.htm"
                    }, {
                        nombre: "culpa",
                        pag: "../padecimientos/culpa.htm"
                    }, {
                        nombre: "david",
                        pag: "../padecimientos/david.htm"
                    }, {
                        nombre: "caracter",
                        pag: "../padecimientos/david.htm"
                    }, {
                        nombre: "debilidad",
                        pag: "../padecimientos/debilidad_m.htm"
                    }, {
                        nombre: "debilidad muscular",
                        pag: "../padecimientos/debilidad_m.htm"
                    }, {
                        nombre: "degenerativas",
                        pag: "../padecimientos/degenerativas.htm"
                    }, {
                        nombre: "enfermedades degenerativas",
                        pag: "../padecimientos/degenerativas.htm"
                    }, {
                        nombre: "demencia",
                        pag: "../padecimientos/demencia.htm"
                    }, {
                        nombre: "dengue",
                        pag: "../padecimientos/dengue.htm"
                    }, {
                        nombre: "dengue hemorrágico",
                        pag: "../padecimientos/dengueh.htm"
                    }, {
                        nombre: "dentadura",
                        pag: "../padecimientos/dentadura.htm"
                    }, {
                        nombre: "enfermedades dentales",
                        pag: "../padecimientos/dentales.htm"
                    }, {
                        nombre: "depresión",
                        pag: "../padecimientos/depresion.htm"
                    }, {
                        nombre: "dermatitis",
                        pag: "../padecimientos/dermatitis.htm"
                    }, {
                        nombre: "derrame pleural",
                        pag: "../padecimientos/derrame-pleural.htm"
                    }, {
                        nombre: "desbloqueo energético",
                        pag: "../padecimientos/desbloqueo-ene.htm"
                    }, {
                        nombre: "diabetes",
                        pag: "../padecimientos/diabetes.htm"
                    }, {
                        nombre: "diabetes melitus",
                        pag: "../padecimientos/diabetes.htm"
                    }, {
                        nombre: "diabetes insípida",
                        pag: "../padecimientos/diabetes_ins.htm"
                    }, {
                        nombre: "diarrea",
                        pag: "../padecimientos/diarrea.htm"
                    }, {
                        nombre: "difteria",
                        pag: "../padecimientos/difteria.htm"
                    }, {
                        nombre: "bacilo difteroide",
                        pag: "../padecimientos/difteria.htm"
                    }, {
                        nombre: "diplococo",
                        pag: "../padecimientos/diplococo.htm"
                    }, {
                        nombre: "discinesia",
                        pag: "../padecimientos/discinesia.htm"
                    }, {
                        nombre: "disfunción intelectual",
                        pag: "../padecimientos/disf_intelectual.htm"
                    }, {
                        nombre: "dismenorrea",
                        pag: "../padecimientos/dismenorrea.htm"
                    }, {
                        nombre: "trastorno menstrual",
                        pag: "../padecimientos/dismenorrea.htm"
                    }, {
                        nombre: "distemper",
                        pag: "../padecimientos/distemper_c.htm"
                    }, {
                        nombre: "distemper canino",
                        pag: "../padecimientos/distemper_c.htm"
                    }, {
                        nombre: "distensión abdominal",
                        pag: "../padecimientos/distensión_ab.htm"
                    }, {
                        nombre: "inflamación abdominal",
                        pag: "../padecimientos/distensión_ab.htm"
                    }, {
                        nombre: "divertículos",
                        pag: "../padecimientos/diverticulos.htm"
                    }, {
                        nombre: "sueño",
                        pag: "../padecimientos/dormir.htm"
                    }, {
                        nombre: "dorsales",
                        pag: "../padecimientos/dorsales.htm"
                    }, {
                        nombre: "drogadicción",
                        pag: "../padecimientos/drogadiccion.htm"
                    }, {
                        nombre: "disfunción del duodeno",
                        pag: "../padecimientos/duodeno_disf.htm"
                    }, {
                        nombre: "disfunción duodenal",
                        pag: "../padecimientos/duodeno_disf.htm"
                    }, {
                        nombre: "durán",
                        pag: "../padecimientos/duran.htm"
                    }, {
                        nombre: "embarazo",
                        pag: "../padecimientos/duran.htm"
                    }, {
                        nombre: "estreptococo fragilis",
                        pag: "../padecimientos/e_fragilis.htm"
                    }, {
                        nombre: "fragilis",
                        pag: "../padecimientos/e_fragilis.htm"
                    }, {
                        nombre: "edema macular",
                        pag: "../padecimientos/e_macular.htm"
                    }, {
                        nombre: "embarazo molar",
                        pag: "../padecimientos/e_molar.htm"
                    }, {
                        nombre: "cromosoma 2",
                        pag: "../padecimientos/cromo-2.htm"
                    }, {
                        nombre: "cromosoma 3",
                        pag: "../padecimientos/cromo-3.htm"
                    }, {
                        nombre: "cromosoma 4",
                        pag: "../padecimientos/cromo-4.htm"
                    }, {
                        nombre: "cromosoma 5",
                        pag: "../padecimientos/cromo-5.htm"
                    }, {
                        nombre: "cromosoma 6",
                        pag: "../padecimientos/cromo-6.htm"
                    }, {
                        nombre: "cromosoma 7",
                        pag: "../padecimientos/cromo-7.htm"
                    }, {
                        nombre: "cromosoma 8",
                        pag: "../padecimientos/cromo-8.htm"
                    }, {
                        nombre: "cromosoma 9",
                        pag: "../padecimientos/cromo-9.htm"
                    }, {
                        nombre: "cromosoma 10",
                        pag: "../padecimientos/cromo-10.htm"
                    }, {
                        nombre: "cromosoma 11",
                        pag: "../padecimientos/cromo-11.htm"
                    }, {
                        nombre: "cromosoma 12",
                        pag: "../padecimientos/cromo-12.htm"
                    }, {
                        nombre: "cromosoma 13",
                        pag: "../padecimientos/cromo-13.htm"
                    }, {
                        nombre: "cromosoma 14",
                        pag: "../padecimientos/cromo-14.htm"
                    }, {
                        nombre: "cromosoma 15",
                        pag: "../padecimientos/cromo-15.htm"
                    }, {
                        nombre: "cromosoma 16",
                        pag: "../padecimientos/cromo-16.htm"
                    }, {
                        nombre: "cromosoma 17",
                        pag: "../padecimientos/cromo-17.htm"
                    }, {
                        nombre: "cromosoma 18",
                        pag: "../padecimientos/cromo-18.htm"
                    }, {
                        nombre: "cromosoma 20",
                        pag: "../padecimientos/cromo-20.htm"
                    }, {
                        nombre: "cromosoma equis ye",
                        pag: "../padecimientos/cromo-xy.htm"
                    }, {
                        nombre: "crueldad",
                        pag: "../padecimientos/crueldad.htm"
                    }, {
                        nombre: "criptocides",
                        pag: "../padecimientos/cryptocides_p.htm"
                    }, {
                        nombre: "cryptocides",
                        pag: "../padecimientos/cryptocides_p.htm"
                    }, {
                        nombre: "criptospora",
                        pag: "../padecimientos/cryptospora_cay.htm"
                    }, {
                        nombre: "criptospora cayetanesis",
                        pag: "../padecimientos/cryptospora_cay.htm"
                    }, {
                        nombre: "culpa",
                        pag: "../padecimientos/culpa.htm"
                    }, {
                        nombre: "david",
                        pag: "../padecimientos/david.htm"
                    }, {
                        nombre: "caracter",
                        pag: "../padecimientos/david.htm"
                    }, {
                        nombre: "debilidad",
                        pag: "../padecimientos/debilidad_m.htm"
                    }, {
                        nombre: "debilidad muscular",
                        pag: "../padecimientos/debilidad_m.htm"
                    }, {
                        nombre: "degenerativas",
                        pag: "../padecimientos/degenerativas.htm"
                    }, {
                        nombre: "enfermedades degenerativas",
                        pag: "../padecimientos/degenerativas.htm"
                    }, {
                        nombre: "demencia",
                        pag: "../padecimientos/demencia.htm"
                    }, {
                        nombre: "dengue",
                        pag: "../padecimientos/dengue.htm"
                    }, {
                        nombre: "dengue hemorrágico",
                        pag: "../padecimientos/dengueh.htm"
                    }, {
                        nombre: "dentadura",
                        pag: "../padecimientos/dentadura.htm"
                    }, {
                        nombre: "enfermedades dentales",
                        pag: "../padecimientos/dentales.htm"
                    }, {
                        nombre: "depresión",
                        pag: "../padecimientos/depresion.htm"
                    }, {
                        nombre: "dermatitis",
                        pag: "../padecimientos/dermatitis.htm"
                    }, {
                        nombre: "derrame pleural",
                        pag: "../padecimientos/derrame-pleural.htm"
                    }, {
                        nombre: "desbloqueo energético",
                        pag: "../padecimientos/desbloqueo-ene.htm"
                    }, {
                        nombre: "diabetes",
                        pag: "../padecimientos/diabetes.htm"
                    }, {
                        nombre: "diabetes melitus",
                        pag: "../padecimientos/diabetes.htm"
                    }, {
                        nombre: "diabetes insípida",
                        pag: "../padecimientos/diabetes_ins.htm"
                    }, {
                        nombre: "diarrea",
                        pag: "../padecimientos/diarrea.htm"
                    }, {
                        nombre: "difteria",
                        pag: "../padecimientos/difteria.htm"
                    }, {
                        nombre: "bacilo difteroide",
                        pag: "../padecimientos/difteria.htm"
                    }, {
                        nombre: "diplococo",
                        pag: "../padecimientos/diplococo.htm"
                    }, {
                        nombre: "discinesia",
                        pag: "../padecimientos/discinesia.htm"
                    }, {
                        nombre: "disfunción intelectual",
                        pag: "../padecimientos/disf_intelectual.htm"
                    }, {
                        nombre: "dismenorrea",
                        pag: "../padecimientos/dismenorrea.htm"
                    }, {
                        nombre: "trastorno menstrual",
                        pag: "../padecimientos/dismenorrea.htm"
                    }, {
                        nombre: "distemper",
                        pag: "../padecimientos/distemper_c.htm"
                    }, {
                        nombre: "distemper canino",
                        pag: "../padecimientos/distemper_c.htm"
                    }, {
                        nombre: "distensión abdominal",
                        pag: "../padecimientos/distensión_ab.htm"
                    }, {
                        nombre: "inflamación abdominal",
                        pag: "../padecimientos/distensión_ab.htm"
                    }, {
                        nombre: "divertículos",
                        pag: "../padecimientos/diverticulos.htm"
                    }, {
                        nombre: "sueño",
                        pag: "../padecimientos/dormir.htm"
                    }, {
                        nombre: "dorsales",
                        pag: "../padecimientos/dorsales.htm"
                    }, {
                        nombre: "drogadicción",
                        pag: "../padecimientos/drogadiccion.htm"
                    }, {
                        nombre: "disfunción del duodeno",
                        pag: "../padecimientos/duodeno_disf.htm"
                    }, {
                        nombre: "disfunción duodenal",
                        pag: "../padecimientos/duodeno_disf.htm"
                    }, {
                        nombre: "durán",
                        pag: "../padecimientos/duran.htm"
                    }, {
                        nombre: "embarazo",
                        pag: "../padecimientos/duran.htm"
                    }, {
                        nombre: "estreptococo fragilis",
                        pag: "../padecimientos/e_fragilis.htm"
                    }, {
                        nombre: "fragilis",
                        pag: "../padecimientos/e_fragilis.htm"
                    }, {
                        nombre: "edema macular",
                        pag: "../padecimientos/e_macular.htm"
                    }, {
                        nombre: "embarazo molar",
                        pag: "../padecimientos/e_molar.htm"
                    }, {
                        nombre: "ébola",
                        pag: "../padecimientos/ebola.htm"
                    }, {
                        nombre: "ébola virus",
                        pag: "../padecimientos/ebola.htm"
                    }, {
                        nombre: "e coli",
                        pag: "../padecimientos/e-coli.htm"
                    }, {
                        nombre: "esqueriquia coli",
                        pag: "../padecimientos/e-coli.htm"
                    }, {
                        nombre: "escherichia coli",
                        pag: "../padecimientos/e-coli.htm"
                    }, {
                        nombre: "reservorio e coli",
                        pag: "../padecimientos/e-coli-r.htm"
                    }, {
                        nombre: "ecuador",
                        pag: "../padecimientos/ecuador.htm"
                    }, {
                        nombre: "edema",
                        pag: "../padecimientos/edema.htm"
                    }, {
                        nombre: "egoismo",
                        pag: "../padecimientos/egoismo.htm"
                    }, {
                        nombre: "eipsteinbar",
                        pag: "../padecimientos/eipsteinbar.htm"
                    }, {
                        nombre: "elena",
                        pag: "../padecimientos/elena.htm"
                    }, {
                        nombre: "disfunción intestinal",
                        pag: "../padecimientos/elena.htm"
                    }, {
                        nombre: "encefalitis",
                        pag: "../padecimientos/encefalitis.htm"
                    }, {
                        nombre: "endolimax nana",
                        pag: "../padecimientos/endolimax_nana.htm"
                    }, {
                        nombre: "endolimax",
                        pag: "../padecimientos/endolimax_nana.htm"
                    }, {
                        nombre: "endometriosis",
                        pag: "../padecimientos/endometriosis.htm"
                    }, {
                        nombre: "enfado",
                        pag: "../padecimientos/enfado.htm"
                    }, {
                        nombre: "enojo",
                        pag: "../padecimientos/enfado.htm"
                    }, {
                        nombre: "enfisema",
                        pag: "../padecimientos/enfisema.htm"
                    }, {
                        nombre: "enfisema pulmonar",
                        pag: "../padecimientos/enfisema.htm"
                    }, {
                        nombre: "entamoeba",
                        pag: "../padecimientos/entamoeba.htm"
                    }, {
                        nombre: "entérica",
                        pag: "../padecimientos/enterica.htm"
                    }, {
                        nombre: "enterobacteria",
                        pag: "../padecimientos/enterica.htm"
                    }, {
                        nombre: "enterobacter",
                        pag: "../padecimientos/enterobacter_c.htm"
                    }, {
                        nombre: "enterobacter cloacae",
                        pag: "../padecimientos/enterobacter_c.htm"
                    }, {
                        nombre: "enterobacter neumoniae",
                        pag: "../padecimientos/enterobacter_pn.htm"
                    }, {
                        nombre: "enterobacter pneumoniae",
                        pag: "../padecimientos/enterobacter_pn.htm"
                    }, {
                        nombre: "enterobios",
                        pag: "../padecimientos/enterobios_v.htm"
                    }, {
                        nombre: "enterobios vermicularis",
                        pag: "../padecimientos/enterobios_v.htm"
                    }, {
                        nombre: "enterococus",
                        pag: "../padecimientos/enterococus_f.htm"
                    }, {
                        nombre: "enterococus fecalis",
                        pag: "../padecimientos/enterococus_f.htm"
                    }, {
                        nombre: "enterovirus",
                        pag: "../padecimientos/enterovirus.htm"
                    }, {
                        nombre: "enuresis",
                        pag: "../padecimientos/enuresis.htm"
                    }, {
                        nombre: "espondilitis",
                        pag: "../padecimientos/espondilitis.htm"
                    }, {
                        nombre: "epiclavio",
                        pag: "../padecimientos/epiclavio.htm"
                    }, {
                        nombre: "epilepsia",
                        pag: "../padecimientos/epilepsia.htm"
                    }, {
                        nombre: "equilibrio energético",
                        pag: "../padecimientos/equilibrio_ene.htm"
                    }, {
                        nombre: "equinococus",
                        pag: "../padecimientos/equinococus_g.htm"
                    }, {
                        nombre: "equinococus granulosus",
                        pag: "../padecimientos/equinococus_g.htm"
                    }, {
                        nombre: "disfunción erectil",
                        pag: "../padecimientos/erectil.htm"
                    }, {
                        nombre: "escabiosis",
                        pag: "../padecimientos/escabiasis.htm"
                    }, {
                        nombre: "sarna",
                        pag: "../padecimientos/escabiasis.htm"
                    }, {
                        nombre: "esclerodermia",
                        pag: "../padecimientos/esclerodermia.htm"
                    }, {
                        nombre: "esclerosis lateral",
                        pag: "../padecimientos/esclerosis_la.htm"
                    }, {
                        nombre: "esclerosis lateral amiotrófica",
                        pag: "../padecimientos/esclerosis_la.htm"
                    }, {
                        nombre: "espina bífida",
                        pag: "../padecimientos/espina_bifida.htm"
                    }, {
                        nombre: "espiroqueta",
                        pag: "../padecimientos/espiroqueta.htm"
                    }, {
                        nombre: "espolón",
                        pag: "../padecimientos/espolon.htm"
                    }, {
                        nombre: "esquizofrenia",
                        pag: "../padecimientos/esquizo.htm"
                    }, {
                        nombre: "estafilococo albus",
                        pag: "../padecimientos/estafilococo_albus.htm"
                    }, {
                        nombre: "estafilococo a negativo",
                        pag: "../padecimientos/estafilococo_aneg.htm"
                    }, {
                        nombre: "estafilococo aureus positivo",
                        pag: "../padecimientos/estafilococo_aureus_pos.htm"
                    }, {
                        nombre: "estafilococo capitis",
                        pag: "../padecimientos/estafilococo_cap.htm"
                    }, {
                        nombre: "disfunción estomacal",
                        pag: "../padecimientos/estomago_disf.htm"
                    }, {
                        nombre: "estreptococo a",
                        pag: "../padecimientos/estreptococo_a.htm"
                    }, {
                        nombre: "estreptococo b",
                        pag: "../padecimientos/estreptococo_b.htm"
                    }, {
                        nombre: "estreptococo beta",
                        pag: "../padecimientos/estreptococo_beta.htm"
                    }, {
                        nombre: "estreptococo bovis",
                        pag: "../padecimientos/estreptococo_bovis.htm"
                    }, {
                        nombre: "estreptococo c",
                        pag: "../padecimientos/estreptococo_c.htm"
                    }, {
                        nombre: "estreptococo f",
                        pag: "../padecimientos/estreptococo_f.htm"
                    }, {
                        nombre: "estreptococo g",
                        pag: "../padecimientos/estreptococo_g.htm"
                    }, {
                        nombre: "estreptococo mutans",
                        pag: "../padecimientos/estreptococo_mutans.htm"
                    }, {
                        nombre: "estreptococo neumonia",
                        pag: "../padecimientos/estreptococo_pn.htm"
                    }, {
                        nombre: "estreptococo pneumoniae",
                        pag: "../padecimientos/estreptococo_pn.htm"
                    }, {
                        nombre: "estreptococo pyogenes",
                        pag: "../padecimientos/estrepto-pyogenes.htm"
                    }, {
                        nombre: "estrés",
                        pag: "../padecimientos/estres.htm"
                    }, {
                        nombre: "eyaculación precoz",
                        pag: "../padecimientos/eyaculacion_p.htm"
                    }, {
                        nombre: "falso lupus",
                        pag: "../padecimientos/f_lupus.htm"
                    }, {
                        nombre: "fiebre reumática",
                        pag: "../padecimientos/f_reumatica.htm"
                    }, {
                        nombre: "fagos reservorio",
                        pag: "../padecimientos/fagos_reserv.htm"
                    }, {
                        nombre: "reservorio de fagos",
                        pag: "../padecimientos/fagos_reserv.htm"
                    }, {
                        nombre: "fasiolopsis",
                        pag: "../padecimientos/fasiolopsis_b.htm"
                    }, {
                        nombre: "fatiga crónica",
                        pag: "../padecimientos/fatiga-cronica.htm"
                    }, {
                        nombre: "felicidad",
                        pag: "../padecimientos/felicidad.htm"
                    }, {
                        nombre: "fibromialgia",
                        pag: "../padecimientos/fibromialgia.htm"
                    }, {
                        nombre: "fibrosis",
                        pag: "../padecimientos/fibrosis_q.htm"
                    }, {
                        nombre: "fibrosis quística",
                        pag: "../padecimientos/fibrosis_q.htm"
                    }, {
                        nombre: "fiebre",
                        pag: "../padecimientos/fiebre.htm"
                    }, {
                        nombre: "fiebre amarilla",
                        pag: "../padecimientos/fiebre_ama.htm"
                    }, {
                        nombre: "filaria",
                        pag: "../padecimientos/filaria.htm"
                    }, {
                        nombre: "floccosum",
                        pag: "../padecimientos/floccosum.htm"
                    }, {
                        nombre: "fobias",
                        pag: "../padecimientos/fobias.htm"
                    }, {
                        nombre: "miedos",
                        pag: "../padecimientos/fobias.htm"
                    }, {
                        nombre: "fotofobia",
                        pag: "../padecimientos/fotofobia.htm"
                    }, {
                        nombre: "fox",
                        pag: "../padecimientos/fox.htm"
                    }, {
                        nombre: "fractura",
                        pag: "../padecimientos/fractura.htm"
                    }, {
                        nombre: "frustración",
                        pag: "../padecimientos/frustracion.htm"
                    }, {
                        nombre: "fuduric",
                        pag: "../padecimientos/fuduric.htm"
                    }, {
                        nombre: "galactorrea",
                        pag: "../padecimientos/galactorrea.htm"
                    }, {
                        nombre: "gardenerella",
                        pag: "../padecimientos/gardenerella_v.htm"
                    }, {
                        nombre: "gardenerella vaginalis",
                        pag: "../padecimientos/gardenerella_v.htm"
                    }, {
                        nombre: "gastritis",
                        pag: "../padecimientos/gastritis.htm"
                    }, {
                        nombre: "gen",
                        pag: "../padecimientos/gen.htm"
                    }, {
                        nombre: "genu valgo",
                        pag: "../padecimientos/genu-valgo.htm"
                    }, {
                        nombre: "giardia",
                        pag: "../padecimientos/giardia.htm"
                    }, {
                        nombre: "glomerulo",
                        pag: "../padecimientos/glomerulo.htm"
                    }, {
                        nombre: "gluteo aquiles",
                        pag: "../padecimientos/gluteo-aquiles.htm"
                    }, {
                        nombre: "goiz",
                        pag: "../padecimientos/goiz.htm"
                    }, {
                        nombre: "par goiz",
                        pag: "../padecimientos/goiz.htm"
                    }, {
                        nombre: "gripe aviar",
                        pag: "../padecimientos/gripe-aviar.htm"
                    }, {
                        nombre: "guillén barré",
                        pag: "../padecimientos/guillenbarre.htm"
                    }, {
                        nombre: "gula",
                        pag: "../padecimientos/gula.htm"
                    }, {
                        nombre: "h 1 n 7",
                        pag: "../padecimientos/h1n7.htm"
                    }, {
                        nombre: "haemophilus",
                        pag: "../padecimientos/haemophilus_i.htm"
                    }, {
                        nombre: "haemophilus influenza",
                        pag: "../padecimientos/haemophilus_i.htm"
                    }, {
                        nombre: "hamer",
                        pag: "../padecimientos/hamer.htm"
                    }, {
                        nombre: "hanta virus",
                        pag: "../padecimientos/hantavirus.htm"
                    }, {
                        nombre: "helicobacter",
                        pag: "../padecimientos/helicobacter_p.htm"
                    }, {
                        nombre: "helicobacter pilori",
                        pag: "../padecimientos/helicobacter_p.htm"
                    }, {
                        nombre: "hemiplejia",
                        pag: "../padecimientos/hemiplejia.htm"
                    }, {
                        nombre: "hemorragias",
                        pag: "../padecimientos/hemorragias.htm"
                    }, {
                        nombre: "hemorroides",
                        pag: "../padecimientos/hemorroides.htm"
                    }, {
                        nombre: "hepatitis",
                        pag: "../padecimientos/hepatitis.htm"
                    }, {
                        nombre: "hepatitis c",
                        pag: "../padecimientos/hepatitis_c.htm"
                    }, {
                        nombre: "hepatitis m",
                        pag: "../padecimientos/hepatitis_m.htm"
                    }, {
                        nombre: "hepatitis n",
                        pag: "../padecimientos/hepatitis_n.htm"
                    }, {
                        nombre: "heridas",
                        pag: "../padecimientos/heridas.htm"
                    }, {
                        nombre: "herpes",
                        pag: "../padecimientos/herpes.htm"
                    }, {
                        nombre: "herpes 1",
                        pag: "../padecimientos/herpes1.htm"
                    }, {
                        nombre: "herpes 2",
                        pag: "../padecimientos/herpes2.htm"
                    }, {
                        nombre: "herpes 3",
                        pag: "../padecimientos/herpes3.htm"
                    }, {
                        nombre: "herpes 4",
                        pag: "../padecimientos/herpes4.htm"
                    }, {
                        nombre: "herpes 5",
                        pag: "../padecimientos/herpes5.htm"
                    }, {
                        nombre: "herpes 6",
                        pag: "../padecimientos/herpes6.htm"
                    }, {
                        nombre: "herpes 7",
                        pag: "../padecimientos/herpes7.htm"
                    }, {
                        nombre: "herpes 8",
                        pag: "../padecimientos/herpes8.htm"
                    }, {
                        nombre: "herpes 9",
                        pag: "../padecimientos/herpes9.htm"
                    }, {
                        nombre: "hernia hiatal",
                        pag: "../padecimientos/h-hiatal.htm"
                    }, {
                        nombre: "disfunción del hígado",
                        pag: "../padecimientos/higado_disf.htm"
                    }, {
                        nombre: "hígado occipital",
                        pag: "../padecimientos/higado-occi.htm"
                    }, {
                        nombre: "hiperuricemia",
                        pag: "../padecimientos/hiperuricemia.htm"
                    }, {
                        nombre: "hipocalcemia",
                        pag: "../padecimientos/hipocalcemia.htm"
                    }, {
                        nombre: "disfunción de la hipófisis",
                        pag: "../padecimientos/hipofisis_disf.htm"
                    }, {
                        nombre: "histoplasma",
                        pag: "../padecimientos/histoplasma_c.htm"
                    }, {
                        nombre: "hombro congelado",
                        pag: "../padecimientos/hombro-cong.htm"
                    }, {
                        nombre: "reservorio de hongos",
                        pag: "../padecimientos/hongos_r.htm"
                    }, {
                        nombre: "h t l v 1",
                        pag: "../padecimientos/htlv1.htm"
                    }, {
                        nombre: "h t l v 2",
                        pag: "../padecimientos/htlv2.htm"
                    }, {
                        nombre: "h t l v 4",
                        pag: "../padecimientos/htlv4.htm"
                    }, {
                        nombre: "hueco gluteo",
                        pag: "../padecimientos/hueco-gluteo.htm"
                    }, {
                        nombre: "iliocecal",
                        pag: "../padecimientos/iliocecal.htm"
                    }, {
                        nombre: "valvula iliocecal",
                        pag: "../padecimientos/iliocecal.htm"
                    }, {
                        nombre: "impaciencia",
                        pag: "../padecimientos/impaciencia.htm"
                    }, {
                        nombre: "inconsciencia",
                        pag: "../padecimientos/inconsciencia.htm"
                    }, {
                        nombre: "hijo no deseado",
                        pag: "../padecimientos/indeseado.htm"
                    }, {
                        nombre: "infertilidad",
                        pag: "../padecimientos/infertilidad.htm"
                    }, {
                        nombre: "influenza",
                        pag: "../padecimientos/influenza.htm"
                    }, {
                        nombre: "inmunocompetencia",
                        pag: "../padecimientos/inmunocomp.htm"
                    }, {
                        nombre: "insomnio",
                        pag: "../padecimientos/insomnio.htm"
                    }, {
                        nombre: "intolerancia",
                        pag: "../padecimientos/intolerancia.htm"
                    }, {
                        nombre: "intolerancia alimentaria",
                        pag: "../padecimientos/intolerancia_a.htm"
                    }, {
                        nombre: "intoxicacion crónica",
                        pag: "../padecimientos/intoxicacion_c.htm"
                    }, {
                        nombre: "ira",
                        pag: "../padecimientos/ira.htm"
                    }, {
                        nombre: "isaac",
                        pag: "../padecimientos/isaac.htm"
                    }, {
                        nombre: "juana",
                        pag: "../padecimientos/juana.htm"
                    }, {
                        nombre: "frigidez",
                        pag: "../padecimientos/juana.htm"
                    }, {
                        nombre: "juanete",
                        pag: "../padecimientos/juanete.htm"
                    }, {
                        nombre: "klepsiella pneumoniae",
                        pag: "../padecimientos/klepsiela_pn.htm"
                    }, {
                        nombre: "klepsiela",
                        pag: "../padecimientos/klepsiela_pn.htm"
                    }, {
                        nombre: "legionela",
                        pag: "../padecimientos/legionela_pn.htm"
                    }, {
                        nombre: "legionela pneumoniae",
                        pag: "../padecimientos/legionela_pn.htm"
                    }, {
                        nombre: "legionela neumoniae",
                        pag: "../padecimientos/legionela_pn.htm"
                    }, {
                        nombre: "leismania",
                        pag: "../padecimientos/leismania.htm"
                    }, {
                        nombre: "lenguaje",
                        pag: "../padecimientos/lenguaje.htm"
                    }, {
                        nombre: "leny",
                        pag: "../padecimientos/leny.htm"
                    }, {
                        nombre: "lepra",
                        pag: "../padecimientos/lepra.htm"
                    }, {
                        nombre: "leptospira",
                        pag: "../padecimientos/leptospira.htm"
                    }, {
                        nombre: "leptotrichia",
                        pag: "../padecimientos/leptotrichia_b.htm"
                    }, {
                        nombre: "leptotrichia bucalis",
                        pag: "../padecimientos/leptotrichia_b.htm"
                    }, {
                        nombre: "lesiones",
                        pag: "../padecimientos/lesiones.htm"
                    }, {
                        nombre: "leucemia",
                        pag: "../padecimientos/leucemia.htm"
                    }, {
                        nombre: "levadura",
                        pag: "../padecimientos/levadura.htm"
                    }, {
                        nombre: "listeria",
                        pag: "../padecimientos/listeria_m.htm"
                    }, {
                        nombre: "listeria monocytógenes",
                        pag: "../padecimientos/listeria_m.htm"
                    }, {
                        nombre: "logorrea",
                        pag: "../padecimientos/logorrea.htm"
                    }, {
                        nombre: "lolita",
                        pag: "../padecimientos/lolita.htm"
                    }, {
                        nombre: "paperas",
                        pag: "../padecimientos/lolita.htm"
                    }, {
                        nombre: "lucina",
                        pag: "../padecimientos/lucina.htm"
                    }, {
                        nombre: "lucio",
                        pag: "../padecimientos/lucio.htm"
                    }, {
                        nombre: "lumbalgia",
                        pag: "../padecimientos/lumbalgia.htm"
                    }, {
                        nombre: "lupus",
                        pag: "../padecimientos/lupus.htm"
                    }, {
                        nombre: "microbacterium bovis",
                        pag: "../padecimientos/m_bovis.htm"
                    }, {
                        nombre: "machin",
                        pag: "../padecimientos/machin.htm"
                    }, {
                        nombre: "magda",
                        pag: "../padecimientos/magda.htm"
                    }, {
                        nombre: "malassezia",
                        pag: "../padecimientos/malassezia_f.htm"
                    }, {
                        nombre: "malassezia furfur",
                        pag: "../padecimientos/malassezia_f.htm"
                    }, {
                        nombre: "malignidad",
                        pag: "../padecimientos/malignidad.htm"
                    }, {
                        nombre: "mareos",
                        pag: "../padecimientos/mareos.htm"
                    }, {
                        nombre: "marimar",
                        pag: "../padecimientos/marimar.htm"
                    }, {
                        nombre: "hipertensión arterial",
                        pag: "../padecimientos/marimar.htm"
                    }, {
                        nombre: "mariquita",
                        pag: "../padecimientos/mariquita.htm"
                    }, {
                        nombre: "cromosomas",
                        pag: "../padecimientos/mariquita.htm"
                    }, {
                        nombre: "mariscos",
                        pag: "../padecimientos/mariscos.htm"
                    }, {
                        nombre: "mastitis",
                        pag: "../padecimientos/mastitis.htm"
                    }, {
                        nombre: "memoria",
                        pag: "../padecimientos/memoria.htm"
                    }, {
                        nombre: "meningitis",
                        pag: "../padecimientos/meningitis.htm"
                    }, {
                        nombre: "menopausia",
                        pag: "../padecimientos/menopausia.htm"
                    }, {
                        nombre: "mente negativa",
                        pag: "../padecimientos/mente_neg.htm"
                    }, {
                        nombre: "pensamiento negativo",
                        pag: "../padecimientos/mente_neg.htm"
                    }, {
                        nombre: "pensamiento positivo",
                        pag: "../padecimientos/mente_pos.htm"
                    }, {
                        nombre: "mente positiva",
                        pag: "../padecimientos/mente_pos.htm"
                    }, {
                        nombre: "metales",
                        pag: "../padecimientos/metales.htm"
                    }, {
                        nombre: "miceo intestinalis",
                        pag: "../padecimientos/miceo_in.htm"
                    }, {
                        nombre: "micosis",
                        pag: "../padecimientos/micosis.htm"
                    }, {
                        nombre: "microbacterium avium",
                        pag: "../padecimientos/microbac-avium.htm"
                    }, {
                        nombre: "microcefalia",
                        pag: "../padecimientos/microcefalia.htm"
                    }, {
                        nombre: "microsporum",
                        pag: "../padecimientos/microsporum_c.htm"
                    }, {
                        nombre: "microsporum canis",
                        pag: "../padecimientos/microsporum_c.htm"
                    }, {
                        nombre: "miedo",
                        pag: "../padecimientos/miedo.htm"
                    }, {
                        nombre: "miedo a la locura",
                        pag: "../padecimientos/miedo_locura.htm"
                    }, {
                        nombre: "migraña",
                        pag: "../padecimientos/migrana.htm"
                    }, {
                        nombre: "miomas",
                        pag: "../padecimientos/miomas.htm"
                    }, {
                        nombre: "mitomania",
                        pag: "../padecimientos/mitomania.htm"
                    }, {
                        nombre: "moises",
                        pag: "../padecimientos/moises.htm"
                    }, {
                        nombre: "morganela",
                        pag: "../padecimientos/morganella_t.htm"
                    }, {
                        nombre: "morganella tifo",
                        pag: "../padecimientos/morganella_t.htm"
                    }, {
                        nombre: "moxarela",
                        pag: "../padecimientos/moxarella_c.htm"
                    }, {
                        nombre: "moxarella catarralis",
                        pag: "../padecimientos/moxarella_c.htm"
                    }, {
                        nombre: "mucor",
                        pag: "../padecimientos/mucor.htm"
                    }, {
                        nombre: "mycoplasma",
                        pag: "../padecimientos/mycoplasma_h.htm"
                    }, {
                        nombre: "mycoplasma hominis",
                        pag: "../padecimientos/mycoplasma_h.htm"
                    }, {
                        nombre: "mycoplasma neumonia",
                        pag: "../padecimientos/mycoplasma_pn.htm"
                    }, {
                        nombre: "mycoplasma pneumoniae",
                        pag: "../padecimientos/mycoplasma_pn.htm"
                    }, {
                        nombre: "Nanobacterium sanguinium",
                        pag: "../padecimientos/nanobact_s.htm"
                    }, {
                        nombre: "Nanobacterium",
                        pag: "../padecimientos/nanobact_s.htm"
                    }, {
                        nombre: "Nanobacterium b",
                        pag: "../padecimientos/nanobact_s.htm"
                    }, {
                        nombre: "negatividad",
                        pag: "../padecimientos/negatividad.htm"
                    }, {
                        nombre: "pesimismo",
                        pag: "../padecimientos/negatividad.htm"
                    }, {
                        nombre: "neisseria catarralis",
                        pag: "../padecimientos/neiseria_c.htm"
                    }, {
                        nombre: "catarralis",
                        pag: "../padecimientos/neiseria_c.htm"
                    }, {
                        nombre: "neiseria gonorrae",
                        pag: "../padecimientos/neiseria_g.htm"
                    }, {
                        nombre: "gonorrea",
                        pag: "../padecimientos/neiseria_g.htm"
                    }, {
                        nombre: "nematodo",
                        pag: "../padecimientos/nematodo.htm"
                    }, {
                        nombre: "nocardia americana",
                        pag: "../padecimientos/neocardia_a.htm"
                    }, {
                        nombre: "neocardia americana",
                        pag: "../padecimientos/neocardia_a.htm"
                    }, {
                        nombre: "nocardia",
                        pag: "../padecimientos/neocardia_a.htm"
                    }, {
                        nombre: "parálisis facial",
                        pag: "../padecimientos/nervio_fa.htm"
                    }, {
                        nombre: "nervio facial",
                        pag: "../padecimientos/nervio_fa.htm"
                    }, {
                        nombre: "nervio óptico",
                        pag: "../padecimientos/nervio_optico.htm"
                    }, {
                        nombre: "edema nervio óptico",
                        pag: "../padecimientos/nervio_optico.htm"
                    }, {
                        nombre: "nerviosismo",
                        pag: "../padecimientos/nerviosismo.htm"
                    }, {
                        nombre: "neumonia",
                        pag: "../padecimientos/neumonia.htm"
                    }, {
                        nombre: "neumococo",
                        pag: "../padecimientos/neumonia.htm"
                    }, {
                        nombre: "meningitis",
                        pag: "../padecimientos/neumonia.htm"
                    }, {
                        nombre: "problemas neurológicos",
                        pag: "../padecimientos/neurologicos.htm"
                    }, {
                        nombre: "neuropatía",
                        pag: "../padecimientos/neuropatia_perif.htm"
                    }, {
                        nombre: "neuropatía periférica",
                        pag: "../padecimientos/neuropatia_perif.htm"
                    }, {
                        nombre: "neurosis",
                        pag: "../padecimientos/neurosis.htm"
                    }, {
                        nombre: "neurosis crítica",
                        pag: "../padecimientos/neurosis.htm"
                    }, {
                        nombre: "histeria",
                        pag: "../padecimientos/neurosis.htm"
                    }, {
                        nombre: "niucasol",
                        pag: "../padecimientos/newcastle.htm"
                    }, {
                        nombre: "virus del nilo",
                        pag: "../padecimientos/nilo.htm"
                    }, {
                        nombre: "nilo",
                        pag: "../padecimientos/nilo.htm"
                    }, {
                        nombre: "norwalk",
                        pag: "../padecimientos/norkwalk.htm"
                    }, {
                        nombre: "norkwalk",
                        pag: "../padecimientos/norkwalk.htm"
                    }, {
                        nombre: "norovirus",
                        pag: "../padecimientos/norkwalk.htm"
                    }, {
                        nombre: "nuca sacro",
                        pag: "../padecimientos/nuca-sacro.htm"
                    }, {
                        nombre: "nutricias",
                        pag: "../padecimientos/nutricias.htm"
                    }, {
                        nombre: "obesidad",
                        pag: "../padecimientos/obsidad.htm"
                    }, {
                        nombre: "sobrepeso",
                        pag: "../padecimientos/obsidad.htm"
                    }, {
                        nombre: "transtornos oculares",
                        pag: "../padecimientos/oculares.htm"
                    }, {
                        nombre: "oculares",
                        pag: "../padecimientos/oculares.htm"
                    }, {
                        nombre: "par odio",
                        pag: "../padecimientos/odio.htm"
                    }, {
                        nombre: "odio",
                        pag: "../padecimientos/odio.htm"
                    }, {
                        nombre: "olazo",
                        pag: "../padecimientos/olazo.htm"
                    }, {
                        nombre: "obstrucción intestinal",
                        pag: "../padecimientos/olazo.htm"
                    }, {
                        nombre: "estreñimiento",
                        pag: "../padecimientos/olazo.htm"
                    }, {
                        nombre: "oncocercosis",
                        pag: "../padecimientos/oncocercosis.htm"
                    }, {
                        nombre: "oncocerca",
                        pag: "../padecimientos/oncocercosis.htm"
                    }, {
                        nombre: "oncocerca vulvulus",
                        pag: "../padecimientos/oncocercosis.htm"
                    }, {
                        nombre: "orf",
                        pag: "../padecimientos/orf.htm"
                    }, {
                        nombre: "orf virus",
                        pag: "../padecimientos/orf.htm"
                    }, {
                        nombre: "virus orf",
                        pag: "../padecimientos/orf.htm"
                    }, {
                        nombre: "orgullo",
                        pag: "../padecimientos/orgullo.htm"
                    }, {
                        nombre: "hepatitis b",
                        pag: "../padecimientos/orthohepadna.htm"
                    }, {
                        nombre: "ortohepanavirus",
                        pag: "../padecimientos/orthohepadna.htm"
                    }, {
                        nombre: "otitis",
                        pag: "../padecimientos/otitis.htm"
                    }, {
                        nombre: "ovario",
                        pag: "../padecimientos/ovario_disf.htm"
                    }, {
                        nombre: "disfunción ovárica",
                        pag: "../padecimientos/ovario_disf.htm"
                    }, {
                        nombre: "oxiuros",
                        pag: "../padecimientos/oxiuro.htm"
                    }, {
                        nombre: "enterobius",
                        pag: "../padecimientos/oxiuro.htm"
                    }, {
                        nombre: "enterobius vermicularis",
                        pag: "../padecimientos/oxiuro.htm"
                    }, {
                        nombre: "punto alcalino",
                        pag: "../padecimientos/p_alcalino.htm"
                    }, {
                        nombre: "pitiriasis versicolor",
                        pag: "../padecimientos/p_versicolo.htm"
                    }, {
                        nombre: "soriasis",
                        pag: "../padecimientos/p_versicolo.htm"
                    }, {
                        nombre: "versicolor",
                        pag: "../padecimientos/p_versicolo.htm"
                    }, {
                        nombre: "pánico",
                        pag: "../padecimientos/panico.htm"
                    }, {
                        nombre: "papiloma",
                        pag: "../padecimientos/papiloma.htm"
                    }, {
                        nombre: "papiloma virus",
                        pag: "../padecimientos/papiloma.htm"
                    }, {
                        nombre: "virus del papiloma",
                        pag: "../padecimientos/papiloma.htm"
                    }, {
                        nombre: "papiloma humano",
                        pag: "../padecimientos/papiloma.htm"
                    }, {
                        nombre: "parálisis",
                        pag: "../padecimientos/paralisis.htm"
                    }, {
                        nombre: "paramixovirus",
                        pag: "../padecimientos/paramixovirus.htm"
                    }, {
                        nombre: "disfunción parasimpática",
                        pag: "../padecimientos/parasimpatico.htm"
                    }, {
                        nombre: "parasimpático",
                        pag: "../padecimientos/parasimpatico.htm"
                    }, {
                        nombre: "parásitos intestinales",
                        pag: "../padecimientos/parasitos_i.htm"
                    }, {
                        nombre: "taenia",
                        pag: "../padecimientos/parasitos_i.htm"
                    }, {
                        nombre: "paratiroides",
                        pag: "../padecimientos/paratiroides_disf.htm"
                    }, {
                        nombre: "disfunción de paratiroides ",
                        pag: "../padecimientos/paratiroides_disf.htm"
                    }, {
                        nombre: "parkinson",
                        pag: "../padecimientos/parkinson.htm"
                    }, {
                        nombre: "parotiditis",
                        pag: "../padecimientos/parotiditis.htm"
                    }, {
                        nombre: "paperas",
                        pag: "../padecimientos/parotiditis.htm"
                    }, {
                        nombre: "parvovirus",
                        pag: "../padecimientos/parvovirus.htm"
                    }, {
                        nombre: "pasciano",
                        pag: "../padecimientos/pasciano.htm"
                    }, {
                        nombre: "epicondilitis",
                        pag: "../padecimientos/pasciano.htm"
                    }, {
                        nombre: "codo de tenista",
                        pag: "../padecimientos/pasciano.htm"
                    }, {
                        nombre: "pasteurela",
                        pag: "../padecimientos/pasteurela.htm"
                    }, {
                        nombre: "hepatitis a",
                        pag: "../padecimientos/pasteurela.htm"
                    }, {
                        nombre: "par paty",
                        pag: "../padecimientos/paty.htm"
                    }, {
                        nombre: "embarazo ectópico",
                        pag: "../padecimientos/paty.htm"
                    }, {
                        nombre: "embarazo extrauterino",
                        pag: "../padecimientos/paty.htm"
                    }, {
                        nombre: "paty",
                        pag: "../padecimientos/paty.htm"
                    }, {
                        nombre: "pélvico",
                        pag: "../padecimientos/pelvico.htm"
                    }, {
                        nombre: "problemas pélvicos",
                        pag: "../padecimientos/pelvico.htm"
                    }, {
                        nombre: "pereza",
                        pag: "../padecimientos/pereza.htm"
                    }, {
                        nombre: "pericarditis",
                        pag: "../padecimientos/pericarditis.htm"
                    }, {
                        nombre: "pezón gemelo",
                        pag: "../padecimientos/pezon-gemelo.htm"
                    }, {
                        nombre: "pezón",
                        pag: "../padecimientos/pezon-gemelo.htm"
                    }, {
                        nombre: "piedra nigra",
                        pag: "../padecimientos/piedra_nigra.htm"
                    }, {
                        nombre: "micosis",
                        pag: "../padecimientos/piedra_nigra.htm"
                    }, {
                        nombre: "píloro",
                        pag: "../padecimientos/piloro_disf.htm"
                    }, {
                        nombre: "disfunción del píloro",
                        pag: "../padecimientos/piloro_disf.htm"
                    }, {
                        nombre: "plantas",
                        pag: "../padecimientos/plantas.htm"
                    }, {
                        nombre: "planta del pie",
                        pag: "../padecimientos/plantas.htm"
                    }, {
                        nombre: "plaquetas",
                        pag: "../padecimientos/plaquetas.htm"
                    }, {
                        nombre: "plasmodium falciparum",
                        pag: "../padecimientos/plasmodium_f.htm"
                    }, {
                        nombre: "plasmodium vivax",
                        pag: "../padecimientos/plasmodium_v.htm"
                    }, {
                        nombre: "pleuritis viral",
                        pag: "../padecimientos/pleuritis_viral.htm"
                    }, {
                        nombre: "pleuritis",
                        pag: "../padecimientos/pleuritis_viral.htm"
                    }, {
                        nombre: "neumocistis",
                        pag: "../padecimientos/pneumocystis.htm"
                    }, {
                        nombre: "neumocistis carini",
                        pag: "../padecimientos/pneumocystis.htm"
                    }, {
                        nombre: "poliglobulia",
                        pag: "../padecimientos/poliglobulina.htm"
                    }, {
                        nombre: "eritocitrosis",
                        pag: "../padecimientos/poliglobulina.htm"
                    }, {
                        nombre: "par marco antonio",
                        pag: "../padecimientos/poliglobulina.htm"
                    }, {
                        nombre: "marco antonio",
                        pag: "../padecimientos/poliglobulina.htm"
                    }, {
                        nombre: "poliomavirus",
                        pag: "../padecimientos/polioma.htm"
                    }, {
                        nombre: "poliomelitis",
                        pag: "../padecimientos/poliomielitis.htm"
                    }, {
                        nombre: "poliomielitis",
                        pag: "../padecimientos/poliomielitis.htm"
                    }, {
                        nombre: "prada",
                        pag: "../padecimientos/prada.htm"
                    }, {
                        nombre: "priones",
                        pag: "../padecimientos/priones.htm"
                    }, {
                        nombre: "prostatitis",
                        pag: "../padecimientos/prostatitis.htm"
                    }, {
                        nombre: "proteus mirabilis",
                        pag: "../padecimientos/proteus_m.htm"
                    }, {
                        nombre: "proteus vulgaris",
                        pag: "../padecimientos/proteus_v.htm"
                    }, {
                        nombre: "seudomona aureoginosa",
                        pag: "../padecimientos/pseudomona_a.htm"
                    }, {
                        nombre: "sicosis",
                        pag: "../padecimientos/psicosis.htm"
                    }, {
                        nombre: "soriasis",
                        pag: "../padecimientos/psoriasis.htm"
                    }, {
                        nombre: "terigión",
                        pag: "../padecimientos/pterigion.htm"
                    }, {
                        nombre: "terigion",
                        pag: "../padecimientos/pterigion.htm"
                    }, {
                        nombre: "quemaduras",
                        pag: "../padecimientos/quemaduras.htm"
                    }, {
                        nombre: "quemadura",
                        pag: "../padecimientos/quemaduras.htm"
                    }, {
                        nombre: "quiste",
                        pag: "../padecimientos/quiste-agua.htm"
                    }, {
                        nombre: "quiste de agua",
                        pag: "../padecimientos/quiste-agua.htm"
                    }, {
                        nombre: "pólipo",
                        pag: "../padecimientos/quiste-agua.htm"
                    }, {
                        nombre: "hongos",
                        pag: "../padecimientos/r_hongos.htm"
                    }, {
                        nombre: "reservorio de hongos",
                        pag: "../padecimientos/r_hongos.htm"
                    }, {
                        nombre: "rabia",
                        pag: "../padecimientos/rabia.htm"
                    }, {
                        nombre: "radiculopatía",
                        pag: "../padecimientos/radiculopatia.htm"
                    }, {
                        nombre: "pancreatitis",
                        pag: "../padecimientos/ramses.htm"
                    }, {
                        nombre: "ramses",
                        pag: "../padecimientos/ramses.htm"
                    }, {
                        nombre: "par ramses",
                        pag: "../padecimientos/ramses.htm"
                    }, {
                        nombre: "rcp",
                        pag: "../padecimientos/rcp.htm"
                    }, {
                        nombre: "reanimación cardiopulmonar",
                        pag: "../padecimientos/rcp.htm"
                    }, {
                        nombre: "sv-40 virus",
                        pag: "../padecimientos/rcv40.htm"
                    }, {
                        nombre: "virus del simio",
                        pag: "../padecimientos/rcv40.htm"
                    }, {
                        nombre: "transtornos renales",
                        pag: "../padecimientos/renales.htm"
                    }, {
                        nombre: "renales",
                        pag: "../padecimientos/renales.htm"
                    }, {
                        nombre: "reovirus",
                        pag: "../padecimientos/reovirus.htm"
                    }, {
                        nombre: "garganta glúteo",
                        pag: "../padecimientos/res_garg_gluteo.htm"
                    }, {
                        nombre: "reservorio garganta glúteo",
                        pag: "../padecimientos/res_garg_gluteo.htm"
                    }, {
                        nombre: "reservorio glúteo aquiles",
                        pag: "../padecimientos/res_gluteo_aquiles.htm"
                    }, {
                        nombre: "glúteo aquiles",
                        pag: "../padecimientos/res_gluteo_aquiles.htm"
                    }, {
                        nombre: "reservorio de virus",
                        pag: "../padecimientos/res_herpes.htm"
                    }, {
                        nombre: "reservorio virus",
                        pag: "../padecimientos/res_herpes.htm"
                    }, {
                        nombre: "reservorio herpes",
                        pag: "../padecimientos/res_herpes.htm"
                    }, {
                        nombre: "reservorio hígado",
                        pag: "../padecimientos/res_higado_occi.htm"
                    }, {
                        nombre: "hígado occipital",
                        pag: "../padecimientos/res_higado_occi.htm"
                    }, {
                        nombre: "reservorio mastoides bulbo",
                        pag: "../padecimientos/res_mast_bulbo.htm"
                    }, {
                        nombre: "mastoides bulbo",
                        pag: "../padecimientos/res_mast_bulbo.htm"
                    }, {
                        nombre: "reservorio mejilllas",
                        pag: "../padecimientos/res_mejillas.htm"
                    }, {
                        nombre: "resentimiento",
                        pag: "../padecimientos/resentimiento.htm"
                    }, {
                        nombre: "reservorio universal",
                        pag: "../padecimientos/reservorio_z.htm"
                    }, {
                        nombre: "reservorio",
                        pag: "../padecimientos/reservorio01.htm"
                    }, {
                        nombre: "reservorio de toxinas",
                        pag: "../padecimientos/residuos.htm"
                    }, {
                        nombre: "toxinas",
                        pag: "../padecimientos/residuos.htm"
                    }, {
                        nombre: "residuos",
                        pag: "../padecimientos/residuos.htm"
                    }, {
                        nombre: "enfermedades respiratorias",
                        pag: "../padecimientos/respiratorias.htm"
                    }, {
                        nombre: "respiratorias",
                        pag: "../padecimientos/respiratorias.htm"
                    }, {
                        nombre: "vías respiratorias",
                        pag: "../padecimientos/respiratorias.htm"
                    }, {
                        nombre: "rinosporidium seberi",
                        pag: "../padecimientos/rhinosporidium.htm"
                    }, {
                        nombre: "rinosporidium",
                        pag: "../padecimientos/rhinosporidium.htm"
                    }, {
                        nombre: "riktesia",
                        pag: "../padecimientos/rickettsia.htm"
                    }, {
                        nombre: "par roberta",
                        pag: "../padecimientos/roberta.htm"
                    }, {
                        nombre: "roberta",
                        pag: "../padecimientos/roberta.htm"
                    }, {
                        nombre: "falso embarazo",
                        pag: "../padecimientos/roberta.htm"
                    }, {
                        nombre: "rosácea púrpura",
                        pag: "../padecimientos/rosacea_p.htm"
                    }, {
                        nombre: "rosácea",
                        pag: "../padecimientos/rosacea_p.htm"
                    }, {
                        nombre: "roseola",
                        pag: "../padecimientos/roseola.htm"
                    }, {
                        nombre: "rotavirus",
                        pag: "../padecimientos/rotavirus.htm"
                    }, {
                        nombre: "ruben",
                        pag: "../padecimientos/ruben.htm"
                    }, {
                        nombre: "par ruben",
                        pag: "../padecimientos/ruben.htm"
                    }, {
                        nombre: "hipo",
                        pag: "../padecimientos/ruben.htm"
                    }, {
                        nombre: "rubeola",
                        pag: "../padecimientos/rubeola.htm"
                    }, {
                        nombre: "sacro bazo",
                        pag: "../padecimientos/sacro-bazo.htm"
                    }, {
                        nombre: "reservorio sacro bazo",
                        pag: "../padecimientos/sacro-bazo.htm"
                    }, {
                        nombre: "lujuria",
                        pag: "../padecimientos/sade.htm"
                    }, {
                        nombre: "sade",
                        pag: "../padecimientos/sade.htm"
                    }, {
                        nombre: "ninfomanía",
                        pag: "../padecimientos/sade.htm"
                    }, {
                        nombre: "saturnino",
                        pag: "../padecimientos/saturnino.htm"
                    }, {
                        nombre: "edipo",
                        pag: "../padecimientos/saturnino.htm"
                    }, {
                        nombre: "complejo de edipo",
                        pag: "../padecimientos/saturnino.htm"
                    }, {
                        nombre: "salmonela",
                        pag: "../padecimientos/salmonella_t.htm"
                    }, {
                        nombre: "salmonelosis",
                        pag: "../padecimientos/salmonella_t.htm"
                    }, {
                        nombre: "tifoidea",
                        pag: "../padecimientos/salmonella_t.htm"
                    }, {
                        nombre: "sangrado vaginal",
                        pag: "../padecimientos/sangrado-vaginal.htm"
                    }, {
                        nombre: "sarampión",
                        pag: "../padecimientos/sarampion.htm"
                    }, {
                        nombre: "sarcoma",
                        pag: "../padecimientos/sarcoma.htm"
                    }, {
                        nombre: "sarcoma de kaposi",
                        pag: "../padecimientos/sarcoma.htm"
                    }, {
                        nombre: "sinusitis",
                        pag: "../padecimientos/sinusitis_n.htm"
                    }, {
                        nombre: "sinusitis nasal",
                        pag: "../padecimientos/sinusitis_n.htm"
                    }, {
                        nombre: "congestión nasal",
                        pag: "../padecimientos/sinusitis_n.htm"
                    }, {
                        nombre: "congestión",
                        pag: "../padecimientos/sinusitis_n.htm"
                    }, {
                        nombre: "chistosoma",
                        pag: "../padecimientos/schistosoma.htm"
                    }, {
                        nombre: "picor de los nadadores",
                        pag: "../padecimientos/schistosoma.htm"
                    }, {
                        nombre: "esquitosomiasis",
                        pag: "../padecimientos/schistosoma.htm"
                    }, {
                        nombre: "tercer ojo",
                        pag: "../padecimientos/sensibilidad.htm"
                    }, {
                        nombre: "sensibilidad",
                        pag: "../padecimientos/sensibilidad.htm"
                    }, {
                        nombre: "sepsis",
                        pag: "../padecimientos/sepsis.htm"
                    }, {
                        nombre: "septicemia",
                        pag: "../padecimientos/sepsis.htm"
                    }, {
                        nombre: "serratias",
                        pag: "../padecimientos/serratias.htm"
                    }, {
                        nombre: "transtornos sexuales",
                        pag: "../padecimientos/sexuales.htm"
                    }, {
                        nombre: "trastornos sexuales",
                        pag: "../padecimientos/sexuales.htm"
                    }, {
                        nombre: "sexuales",
                        pag: "../padecimientos/sexuales.htm"
                    }, {
                        nombre: "transmisión sexual",
                        pag: "../padecimientos/sexuales.htm"
                    }, {
                        nombre: "shigela",
                        pag: "../padecimientos/shigella.htm"
                    }, {
                        nombre: "chigela",
                        pag: "../padecimientos/shigella.htm"
                    }, {
                        nombre: "sida",
                        pag: "../padecimientos/sida.htm"
                    }, {
                        nombre: "b&h sida",
                        pag: "../padecimientos/sida.htm"
                    }, {
                        nombre: "b y h sida",
                        pag: "../padecimientos/sida.htm"
                    }, {
                        nombre: "b y h",
                        pag: "../padecimientos/sida.htm"
                    }, {
                        nombre: "b&h",
                        pag: "../padecimientos/sida.htm"
                    }, {
                        nombre: "sífilis",
                        pag: "../padecimientos/sifilis.htm"
                    }, {
                        nombre: "sinusitis frontal",
                        pag: "../padecimientos/sinusitis_f.htm"
                    }, {
                        nombre: "sofia",
                        pag: "../padecimientos/sofia.htm"
                    }, {
                        nombre: "reservorio sofia",
                        pag: "../padecimientos/sofia.htm"
                    }, {
                        nombre: "cinturón pancreático",
                        pag: "../padecimientos/sofia.htm"
                    }, {
                        nombre: "shogren",
                        pag: "../padecimientos/sjogren.htm"
                    }, {
                        nombre: "síndrome de shogren",
                        pag: "../padecimientos/sjogren.htm"
                    }, {
                        nombre: "sistema nervioso autónomo",
                        pag: "../padecimientos/sna.htm"
                    }, {
                        nombre: "sistema nervioso",
                        pag: "../padecimientos/sna.htm"
                    }, {
                        nombre: "sistema nervioso simpático",
                        pag: "../padecimientos/sns_disf.htm"
                    }, {
                        nombre: "sistema nervioso disfunción",
                        pag: "../padecimientos/sns_disf.htm"
                    }, {
                        nombre: "solitaria",
                        pag: "../padecimientos/solitaria.html"
                    }, {
                        nombre: "sor",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "par sor",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "inspiración",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "sordera",
                        pag: "../padecimientos/sordera.htm"
                    }, {
                        nombre: "está aquí botriz",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "estachybotrys",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "hongo estachybotrys",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "hongo está aquí botriz",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "subdiafragmas",
                        pag: "../padecimientos/subdiafragmas.htm"
                    }, {
                        nombre: "reservorio de cisticercosis",
                        pag: "../padecimientos/subdiafragmas.htm"
                    }, {
                        nombre: "suelo pélvico",
                        pag: "../padecimientos/suelo_pelvico.htm"
                    }, {
                        nombre: "sistema nervioso autónomo",
                        pag: "../padecimientos/sna.htm"
                    }, {
                        nombre: "sistema nervioso",
                        pag: "../padecimientos/sna.htm"
                    }, {
                        nombre: "sistema nervioso simpático",
                        pag: "../padecimientos/sns_disf.htm"
                    }, {
                        nombre: "sistema nervioso disfunción",
                        pag: "../padecimientos/sns_disf.htm"
                    }, {
                        nombre: "solitaria",
                        pag: "../padecimientos/solitaria.htm"
                    }, {
                        nombre: "teniasis",
                        pag: "../padecimientos/solitaria.htm"
                    }, {
                        nombre: "sor",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "par sor",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "inspiración",
                        pag: "../padecimientos/sor.htm"
                    }, {
                        nombre: "sordera",
                        pag: "../padecimientos/sordera.htm"
                    }, {
                        nombre: "está aquí botriz",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "estachybotrys",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "hongo estachybotrys",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "hongo está aquí botriz",
                        pag: "../padecimientos/stachybotrys.htm"
                    }, {
                        nombre: "subdiafragmas",
                        pag: "../padecimientos/subdiafragmas.htm"
                    }, {
                        nombre: "reservorio de cisticercosis",
                        pag: "../padecimientos/subdiafragmas.htm"
                    }, {
                        nombre: "suelo pélvico",
                        pag: "../padecimientos/suelo_pelvico.htm"
                    }, {
                        nombre: "síndrome hemolítico",
                        pag: "../padecimientos/suermolitico.htm"
                    }, {
                        nombre: "síndrome urémico hemolítico",
                        pag: "../padecimientos/suermolitico.htm"
                    }, {
                        nombre: "síndrome urémico",
                        pag: "../padecimientos/suermolitico.htm"
                    }, {
                        nombre: "surfactante",
                        pag: "../padecimientos/sufactante.htm"
                    }, {
                        nombre: "factor surfactante",
                        pag: "../padecimientos/sufactante.htm"
                    }, {
                        nombre: "sufrimiento fetal",
                        pag: "../padecimientos/sufrimiento_f.htm"
                    }, {
                        nombre: "disfunción suprarrenal",
                        pag: "../padecimientos/suprarrenal_disf.htm"
                    }, {
                        nombre: "suprarrenal",
                        pag: "../padecimientos/suprarrenal_disf.htm"
                    }, {
                        nombre: "transtornos mentales",
                        pag: "../padecimientos/t_mentales.htm"
                    }, {
                        nombre: "trastornos mentales",
                        pag: "../padecimientos/t_mentales.htm"
                    }, {
                        nombre: "mentales",
                        pag: "../padecimientos/t_mentales.htm"
                    }, {
                        nombre: "hiperactividad",
                        pag: "../padecimientos/tdah.htm"
                    }, {
                        nombre: "déficit de atención",
                        pag: "../padecimientos/tdah.htm"
                    }, {
                        nombre: "trastorno de déficit de atención",
                        pag: "../padecimientos/tdah.htm"
                    }, {
                        nombre: "tenosinovitis",
                        pag: "../padecimientos/tenosinovitis.htm"
                    }, {
                        nombre: "tétanos",
                        pag: "../padecimientos/tetanos.htm"
                    }, {
                        nombre: "tifo exantemático",
                        pag: "../padecimientos/tifo_exa.htm"
                    }, {
                        nombre: "timo",
                        pag: "../padecimientos/timo_disf.htm"
                    }, {
                        nombre: "disfunción del timo",
                        pag: "../padecimientos/timo_disf.htm"
                    }, {
                        nombre: "tiña mentagrofites",
                        pag: "../padecimientos/tina_mentog.htm"
                    }, {
                        nombre: "tinitus",
                        pag: "../padecimientos/tinitus.htm"
                    }, {
                        nombre: "acúfenos",
                        pag: "../padecimientos/tinitus.htm"
                    }, {
                        nombre: "tiroides",
                        pag: "../padecimientos/tiroides_disf.htm"
                    }, {
                        nombre: "disfunción de la tiroides",
                        pag: "../padecimientos/tiroides_disf.htm"
                    }, {
                        nombre: "disfunción tiroides",
                        pag: "../padecimientos/tiroides_disf.htm"
                    }, {
                        nombre: "toc",
                        pag: "../padecimientos/toc.htm"
                    }, {
                        nombre: "deseo obsesivo",
                        pag: "../padecimientos/toc.htm"
                    }, {
                        nombre: "trastorno obsesivo compulsivo",
                        pag: "../padecimientos/toc.htm"
                    }, {
                        nombre: "trastorno de ansiedad",
                        pag: "../padecimientos/toc.htm"
                    }, {
                        nombre: "torch",
                        pag: "../padecimientos/torch.htm"
                    }, {
                        nombre: "síndrome de torch",
                        pag: "../padecimientos/torch.htm"
                    }, {
                        nombre: "tos",
                        pag: "../padecimientos/tos.htm"
                    }, {
                        nombre: "toxinas riñón",
                        pag: "../padecimientos/toxinas_rinon.htm"
                    }, {
                        nombre: "toxinas en el riñón",
                        pag: "../padecimientos/toxinas_rinon.htm"
                    }, {
                        nombre: "toxoides",
                        pag: "../padecimientos/toxoides.htm"
                    }, {
                        nombre: "toxoplasmosis",
                        pag: "../padecimientos/toxoplasmosis.htm"
                    }, {
                        nombre: "trepanozoma cruzi",
                        pag: "../padecimientos/trepanozoma_c.htm"
                    }, {
                        nombre: "treponema bucalis",
                        pag: "../padecimientos/treponema_b.htm"
                    }, {
                        nombre: "treponema",
                        pag: "../padecimientos/treponema_b.htm"
                    }, {
                        nombre: "tricomonas",
                        pag: "../padecimientos/tricomonas.htm"
                    }, {
                        nombre: "trini",
                        pag: "../padecimientos/trini.htm"
                    }, {
                        nombre: "par trini",
                        pag: "../padecimientos/trini.htm"
                    }, {
                        nombre: "complejo de electra",
                        pag: "../padecimientos/trini.htm"
                    }, {
                        nombre: "tripanosoma brucei",
                        pag: "../padecimientos/tripanozoma_b.htm"
                    }, {
                        nombre: "tripanosoma gambiense",
                        pag: "../padecimientos/tripanozoma_g.htm"
                    }, {
                        nombre: "tripanosoma palidum",
                        pag: "../padecimientos/tripanozoma_p.htm"
                    }, {
                        nombre: "treponema palidum",
                        pag: "../padecimientos/tripanozoma_p.htm"
                    }, {
                        nombre: "triquinosis",
                        pag: "../padecimientos/triquinosis.htm"
                    }, {
                        nombre: "trsiteza",
                        pag: "../padecimientos/tristeza.htm"
                    }, {
                        nombre: "kado",
                        pag: "../padecimientos/tristeza.htm"
                    }, {
                        nombre: "par kado",
                        pag: "../padecimientos/tristeza.htm"
                    }, {
                        nombre: "tricofiton",
                        pag: "../padecimientos/trychophyton.htm"
                    }, {
                        nombre: "tricofiton rubrum",
                        pag: "../padecimientos/trychophyton_r.htm"
                    }, {
                        nombre: "tuberculosis",
                        pag: "../padecimientos/tuberculosis.htm"
                    }, {
                        nombre: "tuberculosis 2",
                        pag: "../padecimientos/tuberculosis2.htm"
                    }, {
                        nombre: "tuberculosis dos",
                        pag: "../padecimientos/tuberculosis2.htm"
                    }, {
                        nombre: "ureaplasma",
                        pag: "../padecimientos/ureaplasma_u.htm"
                    }, {
                        nombre: "ureaplasma urealiticum",
                        pag: "../padecimientos/ureaplasma_u.htm"
                    }, {
                        nombre: "uretritis",
                        pag: "../padecimientos/uretritis.htm"
                    }, {
                        nombre: "útero",
                        pag: "../padecimientos/utero-desinf.htm"
                    }, {
                        nombre: "desinflamar útero",
                        pag: "../padecimientos/utero-desinf.htm"
                    }, {
                        nombre: "sincicial",
                        pag: "../padecimientos/v_sincicial.htm"
                    }, {
                        nombre: "sincicial respiratorio",
                        pag: "../padecimientos/v_sincicial.htm"
                    }, {
                        nombre: "virus sincicial respiratorio",
                        pag: "../padecimientos/v_sincicial.htm"
                    }, {
                        nombre: "virus sincicial",
                        pag: "../padecimientos/v_sincicial.htm"
                    }, {
                        nombre: "vacinia",
                        pag: "../padecimientos/vaccinia.htm"
                    }, {
                        nombre: "virus vacinia",
                        pag: "../padecimientos/vaccinia.htm"
                    }, {
                        nombre: "vaccinia",
                        pag: "../padecimientos/vaccinia.htm"
                    }, {
                        nombre: "vaginitis",
                        pag: "../padecimientos/vaginitis.htm"
                    }, {
                        nombre: "valor",
                        pag: "../padecimientos/valor.htm"
                    }, {
                        nombre: "válvula mitral",
                        pag: "../padecimientos/valv-mitral.htm"
                    }, {
                        nombre: "iliocecal",
                        pag: "../padecimientos/valv-occi.htm"
                    }, {
                        nombre: "válvula iliocecal",
                        pag: "../padecimientos/valv-occi.htm"
                    }, {
                        nombre: "iliocecal prominencia",
                        pag: "../padecimientos/valv-occi.htm"
                    }, {
                        nombre: "iliocecal prominencia occipital",
                        pag: "../padecimientos/valv-occi.htm"
                    }, {
                        nombre: "varicela",
                        pag: "../padecimientos/varicela.htm"
                    }, {
                        nombre: "varices",
                        pag: "../padecimientos/varices.htm"
                    }, {
                        nombre: "flebitis",
                        pag: "../padecimientos/varices.htm"
                    }, {
                        nombre: "varices esofágicas",
                        pag: "../padecimientos/varices_e.htm"
                    }, {
                        nombre: "velonela",
                        pag: "../padecimientos/vellonela.htm"
                    }, {
                        nombre: "veilonela",
                        pag: "../padecimientos/vellonela.htm"
                    }, {
                        nombre: "veillonella",
                        pag: "../padecimientos/vellonela.htm"
                    }, {
                        nombre: "vellonella",
                        pag: "../padecimientos/vellonela.htm"
                    }, {
                        nombre: "envenenamiento",
                        pag: "../padecimientos/venenos.htm"
                    }, {
                        nombre: "venenos",
                        pag: "../padecimientos/venenos.htm"
                    }, {
                        nombre: "venganza",
                        pag: "../padecimientos/venganza.htm"
                    }, {
                        nombre: "verruga",
                        pag: "../padecimientos/verruga.htm"
                    }, {
                        nombre: "verrugas",
                        pag: "../padecimientos/verruga.htm"
                    }, {
                        nombre: "vesícula",
                        pag: "../padecimientos/vesicula.htm"
                    }, {
                        nombre: "vibro haemofilus",
                        pag: "../padecimientos/vibro-haemofilus.htm"
                    }, {
                        nombre: "vibro parahemo",
                        pag: "../padecimientos/vibro-parahemo.htm"
                    }, {
                        nombre: "vibro parahemoliticus",
                        pag: "../padecimientos/vibro-parahemo.htm"
                    }, {
                        nombre: "vibrio parahemoliticus",
                        pag: "../padecimientos/vibro-parahemo.htm"
                    }, {
                        nombre: "b & h uno",
                        pag: "../padecimientos/vih1.htm"
                    }, {
                        nombre: "b & h 1",
                        pag: "../padecimientos/vih2.htm"
                    }, {
                        nombre: "b & h dos",
                        pag: "../padecimientos/vih2.htm"
                    }, {
                        nombre: "b & h 2",
                        pag: "../padecimientos/vih2.htm"
                    }, {
                        nombre: "b & h tres",
                        pag: "../padecimientos/vih3.htm"
                    }, {
                        nombre: "b & h 3",
                        pag: "../padecimientos/vih3.htm"
                    }, {
                        nombre: "b & h cuatro",
                        pag: "../padecimientos/vih4.htm"
                    }, {
                        nombre: "b & h 4",
                        pag: "../padecimientos/vih4.htm"
                    }, {
                        nombre: "b & h falso",
                        pag: "../padecimientos/vih4.htm"
                    }, {
                        nombre: "violación",
                        pag: "../padecimientos/violacion.htm"
                    }, {
                        nombre: "viruela",
                        pag: "../padecimientos/viruela.htm"
                    }, {
                        nombre: "virus vk",
                        pag: "../padecimientos/virus_vk.htm"
                    }, {
                        nombre: "virus v k",
                        pag: "../padecimientos/virus_vk.htm"
                    }, {
                        nombre: "virus b k",
                        pag: "../padecimientos/virus_vk.htm"
                    }, {
                        nombre: "virus bk",
                        pag: "../padecimientos/virus_vk.htm"
                    }, {
                        nombre: "virus viajero",
                        pag: "../padecimientos/virus-viajero.htm"
                    }, {
                        nombre: "vitiligio",
                        pag: "../padecimientos/vitiligo.htm"
                    }, {
                        nombre: "vitiligo",
                        pag: "../padecimientos/vitiligo.htm"
                    }, {
                        nombre: "vivian",
                        pag: "../padecimientos/vivian.htm"
                    }, {
                        nombre: "integridad anatómica",
                        pag: "../padecimientos/vivian.htm"
                    }, {
                        nombre: "avaricia",
                        pag: "../padecimientos/wallstreet.htm"
                    }, {
                        nombre: "wallstreet",
                        pag: "../padecimientos/wallstreet.htm"
                    }, {
                        nombre: "xcaret",
                        pag: "../padecimientos/xcaret.htm"
                    }, {
                        nombre: "eshcaret",
                        pag: "../padecimientos/xcaret.htm"
                    }, {
                        nombre: "inmoral",
                        pag: "../padecimientos/xcaret.htm"
                    }, {
                        nombre: "x m r v virus",
                        pag: "../padecimientos/xmrv-virus.htm"
                    }, {
                        nombre: "xmrv virus",
                        pag: "../padecimientos/xmrv-virus.htm"
                    }, {
                        nombre: "xmrb virus",
                        pag: "../padecimientos/xmrv-virus.htm"
                    }, {
                        nombre: "x m r b virus",
                        pag: "../padecimientos/xmrv-virus.htm"
                    }, {
                        nombre: "yersinia intestinalis",
                        pag: "../padecimientos/yersinia_i.htm"
                    }, {
                        nombre: "yersinia pestis",
                        pag: "../padecimientos/yersinia_p.htm"
                    }, {
                        nombre: "yersinia neumonae",
                        pag: "../padecimientos/yersinia_pn.htm"
                    }, {
                        nombre: "peste neumónica",
                        pag: "../padecimientos/yersinia_pn.htm"
                    }, {
                        nombre: "yolanda",
                        pag: "../padecimientos/yolanda.htm"
                    }, {
                        nombre: "par yolanda",
                        pag: "../padecimientos/yolanda.htm"
                    }, {
                        nombre: "coronavirus reservorio",
                        pag: "../padecimientos/yolanda.htm"
                    }, {
                        nombre: "reservorio de coronavirus",
                        pag: "../padecimientos/yolanda.htm"
                    }, {
                        nombre: "zika",
                        pag: "../padecimientos/zika.htm"
                    }, {
                        nombre: "zika chicunguya",
                        pag: "../padecimientos/zika.htm"
                    }, {
                        nombre: "zika chicungunya",
                        pag: "../padecimientos/zika.htm"
                    }, ];
                    let busqueda = src;
                    console.log(src);
                    let indice = arreglo.findIndex(mascota => mascota.nombre === busqueda);
                    if (indice < 0) {
                        speech.text = 'la página' + src + 'no existe';
                        window.speechSynthesis.speak(speech);
                    }
                    window.open(arreglo[indice].pag, "guia");
                    console.log(arreglo[indice].pag);
                    recog = true;
                }

                //que tan bien esta el reconocimiento
                console.log('Confidencial: ' + event.results[0][0].confidence);


                //despues de detectar comando
                if (recog === false) {
                    speech.text = 'el comando' + resultadoEscucha + 'no se ha reconocido';
                    window.speechSynthesis.speak(speech);
                    console.log('Ha fallado algo');
                    escucha.src = 'iconos/bocina.gif';
                    activo = false;
                }
            }
            reconocimiento.onspeechend = (event) => {
                reconocimiento.stop();
                console.log('Ha dejado de escuchar el microfono');
                escucha.src = 'iconos/bocina.gif';
                activo = false;
            }

            reconocimiento.onerror = (event) => {
                speech.text = 'Algo ha fallado, revisa la configuración de tu micrófono';
                window.speechSynthesis.speak(speech);
                textError.textContent = 'Algo fallo intentalo de nuevo';
                console.log('error' + event.error);
                escucha.src = 'iconos/bocina.gif';
                activo = false;
            }


        }
    }
}

function prime(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function primer(str){
    return str.charAt(0);
}
function search(){
    const arreglo = [{
        nombre: "amebiasis",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "artículos",
        tit:"videos y artículos",
        pag: "articulos.htm"
    }, {
        nombre: "bacterias",
        tit:"lista de bacterias",
        pag:"bacterias.htm"
    }, {
        nombre: "lista de bacterias",
        tit:"bacterias.htm",
        pag:"bacterias.htm"
    }, {
        nombre: "pares de bacterias",
        tit:"pares de bacterias",
        pag:"bacterias2.htm"
    }, {
        nombre: "directorio",
        tit:"directorio patrocinadores",
        pag:"directorio/directorio.htm"
    }, {
        nombre: "disfuncionales",
        tit:"pares disfuncionales",
        pag:"disfuncionales.htm"
    }, {
        nombre: "pares disfuncionales",
        tit:"pares disfuncionales",
        pag:"disfuncionales.htm"   
    }, {    
        nombre: "enfermedades complejas",
        tit: "enfermedades complejas",
        pag: "ecomplejas.htm"   
    }, {    
        nombre: "emergencia",
        tit: "emergencia",
        pag: "emerg.htm"    
    }, {    
        nombre: "primeros auxilios",
        tit: "primeros auxilios",
        pag: "emerg.htm"    
    }, {    
        nombre: "emocionales",
        tit: "pares emocionales",
        pag: "emocionales.htm"  
    }, {    
        nombre: "trastornos emocionales",
        tit: "pares emocionales",
        pag: "emocionales.htm"  
    }, {    
        nombre: "pares emocionales",
        tit: "pares emocionales",
        pag: "emocionales2.htm" 
    }, {    
        nombre: "especiales",
        tit:"pares especiales",
        pag:"especiales.htm"
    }, {
        nombre: "pares especiales",
        tit:"pares especiales",
        pag:"especiales2.htm"
    }, {
        nombre: "eventos",
        tit:"eventos",
        pag:"eventos.htm"
    }, {
        nombre: "novedades",
        tit:"novedades",
        pag:"articulos.htm"
    }, {
        nombre: "noticias",
        tit:"novedades",
        pag:"eventos.htm"
    }, {
        nombre: "uso de la guía",
        tit:"uso de la guía",
        pag:"gdeg.htm"
    }, {
        nombre: "hongos",
        tit:"pares de hongos",
        pag:"hongos.htm"
    }, {
        nombre: "pares de hongos",
        tit:"pares de hongos",
        pag:"hongos2.htm"
    }, {
        nombre: "pares adicionales",
        tit:"pares adicionales",
        pag:"mas_pares.htm"
    }, {
        nombre: "clasificación de pares",
        tit:"clasificación de pares",
        pag:"otrospares.htm"
    }, {
        nombre: "padecimientos",
        tit:"padecimientos",
        pag:"padecimientos.htm"
    }, {
        nombre: "parásitos",
        tit:"pares para parásitos",
        pag:"parasitos_i.htm"
    }, {
        nombre: "pares de parásitos",
        tit:"pares para parásitos",
        pag:"parasitos2.htm"
    }, {
        nombre: "portada",
        tit:"portada",
        pag:"portada.htm"
    }, {
        nombre: "inicio",
        tit:"portada",
        pag:"portada.htm"
    }, {
        nombre: "reservorios",
        tit:"lista reservorios",
        pag:"reservorios.htm"
    }, {
        nombre: "virus",
        tit:"lista de virus",
        pag:"virus.htm"
    }, {
        nombre: "lista de virus",
        tit:"liesta de virus",
        pag:"virus.htm"
    }, {
        nombre: "pares de virus",
        tit:"lista de virus",
        pag:"virus2.htm"
    }, {
        nombre: "lista de hongos",
        tit:"lista de hongos",
        pag:"hongos.htm"
    }, {
        nombre: "bioenergética",
        tit:"qué es bioenergética",
        pag:"tutorial/bioenergetica.htm"
    }, {
        nombre: "cabeza",
        tit:"puntos cabeza",
        pag:"tutorial/cabeza.htm"
    }, {
        nombre: "puntos en cabeza",
        tit:"puntos cabeza",
        pag:"tutorial/cabeza.htm"
    }, {
        nombre: "puntos de cabeza",
        tit:"puntos cabeza",
        pag:"tutorial/cabeza.htm"
    }, {
        nombre: "puntos en cuello",
        tit:"puntos en cuello",
        pag:"tutorial/cuello.htm"
    }, {
        nombre: "cuello y brazos",
        tit:"puntos en cuello",
        pag:"tutorial/cuello.htm"
    }, {
        nombre: "espalda",
        tit:"puntos en espalda",
        pag:"tutorial/espalda.htm"
    }, {
        nombre: "puntos en espalda",
        tit:"puntos en espalda",
        pag:"tutorial/espalda.htm"
    }, {
        nombre: "puntos en dorso",
        tit:"puntos en espalda",
        pag:"tutorial/espalda.htm"
    }, {
        nombre: "glosario",
        tit:"glosario",
        pag:"tutorial/glosario.htm"
    }, {
        nombre: "goiz durán",
        tit:"Dr. Goiz durán biografía",
        pag:"tutorial/goizduran.htm"
    }, {
        nombre: "puntos en la mujer",
        tit:"puntos en la mujer",
        pag:"tutorial/mujer.htm"
    }, {
        nombre: "mujer",
        tit:"puntos en la mujer",
        pag:"tutorial/mujer.htm"
    }, {
        nombre: "qué es el par biomagnético",
        tit:"qué es el par biomagnético",
        pag:"tutorial/par.htm"
    }, {
        nombre: "par biomagnético",
        tit:"qué es el par biomagnético",
        pag:"tutorial/par.htm"
    }, {
        nombre: "piernas",
        tit:"puntos en piernas",
        pag:"tutorial/piernas.htm"
    }, {
        nombre: "puntos en piernas",
        tit:"puntos en piernas",
        pag:"tutorial/piernas.htm"
    }, {
        nombre: "lista de puntos",
        tit:"lista de puntos",
        pag:"tutorial/puntos.htm"
    }, {
        nombre: "puntos de cuerpo",
        tit:"puntos en torso",
        pag:"tutorial/torso.htm"
    }, {
        nombre: "puntos en tronco",
        tit:"puntos en torso",
        pag:"tutorial/torso.htm"
    }, {
        nombre: "tratamiento",
        tit:"tratamiento con biomagnetismo",
        pag:"tutorial/tratamiento.htm"
    }, {
        nombre: "tratamiento con biomagnetismo",
        tit:"tratamiento con biomagnetismo",
        pag:"tutorial/tratamiento.htm"
    }, {
        nombre: "tutorial",
        tit:"tutorial",
        pag:"tutorial/tutorial.htm"
    }, {
        nombre: "desbloqueo de emociones",
        tit:"código de la emoción",
        pag:"rastreos/emociones-desbloq.htm"
    }, {
        nombre: "código de la emoción",
        tit:"código de la emoción",
        pag:"rastreos/emociones-desbloq.htm"
    }, {
        nombre: "nutrimentos",
        tit:"nutrimentos",
        pag:"rastreos/nutrimentos.htm"
    }, {
        nombre: "péndulo",
        tit:"nutrimentos",
        pag:"rastreos/pendulo.htm"
    }, {
        nombre: "uso del péndulo",
        tit:"uso del péndulo",
        pag:"rastreos/pendulo.htm"
    }, {
        nombre: "protocolos",
        tit:"protocolos",
        pag:"rastreos/protocolos.htm"
    }, {
        nombre: "protocolo avanzado",
        tit:"protocolo avanzado",
        pag:"rastreos/r_avanzado.htm"
    }, {
        nombre: "protocolo básico",
        tit:"protocolo básico",
        pag:"rastreos/r_basico.htm"
    }, {
        nombre: "protocolo 173 puntos",
        tit:"protocolo 173 puntos",
        pag:"rastreos/r_basico.htm"
    }, {
        nombre: "rastreo en brazos",
        tit:"rastreo en brazos",
        pag:"rastreos/r_brazos.htm"
    }, {
        nombre: "rastreo en cabeza",
        tit:"rastreo en cabeza",
        pag:"rastreos/r_cabeza1.htm"
    }, {
        nombre: "rastreo en piernas",
        tit:"rastreo en piernas",
        pag:"rastreos/r_piernas.htm"
    }, {
        nombre: "rastreo en torso",
        tit:"rastreo en torso",
        pag:"rastreos/r_torso.htm"
    }, {
        nombre: "rastreo en tronco",
        tit:"rastreo en tronco",
        pag:"rastreos/r_torso.htm"
    }, {
        nombre: "rastreo en pecho",
        tit:"rastreo en pecho",
        pag:"rastreos/r_torso.htm"
    }, {
        nombre: "rastreo en abdomen",
        tit:"rastreo en abdomen",
        pag:"rastreos/r_torso.htm"
    }, {
        nombre: "rastreo en espalda",
        tit:"rastreo en espalda",
        pag:"rastreos/r_dorso.htm"
    }, {
        nombre: "aerobacter aerogenus",
        tit:"aerobacter aerogenus",
        pag:"../padecimientos/a_aerogenus.htm"
    }, {
        nombre: "abandono",
        tit:"abandono",
        pag:"../padecimientos/abandono.htm"
    }, {
        nombre: "abraham",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "polo polo",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "abseso hepático",
        tit:"abseso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "ácaro",
        tit:"toxacara ácaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "ácaros",
        tit:"toxacara ácaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "acidez",
        tit:"acodez y oxidación",
        pag:"../padecimientos/accidez.htm"
    }, {
        nombre: "actonomices",
        tit:"actinomices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "adenovirus",
        tit:"adenovirus",
        pag:"../padecimientos/adenovirus.htm"
    }, {
        nombre: "adenovirus 36",
        tit:"adenovirus 36",
        pag:"../padecimientos/adenovirus36.htm"
    }, {
        nombre: "adicciones",
        tit:"adicciones",
        pag:"../padecimientos/adicciones.htm"
    }, {
        nombre: "aftosa",
        tit:"fiebre aftosa",
        pag:"../padecimientos/aftosa.htm"
    }, {
        nombre: "fiebre aftosa",
        tit:"fiebre aftosa",
        pag:"../padecimientos/aftosa.htm"
    }, {
        nombre: "agalactie",
        tit:"estreptococo agalactiae",
        pag:"../padecimientos/agalactiae.htm"
    }, {
        nombre: "alcoholismo",
        tit:"alcoholismo",
        pag:"../padecimientos/alcoholismo.htm"
    }, {
        nombre: "alcolismo",
        tit:"alcoholismo",
        pag:"../padecimientos/alcoholismo.htm"
    }, {
        nombre: "alergias alimentarias",
        tit:"alergia alimentaria",
        pag:"../padecimientos/alergia_a.htm"
    }, {
        nombre: "alex",
        tit:"alex",
        pag:"../padecimientos/alex.htm"
    }, {
        nombre: "disfunción renal",
        tit:"alex",
        pag:"../padecimientos/alex.htm"
    }, {
        nombre: "alopecia",
        tit:"alopecia",
        pag:"../padecimientos/alopecia.htm"
    }, {
        nombre: "altivez",
        tit:"altivez",
        pag:"../padecimientos/altivez.htm"
    }, {
        nombre: "altruismo",
        tit:"altruismo",
        pag:"../padecimientos/altruismo.htm"
    }, {
        nombre: "alvaro",
        tit:"alvaro",
        pag:"../padecimientos/alvaro.htm"
    }, {
        nombre: "sistema endocrino",
        tit:"alvaro",
        pag:"../padecimientos/alvaro.htm"
    }, {
        nombre: "alzheimer",
        tit:"alzheimer",
        pag:"../padecimientos/alzheimer.htm"
    }, {
        nombre: "amibiasis",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "amiloidosis",
        tit:"amiloidosis",
        pag:"../padecimientos/amiloidosis.htm"
    }, {
        nombre: "amnesia",
        tit:"amnesia",
        pag:"../padecimientos/amnesia.htm"
    }, {
        nombre: "ana alicia",
        tit:"ana alicia",
        pag:"../padecimientos/"
    }, {
        nombre: "taquicardia",
        tit:"ana alicia",
        pag:"../padecimientos/"
    }, {
        nombre: "choque anafiláctico",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {
        nombre: "anemia",
        tit:"anemia",
        pag:"../padecimientos/anemia.htm"
    }, {
        nombre: "angeles",
        tit:"angeles",
        pag:"../padecimientos/angeles.htm"
    }, {
        nombre: "anisakis",
        tit:"anisakis",
        pag:"../padecimientos/anisakis.htm"
    }, {
        nombre: "anorexia",
        tit:"anorexia",
        pag:"../padecimientos/anorexia.htm"
    }, {
        nombre: "ansiedad",
        tit:"ansiedad",
        pag:"../padecimientos/ansiedad.htm"
    }, {
        nombre: "antineoplásico",
        tit:"antineoplásico",
        pag:"../padecimientos/antineoplasico.htm"
    }, {
        nombre: "antrax",
        tit:"antrax virus",
        pag:"../padecimientos/antrax.htm"
    }, {
        nombre: "antrax virus",
        tit:"antrax virus",
        pag:"../padecimientos/antrax.htm"
    }, {
        nombre: "apatía",
        tit:"apatía",
        pag:"../padecimientos/apatia.htm"
    }, {
        nombre: "apego",
        tit:"apego",
        pag:"../padecimientos/apego.htm"
    }, {
        nombre: "apendicitis",
        tit:"apendicitis",
        pag:"../padecimientos/apendicitis.htm"
    }, {
        nombre: "apnea",
        tit:"apnea",
        pag:"../padecimientos/apnea.htm"
    }, {
        nombre: "area visual",
        tit:"área visual",
        pag:"../padecimientos/area-visual.htm"
    }, {
        nombre: "pérdida de vista",
        tit:"área visual",
        pag:"../padecimientos/area-visual.htm"
    }, {
        nombre: "arenillas",
        tit:"arenillas",
        pag:"../padecimientos/arenillas.htm"
    }, {
        nombre: "arsénico",
        tit:"arsénico",
        pag:"../padecimientos/arsenico.htm"
    }, {
        nombre: "artritis",
        tit:"artritis",
        pag:"../padecimientos/artritis.htm"
    }, {
        nombre: "asfixia",
        tit:"asfixia",
        pag:"../padecimientos/asfixia.htm"
    }, {
        nombre: "asma",
        tit:"asma",
        pag:"../padecimientos/asma.htm"
    }, {
        nombre: "asma alérgica",
        tit:"asma alérgica",
        pag:"../padecimientos/asma_a.htm"
    }, {
        nombre: "asperjilus",
        tit:"asperjilus",
        pag:"../padecimientos/asperjillus.htm"
    }, {
        nombre: "asperjillus",
        tit:"asperjilus",
        pag:"../padecimientos/asperjillus.htm"
    }, {
        nombre: "astrovirus",
        tit:"astrovirus",
        pag:"../padecimientos/astrovirus.htm"
    }, {
        nombre: "atrofia",
        tit:"atrofia",
        pag:"../padecimientos/atrofia.htm"
    }, {
        nombre: "autismo",
        tit:"autismo",
        pag:"../padecimientos/autismo.htm"
    }, {
        nombre: "autoestima",
        tit:"autoestima",
        pag:"../padecimientos/autoestima.htm"
    }, {
        nombre: "autoinmune",
        tit:"sistema autoinmune",
        pag:"../padecimientos/autoinmune.htm"
    }, {
        nombre: "sistema autoinmune",
        tit:"sistema autoinmune",
        pag:"../padecimientos/autoinmune.htm"
    }, {
        nombre: "inmuno competencia",
        tit:"sistema autoinmune",
        pag:"../padecimientos/autoinmune.htm"
    }, {
        nombre: "bacilo paratyphi",
        tit:"bacilo paratyphi",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "bacilo paratifico",
        tit:"bacilo paratyphi",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "paratifico",
        tit:"bacilo paratyphi",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "babesia",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    }, {
        nombre: "bacteria de laboratorio",
        tit:"bacteria de laboratorio",
        pag:"../padecimientos/bacteria_lab.htm"
    }, {
        nombre: "balantidium t",
        tit:"ballantidium tifo",
        pag:"../padecimientos/balantidium_t.htm"
    }, {
        nombre: "balantidium tifo",
        tit:"ballantidium tifo",
        pag:"../padecimientos/balantidium_t.htm"
    }, {
        nombre: "bandas amnióticas",
        tit:"bandas amnióticas",
        pag:"../padecimientos/b-amnioticas.htm"
    }, {
        nombre: "técnica bansal",
        tit:"técnica bansal",
        pag:"../padecimientos/bansal.htm"
    }, {
        nombre: "bartonela",
        tit:"bartonela",
        pag:"../padecimientos/bartonella.htm"
    }, {
        nombre: "disfunción del bazo",
        tit:"disfunción del bazo",
        pag:"../padecimientos/bazo_disf.htm"
    }, {
        nombre: "benavides",
        tit:"benavides",
        pag:"../padecimientos/benavides.htm"
    }, {
        nombre: "disfunción del estómago",
        tit:"benavides",
        pag:"../padecimientos/benavides.htm"
    }, {
        nombre: "disfunción estomacal",
        tit:"benavides",
        pag:"../padecimientos/benavides.htm"
    }, {
        nombre: "trastorno bipolar",
        tit:"trastorno bipolar",
        pag:"../padecimientos/bipolar.htm"
    }, {
        nombre: "bipolar",
        tit:"trastorno bipolar",
        pag:"../padecimientos/bipolar.htm"
    }, {
        nombre: "blastocistis hóminis",
        tit:"blastocistis hóminis",
        pag:"../padecimientos/blastocistis_h.htm"
    }, {
        nombre: "blastomicosis",
        tit:"blastomicosis",
        pag:"../padecimientos/blastomicosis.htm"
    }, {
        nombre: "bonilla",
        tit:"impulso autodestructivo, bonilla",
        pag:"../padecimientos/bonilla.htm"
    }, {
        nombre: "suicidio, autodestructivo",
        tit:"impulso autodestructivo, bonilla",
        pag:"../padecimientos/bonilla.htm"
    }, {
        nombre: "bordetela",
        tit:"bordetella",
        pag:"../padecimientos/bordetella.htm"
    }, {
        nombre: "bordetella",
        tit:"bordetella",
        pag:"../padecimientos/bordetella.htm"
    }, {
        nombre: "borrelia",
        tit:"borrelia",
        pag:"../padecimientos/borrelia.htm"
    }, {
        nombre: "botiquín",
        tit:"botiquín",
        pag:"../padecimientos/botiquin.htm"
    }, {
        nombre: "botulismo",
        tit:"botulismo",
        pag:"../padecimientos/botulismo.htm"
    }, {
        nombre: "bradicardia",
        tit:"bradicardia",
        pag:"../padecimientos/bradicardia.htm"
    }, {
        nombre: "parálisis del brazo",
        tit:"parálisis del brazo",
        pag:"../padecimientos/brazo_paralisis.htm"
    }, {
        nombre: "brucela",
        tit:"brucela",
        pag:"../padecimientos/brucela.htm"
    }, {
        nombre: "brucelosis",
        tit:"brucela",
        pag:"../padecimientos/brucela.htm"
    }, {
        nombre: "brucela abortus",
        tit:"brucela",
        pag:"../padecimientos/brucela_a.htm"
    }, {
        nombre: "burkholderia",
        tit:"burkholderia",
        pag:"../padecimientos/borkholderia_c.htm"
    }, {
        nombre: "burcolderia",
        tit:"burkholderia",
        pag:"../padecimientos/borkholderia_c.htm"
    }, {
        nombre: "cain",
        tit:"cain, envidia",
        pag:"../padecimientos/cain.htm"
    }, {
        nombre: "envidia",
        tit:"cain, envidia",
        pag:"../padecimientos/cain.htm"
    }, {
        nombre: "calcificación lumbar",
        tit:"calcificación lumbar",
        pag:"../padecimientos/cal_lumbar.htm"
    }, {
        nombre: "calambres",
        tit:"calambres",
        pag:"../padecimientos/calambres.htm"
    }, {
        nombre: "dolor de cálculos",
        tit:"dolor de cálculos",
        pag:"../padecimientos/calculos_auch.htm"
    }, {
        nombre: "cálculos renales",
        tit:"cálculos renales",
        pag:"../padecimientos/calculos_ren.htm"
    }, {
        nombre: "cálculos de vesícula",
        tit:"cálculos de vesícula",
        pag:"../padecimientos/calculos_ves.htm"
    }, {
        nombre: "campilobacter",
        tit:"campilobacter",
        pag:"../padecimientos/campylobacter_j.htm"
    }, {
        nombre: "campilobacter jejuni",
        tit:"campilobacter",
        pag:"../padecimientos/campylobacter_j.htm"
    }, {
        nombre: "cáncer",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "cáncer de estómago",
        tit:"cáncer de estómago",
        pag:"../padecimientos/cancer_estomago.htm"
    }, {
        nombre: "cáncer de garganta",
        tit:"cáncer de garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    }, {
        nombre: "cáncer de mama",
        tit:"cáncer de mama",
        pag:"../padecimientos/cancer_mama.htm"
    }, {
        nombre: "cáncer de páncreas",
        tit:"cáncer de páncreas",
        pag:"../padecimientos/cancer_pancreas.htm"
    }, {
        nombre: "cáncer de próstata",
        tit:"cáncer de próstata",
        pag:"../padecimientos/cancer_prostata.htm"
    }, {
        nombre: "cáncer uterino",
        tit:"cáncer de útero",
        pag:"../padecimientos/cancer_uterino.htm"
    }, {
        nombre: "cáncer de vejiga",
        tit:"cáncer de vejiga",
        pag:"../padecimientos/cancer_vejiga.htm"
    }, {
        nombre: "cáncer tratamiento",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    }, {
        nombre: "tratamiento para el cáncer",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    }, {
        nombre: "cándida",
        tit:"cándida",
        pag:"../padecimientos/candida_a.htm"
    }, {
        nombre: "cándida albicans",
        tit:"cándida",
        pag:"../padecimientos/candida_a.htm"
    }, {
        nombre: "cansancio crónico",
        tit:"cansancio crónico",
        pag:"../padecimientos/cansancio.htm"
    }, {
        nombre: "cardias",
        tit:"cardias, disfunción",
        pag:"../padecimientos/cardias.htm"
    }, {
        nombre: "disfunción del cardias",
        tit:"cardias, disfunción",
        pag:"../padecimientos/cardias.htm"
    }, {
        nombre: "cardio uno",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    }, {
        nombre: "balance cardiovascular",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    }, {
        nombre: "pares del corazón",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    }, {
        nombre: "trastornos cardiovasculares",
        tit:"cardiovasculares, trastornos",
        pag:"../padecimientos/cardiovasculares.htm"
    }, {
        nombre: "carmen",
        tit:"carmen, disfunción ovárica",
        pag:"../padecimientos/carmen.htm"
    }, {
        nombre: "disfunción ovárica",
        tit:"carmen, disfunción ovárica",
        pag:"../padecimientos/carmen.htm"
    }, {
        nombre: "tunel carpiano",
        tit:"tunel carpiano",
        pag:"../padecimientos/carpiano.htm"
    }, {
        nombre: "caspa",
        tit:"caspa",
        pag:"../padecimientos/caspa.htm"
    }, {
        nombre: "castañeda",
        tit:"castañeda, trastornos visuales",
        pag:"../padecimientos/castaneda.htm"
    }, {
        nombre: "trastornos visuales",
        tit:"castañeda, trastornos visuales",
        pag:"../padecimientos/castaneda.htm"
    }, {
        nombre: "cataratas",
        tit:"cataratas",
        pag:"../padecimientos/cataratas.htm"
    }, {
        nombre: "catarro común",
        tit:"catarro común",
        pag:"../padecimientos/catarro.htm"
    }, {
        nombre: "celos",
        tit:"celos",
        pag:"../padecimientos/celos.htm"
    }, {
        nombre: "celulitis",
        tit:"celulitis",
        pag:"../padecimientos/celulitis.htm"
    }, {
        nombre: "cerebrovascular",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "infarto cerebral",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "ictus",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "chaco",
        tit:"chaco",
        pag:"../padecimientos/chaco.htm"
    }, {
        nombre: "chakras",
        tit:"chakras",
        pag:"../padecimientos/chakras.htm"
    }, {
        nombre: "chapingo",
        tit:"chapingo",
        pag:"../padecimientos/chapingo.htm"
    }, {
        nombre: "crisis convulsivas",
        tit:"crisis convulsivas",
        pag:"../padecimientos/chapingo.htm"
    }, {
        nombre: "chikungunya",
        tit:"chikungunya",
        pag:"../padecimientos/chikungunya.htm"
    }, {
        nombre: "chikunguya",
        tit:"chikungunya",
        pag:"../padecimientos/chikungunya.htm"
    }, {
        nombre: "choque eléctrico",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    }, {
        nombre: "descarga eléctrica",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    }, {
        nombre: "ciatalgia",
        tit:"ciatalgia",
        pag:"../padecimientos/ciatalgia.htm"
    }, {
        nombre: "cisticerco",
        tit:"cisticerco",
        pag:"../padecimientos/cisticerco.htm"
    }, {
        nombre: "citomegalovirus",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    }, {
        nombre: "clamidia intestinalis",
        tit:"clamidia intestinalis",
        pag:"../padecimientos/clamidia_i.htm"
    }, {
        nombre: "clamidia pneumoniae",
        tit:"clamidia pneumoniae",
        pag:"../padecimientos/clamidia_pn.htm"
    }, {
        nombre: "clamidia neumonía",
        tit:"clamidia pneumoniae",
        pag:"../padecimientos/clamidia_pn.htm"
    }, {
        nombre: "clamidia psitasi",
        tit:"clamidia psitasi",
        pag:"../padecimientos/clamidia_ps.htm"
    }, {
        nombre: "clamidia psitachi",
        tit:"clamidia psitasi",
        pag:"../padecimientos/clamidia_ps.htm"
    }, {
        nombre: "clamidia tracomatis",
        tit:"clamidia tracomatis",
        pag:"../padecimientos/clamidia_.htm"
    }, {
        nombre: "clamidia tucans",
        tit:"clamidia tucans",
        pag:"../padecimientos/clamidia_tu.htm"
    }, {
        nombre: "clamidia trachomatis",
        tit:"clamidia tracomatis",
        pag:"../padecimientos/clamidia_t.htm"
    }, {
        nombre: "clorstridium malignum",
        tit:"clorstridium malignum",
        pag:"../padecimientos/clorstridium_m.htm"
    }, {
        nombre: "clorstridium",
        tit:"clorstridium dificile",
        pag:"../padecimientos/clorstridium_d.htm"
    }, {
        nombre: "clorstridium dificile",
        tit:"clorstridium dificile",
        pag:"../padecimientos/clorstridium_d.htm"
    }, {
        nombre: "clorstridium difficile",
        tit:"clorstridium dificile",
        pag:"../padecimientos/clorstridium_d.htm"
    }, {
        nombre: "clorstridium perfringes",
        tit:"clorstridium perfringes",
        pag:"../padecimientos/clorstridium_p.htm"
    }, {
        nombre: "clyptospora",
        tit:"clyptospora cayetanesis",
        pag:"../padecimientos/clyptospora_cay.htm"
    }, {
        nombre: "clyptospora cayetanesis",
        tit:"clyptospora cayetanesis",
        pag:"../padecimientos/clyptospora_cay.htm"
    }, {
        nombre: "coccidio inmintis",
        tit:"coccidio inmintis",
        pag:"../padecimientos/coccidio_i.htm"
    }, {
        nombre: "cólera",
        tit:"vibro cólera",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "vibro cólera",
        tit:"vibro cólera",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "hepatitis G",
        tit:"hepatitis G",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "colitis",
        tit:"colitis",
        pag:"../padecimientos/colitis.htm"
    }, {
        nombre: "disfunción del colon",
        tit:"disfunción del colon",
        pag:"../padecimientos/colon_disf.htm"
    }, {
        nombre: "concentración",
        tit:"concentración",
        pag:"../padecimientos/concentracion.htm"
    }, {
        nombre: "conciencia",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    }, {
        nombre: "congreso",
        tit:"congreso",
        pag:"../padecimientos/congreso.htm"
    }, {
        nombre: "reservorio de parásitos",
        tit:"congreso",
        pag:"../padecimientos/congreso.htm"
    }, {
        nombre: "contractura",
        tit:"contractura",
        pag:"../padecimientos/contractura.htm"
    }, {
        nombre: "convulsiones",
        tit:"crisis convulsiva",
        pag:"../padecimientos/convulsiones.htm"
    }, {
        nombre: "coronarias",
        tit:"coronarias",
        pag:"../padecimientos/coronarias.htm"
    }, {
        nombre: "arterias coronarias",
        tit:"coronarias",
        pag:"../padecimientos/coronarias.htm"
    }, {
        nombre: "corrección hormonal",
        tit:"balance hormonal",
        pag:"../padecimientos/corrrec-hormonal.htm"
    }, {
        nombre: "balance hormonal",
        tit:"balance hormonal",
        pag:"../padecimientos/corrrec-hormonal.htm"
    }, {
        nombre: "corynebacter difteria",
        tit:"corynebacter difteria",
        pag:"../padecimientos/corynebac_difteria.htm"
    }, {
        nombre: "coxsackie",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    }, {
        nombre: "creatinina",
        tit:"creatinina",
        pag:"../padecimientos/creatinina.htm"
    }, {
        nombre: "criptococus",
        tit:"criptococus neoformans",
        pag:"../padecimientos/criptococcus_n.htm"
    }, {
        nombre: "criptococus neoformans",
        tit:"criptococus neoformans",
        pag:"../padecimientos/criptococcus_n.htm"
    }, {
        nombre: "crohn",
        tit:"síndrome de crohn",
        pag:"../padecimientos/crohn.htm"
    }, {
        nombre: "síndrome de crohn",
        tit:"síndrome de crohn",
        pag:"../padecimientos/crohn.htm"
    }, {
        nombre: "cromosoma 1",
        tit:"cromosoma 1",
        pag:"../padecimientos/cromo-1.htm"
    }, {
        nombre: "cromosoma uno",
        tit:"cromosoma 1",
        pag:"../padecimientos/cromo-1.htm"
    }, {
        nombre: "cromosoma 2",
        tit:"cromosoma 2",
        pag:"../padecimientos/cromo-2.htm"
    }, {
        nombre: "cromosoma 3",
        tit:"cromosoma 3",
        pag:"../padecimientos/cromo-3.htm"
    }, {
        nombre: "cromosoma 4",
        tit:"cromosoma 4",
        pag:"../padecimientos/cromo-4.htm"
    }, {
        nombre: "cromosoma 5",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    }, {
        nombre: "cromosoma 6",
        tit:"cromosoma 6",
        pag:"../padecimientos/cromo-6.htm"
    }, {
        nombre: "cromosoma 7",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    }, {
        nombre: "cromosoma 8",
        tit:"cromosoma 8",
        pag:"../padecimientos/cromo-8.htm"
    }, {
        nombre: "cromosoma 9",
        tit:"cromosoma 9",
        pag:"../padecimientos/cromo-9.htm"
    }, {
        nombre: "cromosoma 10",
        tit:"cromosoma 10",
        pag:"../padecimientos/cromo-10.htm"
    }, {
        nombre: "cromosoma 11",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    }, {
        nombre: "cromosoma 12",
        tit:"cromosoma 12",
        pag:"../padecimientos/cromo-12.htm"
    }, {
        nombre: "cromosoma 13",
        tit:"cromosoma 13",
        pag:"../padecimientos/cromo-13.htm"
    }, {
        nombre: "cromosoma 14",
        tit:"cromosoma 14",
        pag:"../padecimientos/cromo-14.htm"
    }, {
        nombre: "cromosoma 15",
        tit:"cromosoma 15",
        pag:"../padecimientos/cromo-15.htm"
    }, {
        nombre: "cromosoma 16",
        tit:"cromosoma 16",
        pag:"../padecimientos/cromo-16.htm"
    }, {
        nombre: "cromosoma 17",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    }, {
        nombre: "cromosoma 18",
        tit:"cromosoma 18",
        pag:"../padecimientos/cromo-18.htm"
    }, {
        nombre: "cromosoma 19",
        tit:"cromosoma 19",
        pag:"../padecimientos/cromo-19.htm"
    }, {
        nombre: "cromosoma 20",
        tit:"cromosoma 20",
        pag:"../padecimientos/cromo-20.htm"
    }, {
        nombre: "cromosoma x y",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    }, {
        nombre: "crueldad",
        tit:"crueldad",
        pag:"../padecimientos/crueldad.htm"
    }, {
        nombre: "criptocides",
        tit:"criptocides",
        pag:"../padecimientos/cryptocides_p.htm"
    }, {
        nombre: "cryptocides",
        tit:"criptocides",
        pag:"../padecimientos/cryptocides_p.htm"
    }, {
        nombre: "criptospora cayetanesis",
        tit:"criptospora cayetanesis",
        pag:"../padecimientos/cryptospora_cay.htm"
    }, {
        nombre: "culpa",
        tit:"culpa",
        pag:"../padecimientos/culpa.htm"
    }, {
        nombre: "david",
        tit:"david",
        pag:"../padecimientos/david.htm"
    }, {
        nombre: "caracter",
        tit:"david",
        pag:"../padecimientos/david.htm"
    }, {
        nombre: "debilidad muscular",
        tit:"debilidad muscular",
        pag:"../padecimientos/debilidad_m.htm"
    }, {
        nombre: "degenerativas",
        tit:"enfermedades degenerativas",
        pag:"../padecimientos/degenerativas.htm"
    }, {
        nombre: "enfermedades degenerativas",
        tit:"enfermedades degenerativas",
        pag:"../padecimientos/degenerativas.htm"
    }, {
        nombre: "demencia",
        tit:"demencia",
        pag:"../padecimientos/demencia.htm"
    }, {
        nombre: "dengue",
        tit:"dengue",
        pag:"../padecimientos/dengue.htm"
    }, {
        nombre: "dengue hemorrágico",
        tit:"dengue hemorrágico",
        pag:"../padecimientos/dengueh.htm"
    }, {
        nombre: "dentadura",
        tit:"enfermedades dentales",
        pag:"../padecimientos/dentadura.htm"
    }, {
        nombre: "enfermedades dentales",
        tit:"enfermedades dentales",
        pag:"../padecimientos/dentales.htm"
    }, {
        nombre: "depresión",
        tit:"depresión",
        pag:"../padecimientos/depresion.htm"
    }, {
        nombre: "dermatitis",
        tit:"dermatitis",
        pag:"../padecimientos/dermatitis.htm"
    }, {
        nombre: "derrame pleural",
        tit:"derrame pleural",
        pag:"../padecimientos/derrame-pleural.htm"
    }, {
        nombre: "desbloqueo energético",
        tit:"desbloqueo energético",
        pag:"../padecimientos/desbloqueo-ene.htm"
    }, {
        nombre: "diabetes melitus",
        tit:"diabetes melitus",
        pag:"../padecimientos/diabetes.htm"
    }, {
        nombre: "diabetes insípida",
        tit:"diabetes insípida",
        pag:"../padecimientos/diabetes_ins.htm"
    }, {
        nombre: "diabetes neonatal",
        tit:"diabetes melitus",
        pag:"../padecimientos/diabetes.htm"
    }, {
        nombre: "diarrea",
        tit:"diarrea",
        pag:"../padecimientos/diarrea.htm"
    }, {
        nombre: "difteria",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    }, {
        nombre: "bacilo difteroide",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    }, {
        nombre: "diplococo",
        tit:"diplococo",
        pag:"../padecimientos/diplococo.htm"
    }, {
        nombre: "discinesia",
        tit:"discinesia",
        pag:"../padecimientos/discinesia.htm"
    }, {
        nombre: "disfunción intelectual",
        tit:"disfunción intelectual",
        pag:"../padecimientos/disf_intelectual.htm"
    }, {
        nombre: "discapacidad intelectual",
        tit:"disfunción intelectual",
        pag:"../padecimientos/disf_intelectual.htm"
    }, {
        nombre: "dismenorrea",
        tit:"dismenorrea",
        pag:"../padecimientos/dismenorrea.htm"
    }, {
        nombre: "trastorno menstrual",
        tit:"dismenorrea",
        pag:"../padecimientos/dismenorrea.htm"
    }, {
        nombre: "distemper canino",
        tit:"distemper canino",
        pag:"../padecimientos/distemper_c.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"distensión abdominal",
        pag:"../padecimientos/distension_ab.htm"
    }, {
        nombre: "inflamación abdominal",
        tit:"distensión abdominal",
        pag:"../padecimientos/distension_ab.htm"
    }, {
        nombre: "divertículos",
        tit:"divertículos",
        pag:"../padecimientos/diverticulos.htm"
    }, {
        nombre: "sueño",
        tit:"sueño",
        pag:"../padecimientos/dormir.htm"
    }, {
        nombre: "dorsales",
        tit:"dorsales",
        pag:"../padecimientos/dorsales.htm"
    }, {
        nombre: "drogadicción",
        tit:"drogadicción",
        pag:"../padecimientos/drogadiccion.htm"
    }, {
        nombre: "disfunción del duodeno",
        tit:"disfunción del duodeno",
        pag:"../padecimientos/duodeno_disf.htm"
    }, {
        nombre: "disfunción duodenal",
        tit:"disfunción del duodeno",
        pag:"../padecimientos/duodeno_disf.htm"
    }, {
        nombre: "durán",
        tit:"durán",
        pag:"../padecimientos/duran.htm"
    }, {
        nombre: "embarazo",
        tit:"durán",
        pag:"../padecimientos/duran.htm"
    }, {
        nombre: "estreptococo fragilis",
        tit:"estreptococo fragilis",
        pag:"../padecimientos/e_fragilis.htm"
    }, {
        nombre: "estreptococo fragilis",
        tit:"estreptococo fragilis",
        pag:"../padecimientos/e_fragilis.htm"
    }, {
        nombre: "edema macular",
        tit:"edema macular",
        pag:"../padecimientos/e_macular.htm"
    }, {
        nombre: "embarazo molar",
        tit:"embarazo molar",
        pag:"../padecimientos/e_molar.htm"
    }, {
        nombre: "ébola virus",
        tit:"ébola virus",
        pag:"../padecimientos/ebola.htm"
    }, {
        nombre: "e coli",
        tit:"e coli",
        pag:"../padecimientos/e-coli.htm"
    }, {
        nombre: "reservorio e coli",
        tit:"reservorio e coli",
        pag:"../padecimientos/e-coli-r.htm"
    }, {
        nombre: "ecuador",
        tit:"ecuador",
        pag:"../padecimientos/ecuador.htm"
    }, {
        nombre: "edema",
        tit:"edema",
        pag:"../padecimientos/edema.htm"
    }, {
        nombre: "egoismo",
        tit:"egoismo",
        pag:"../padecimientos/egoismo.htm"
    }, {
        nombre: "eipsteinbar",
        tit:"eipsteinbar",
        pag:"../padecimientos/eipsteinbar.htm"
    }, {
        nombre: "elena",
        tit:"elena",
        pag:"../padecimientos/elena.htm"
    }, {
        nombre: "disfunción intestinal",
        tit:"elena",
        pag:"../padecimientos/elena.htm"
    }, {
        nombre: "encefalitis",
        tit:"encefalitis",
        pag:"../padecimientos/encefalitis.htm"
    }, {
        nombre: "endometriosis",
        tit:"endometriosis",
        pag:"../padecimientos/endometriosis.htm"
    }, {
        nombre: "enfado",
        tit:"enfado",
        pag:"../padecimientos/enfado.htm"
    }, {
        nombre: "enojo",
        tit:"enfado",
        pag:"../padecimientos/enfado.htm"
    }, {
        nombre: "enfisema pulmonar",
        tit:"enfisema",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "entamoeba",
        tit:"entamoeba",
        pag:"../padecimientos/entamoeba.htm"
    }, {
        nombre: "entérica",
        tit:"enterobacteria",
        pag:"../padecimientos/enterica.htm"
    }, {
        nombre: "enterobacteria",
        tit:"enterobacteria",
        pag:"../padecimientos/enterica.htm"
    }, {
        nombre: "enterobacter",
        tit:"enterobacter cloacae",
        pag:"../padecimientos/enterobacter_c.htm"
    }, {
        nombre: "enterobacter cloacae",
        tit:"enterobacter cloacae",
        pag:"../padecimientos/enterobacter_c.htm"
    }, {
        nombre: "enterobacter neumoniae",
        tit:"enterobacter neumoniae",
        pag:"../padecimientos/enterobacter_pn.htm"
    }, {
        nombre: "enterobacter pneumoniae",
        tit:"enterobacter neumoniae",
        pag:"../padecimientos/enterobacter_pn.htm"
    }, {
        nombre: "enterobios",
        tit:"enterobios vermicularis",
        pag:"../padecimientos/enterobios_v.htm"
    }, {
        nombre: "enterobios vermicularis",
        tit:"enterobios vermicularis",
        pag:"../padecimientos/enterobios_v.htm"
    }, {
        nombre: "enterococus",
        tit:"enterococus fecalis",
        pag:"../padecimientos/enterococus_f.htm"
    }, {
        nombre: "enterococus fecalis",
        tit:"enterococus fecalis",
        pag:"../padecimientos/enterococus_f.htm"
    }, {
        nombre: "enterovirus",
        tit:"enterovirus",
        pag:"../padecimientos/enterovirus.htm"
    }, {
        nombre: "enuresis nocturna",
        tit:"enuresis",
        pag:"../padecimientos/enuresis.htm"
    }, {
        nombre: "espondilitis",
        tit:"espondilitis",
        pag:"../padecimientos/espondilitis.htm"
    }, {
        nombre: "epiclavio",
        tit:"epiclavio",
        pag:"../padecimientos/epiclavio.htm"
    }, {
        nombre: "epilepsia",
        tit:"epilepsia",
        pag:"../padecimientos/epilepsia.htm"
    }, {
        nombre: "equilibrio energético",
        tit:"equilibrio energético",
        pag:"../padecimientos/equilibrio_ene.htm"
    }, {
        nombre: "equinococus",
        tit:"equinococus granulosus",
        pag:"../padecimientos/equinococus_g.htm"
    }, {
        nombre: "equinococosis",
        tit:"equinococus granulosus",
        pag:"../padecimientos/equinococus_g.htm"
    }, {
        nombre: "equinococus granulosus",
        tit:"equinococus granulosus",
        pag:"../padecimientos/equinococus_g.htm"
    }, {
        nombre: "disfunción eréctil",
        tit:"disfunción eréctil",
        pag:"../padecimientos/erectil.htm"
    }, {
        nombre: "escabiosis",
        tit:"escabiosis",
        pag:"../padecimientos/escabiasis.htm"
    }, {
        nombre: "sarna",
        tit:"escabiosis",
        pag:"../padecimientos/escabiasis.htm"
    }, {
        nombre: "esclerodermia",
        tit:"esclerodermia",
        pag:"../padecimientos/esclerodermia.htm"
    }, {
        nombre: "esclerosis lateral amiotrófica",
        tit:"esclerosis lateral",
        pag:"../padecimientos/esclerosis_la.htm"
    }, {
        nombre: "espina bífida",
        tit:"espina bífida",
        pag:"../padecimientos/espina_bifida.htm"
    }, {
        nombre: "espiroqueta",
        tit:"espiroqueta",
        pag:"../padecimientos/espiroqueta.htm"
    }, {
        nombre: "espolón",
        tit:"espolón",
        pag:"../padecimientos/espolon.htm"
    }, {
        nombre: "esquizofrenia",
        tit:"esquizofrenia",
        pag:"../padecimientos/esquizo.htm"
    }, {
        nombre: "estafilococo albus",
        tit:"estafilococo albus",
        pag:"../padecimientos/estafilococo_albus.htm"
    }, {
        nombre: "estafilococo a negativo",
        tit:"estafilococo a negativo",
        pag:"../padecimientos/estafilococo_aneg.htm"
    }, {
        nombre: "estafilococo aureus positivo",
        tit:"estafilococo aureus positivo",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    }, {
        nombre: "estafilococo capitis",
        tit:"estafilococo capitis",
        pag:"../padecimientos/estafilococo_cap.htm"
    }, {
        nombre: "disfunción estomacal",
        tit:"disfunción estomacal",
        pag:"../padecimientos/estomago_disf.htm"
    }, {
        nombre: "estreptococo a",
        tit:"estreptococo a",
        pag:"../padecimientos/estreptococo_a.htm"
    }, {
        nombre: "estreptococo b",
        tit:"estreptococo b",
        pag:"../padecimientos/estreptococo_b.htm"
    }, {
        nombre: "estreptococo beta",
        tit:"estreptococo beta",
        pag:"../padecimientos/estreptococo_beta.htm"
    }, {
        nombre: "estreptococo bovis",
        tit:"estreptococo bovis",
        pag:"../padecimientos/estreptococo_bovis.htm"
    }, {
        nombre: "estreptococo c",
        tit:"estreptococo c",
        pag:"../padecimientos/estreptococo_c.htm"
    }, {
        nombre: "estreptococo f",
        tit:"estreptococo f",
        pag:"../padecimientos/estreptococo_f.htm"
    }, {
        nombre: "estreptococo g",
        tit:"estreptococo g",
        pag:"../padecimientos/estreptococo_g.htm"
    }, {
        nombre: "estreptococo mutans",
        tit:"estreptococo mutans",
        pag:"../padecimientos/estreptococo_mutans.htm"
    }, {
        nombre: "estreptococo neumonia",
        tit:"estreptococo pneumoniae",
        pag:"../padecimientos/estreptococo_pn.htm"
    }, {
        nombre: "streptococcus pneumoniae",
        tit:"estreptococo pneumoniae",
        pag:"../padecimientos/estreptococo_pn.htm"
    }, {
        nombre: "estreptococo pyogenes",
        tit:"estreptococo pyogenes",
        pag:"../padecimientos/estrepto-pyogenes.htm"
    }, {
        nombre: "estrés",
        tit:"estrés",
        pag:"../padecimientos/estres.htm"
    }, {
        nombre: "eyaculación precoz",
        tit:"eyaculación precoz",
        pag:"../padecimientos/eyaculacion_p.htm"
    }, {
        nombre: "falso lupus",
        tit:"falso lupus",
        pag:"../padecimientos/f_lupus.htm"
    }, {
        nombre: "fiebre reumática",
        tit:"fiebre reumática",
        pag:"../padecimientos/f_reumatica.htm"
    }, {
        nombre: "fagos reservorio",
        tit:"fagos reservorio",
        pag:"../padecimientos/fagos_reserv.htm"
    }, {
        nombre: "fasiolopsis",
        tit:"fasiolopsis",
        pag:"../padecimientos/fasiolopsis_b.htm"
    }, {
        nombre: "fatiga crónica",
        tit:"fatiga crónica",
        pag:"../padecimientos/fatiga-cronica.htm"
    }, {
        nombre: "felicidad",
        tit:"felicidad",
        pag:"../padecimientos/felicidad.htm"
    }, {
        nombre: "fibromialgia",
        tit:"fibromialgia",
        pag:"../padecimientos/fibromialgia.htm"
    }, {
        nombre: "fibrosis quística",
        tit:"fibrosis quística",
        pag:"../padecimientos/fibrosis_q.htm"
    }, {
        nombre: "fiebre",
        tit:"fiebre",
        pag:"../padecimientos/fiebre.htm"
    }, {
        nombre: "fiebre amarilla",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    }, {
        nombre: "filaria",
        tit:"filaria",
        pag:"../padecimientos/filaria.htm"
    }, {
        nombre: "floccosum",
        tit:"floccosum",
        pag:"../padecimientos/floccosum.htm"
    }, {
        nombre: "fobias",
        tit:"fobias",
        pag:"../padecimientos/fobias.htm"
    }, {
        nombre: "miedos",
        tit:"miedos",
        pag:"../padecimientos/fobias.htm"
    }, {
        nombre: "fotofobia",
        tit:"fotofobia",
        pag:"../padecimientos/fotofobia.htm"
    }, {
        nombre: "fox",
        tit:"fox, reservorio",
        pag:"../padecimientos/fox.htm"
    }, {
        nombre: "fractura",
        tit:"fractura",
        pag:"../padecimientos/fractura.htm"
    }, {
        nombre: "frustración",
        tit:"frustración",
        pag:"../padecimientos/frustracion.htm"
    }, {
        nombre: "fuduric",
        tit:"fuduric",
        pag:"../padecimientos/fuduric.htm"
    }, {
        nombre: "galactorrea",
        tit:"galactorrea",
        pag:"../padecimientos/galactorrea.htm"
    }, {
        nombre: "gardenella",
        tit:"gardenerella vaginalis",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "gardenerella vaginalis",
        tit:"gardenerella vaginalis",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "gastritis",
        tit:"gastritis",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "gen",
        tit:"gen",
        pag:"../padecimientos/gen.htm"
    }, {
        nombre: "genu valgo",
        tit:"genu valgo",
        pag:"../padecimientos/genu-valgo.htm"
    }, {
        nombre: "gardia lamblia",
        tit:"gardia lamblia",
        pag:"../padecimientos/giardia.htm"
    }, {
        nombre: "giardia lamblia",
        tit:"gardia lamblia",
        pag:"../padecimientos/giardia.htm"
    }, {
        nombre: "giardiasis",
        tit:"gardia lamblia",
        pag:"../padecimientos/giardia.htm"
    }, {
        nombre: "glioblastoma",
        tit:"entamoeba histolítica",
        pag:"../padecimientos/entamoeba.htm"
    }, {
        nombre: "glomerulonefritis",
        tit:"glomérulo",
        pag:"../padecimientos/glomerulo.htm"
    }, {
        nombre: "gluteo aquiles",
        tit:"gluteo aquiles",
        pag:"../padecimientos/gluteo-aquiles.htm"
    }, {
        nombre: "Graves, enfermedad de",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "enfermedad de Graves",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "par goiz",
        tit:"par goiz",
        pag:"../padecimientos/goiz.htm"
    }, {
        nombre: "gripe aviar",
        tit:"gripe aviar",
        pag:"../padecimientos/gripe-aviar.htm"
    }, {
        nombre: "guillén barré",
        tit:"guillén barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "gula",
        tit:"gula",
        pag:"../padecimientos/gula.htm"
    }, {
        nombre: "h1n7",
        tit:"h1n7",
        pag:"../padecimientos/h1n7.htm"
    }, {
        nombre: "hemophilus",
        tit:"hemophilus influenza",
        pag:"../padecimientos/haemophilus_i.htm"
    }, {
        nombre: "hemophilus influenza",
        tit:"hemophilus influenza",
        pag:"../padecimientos/haemophilus_i.htm"
    }, {
        nombre: "hamer",
        tit:"hamer",
        pag:"../padecimientos/hamer.htm"
    }, {
        nombre: "hantavirus",
        tit:"hantavirus",
        pag:"../padecimientos/hantavirus.htm"
    }, {
        nombre: "helicobacter",
        tit:"helicobacter pylori",
        pag:"../padecimientos/helicobacter_p.htm"
    }, {
        nombre: "helicobacter pylori",
        tit:"helicobacter pylori",
        pag:"../padecimientos/helicobacter_p.htm"
    }, {
        nombre: "hemiplejia",
        tit:"hemiplejia",
        pag:"../padecimientos/hemiplejia.html"
    }, {
        nombre: "hemorragias",
        tit:"hemorragias",
        pag:"../padecimientos/hemorragias.htm"
    }, {
        nombre: "hemorroides",
        tit:"hemorroides",
        pag:"../padecimientos/hemorroides.htm"
    }, {
        nombre: "hepatitis",
        tit:"hepatitis",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "hepatitis c",
        tit:"hepatitis c",
        pag:"../padecimientos/hepatitis_c.htm"
    }, {
        nombre: "hepatitis m",
        tit:"hepatitis m",
        pag:"../padecimientos/hepatitis_m.htm"
    }, {
        nombre: "hepatitis n",
        tit:"hepatitis n",
        pag:"../padecimientos/hepatitis_n.htm"
    }, {
        nombre: "heridas",
        tit:"heridas",
        pag:"../padecimientos/heridas.htm"
    }, {
        nombre: "herpes",
        tit:"herpes",
        pag:"../padecimientos/herpes.htm"
    }, {
        nombre: "herpes 1",
        tit:"herpes 1",
        pag:"../padecimientos/herpes1.htm"
    }, {
        nombre: "herpes 2",
        tit:"herpes 2",
        pag:"../padecimientos/herpes2.htm"
    }, {
        nombre: "herpes 3",
        tit:"herpes 3",
        pag:"../padecimientos/herpes3.htm"
    }, {
        nombre: "herpes 4",
        tit:"herpes 4",
        pag:"../padecimientos/herpes4.htm"
    }, {
        nombre: "herpes 5",
        tit:"herpes 5",
        pag:"../padecimientos/herpes5.htm"
    }, {
        nombre: "herpes 6",
        tit:"herpes 6",
        pag:"../padecimientos/herpes6.htm"
    }, {
        nombre: "herpes 7",
        tit:"herpes 7",
        pag:"../padecimientos/herpes7.htm"
    }, {
        nombre: "herpes 8",
        tit:"herpes 8",
        pag:"../padecimientos/eipsteinbar.htm"
    }, {
        nombre: "herpes 9",
        tit:"herpes 9",
        pag:"../padecimientos/herpes9.htm"
    }, {
        nombre: "hernia hiatal",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "disfunción del hígado",
        tit:"disfunción del hígado",
        pag:"../padecimientos/higado_disf.htm"
    }, {
        nombre: "hígado occipital",
        tit:"hígado occipital",
        pag:"../padecimientos/higado-occi.htm"
    }, {
        nombre: "hiperuricemia",
        tit:"hiperuricemia",
        pag:"../padecimientos/hiperuricemia.htm"
    }, {
        nombre: "hipocalcemia",
        tit:"hipocalcemia",
        pag:"../padecimientos/hipocalcemia.htm"
    }, {
        nombre: "disfunción de la hipófisis",
        tit:"hipófisis, disfunción",
        pag:"../padecimientos/hipofisis_disf.htm"
    }, {
        nombre: "hipófisis",
        tit:"hipófisis, disfunción",
        pag:"../padecimientos/hipofisis_disf.htm"
    }, {
        nombre: "histoplasma",
        tit:"histoplasma c",
        pag:"../padecimientos/histoplasma_c.htm"
    }, {
        nombre: "hombro congelado",
        tit:"hombro congelado",
        pag:"../padecimientos/hombro-cong.htm"
    }, {
        nombre: "reservorio de hongos",
        tit:"reservorio de hongos",
        pag:"../padecimientos/hongos_r.htm"
    }, {
        nombre: "htlv1",
        tit:"htlv-1",
        pag:"../padecimientos/htlv1.htm"
    }, {
        nombre: "htlv-1",
        tit:"htlv-1",
        pag:"../padecimientos/htlv1.htm"
    }, {
        nombre: "htlv-2",
        tit:"htlv-2",
        pag:"../padecimientos/htlv2.htm"
    }, {
        nombre: "htlv-4",
        tit:"htlv-4",
        pag:"../padecimientos/htlv4.htm"
    }, {
        nombre: "hueco glúteo",
        tit:"hueco glúteo",
        pag:"../padecimientos/hueco-gluteo.htm"
    }, {
        nombre: "ileocecal",
        tit:"válvula ileocecal",
        pag:"../padecimientos/iliocecal.htm"
    }, {
        nombre: "válvula ileocecal",
        tit:"válvula ileocecal",
        pag:"../padecimientos/iliocecal.htm"
    }, {
        nombre: "impaciencia",
        tit:"impaciencia",
        pag:"../padecimientos/impaciencia.htm"
    }, {
        nombre: "inconsciencia",
        tit:"inconsciencia",
        pag:"../padecimientos/inconsciencia.htm"
    }, {
        nombre: "hijo no deseado",
        tit:"hijo de sexo no deseado",
        pag:"../padecimientos/indeseado.htm"
    }, {
        nombre: "infertilidad",
        tit:"infertilidad",
        pag:"../padecimientos/infertilidad.htm"
    }, {
        nombre: "influenza",
        tit:"influenza",
        pag:"../padecimientos/influenza.htm"
    }, {
        nombre: "inmunocompetencia",
        tit:"inmunocompetencia",
        pag:"../padecimientos/inmunocomp.htm"
    }, {
        nombre: "insomnio",
        tit:"insomnio",
        pag:"../padecimientos/insomnio.htm"
    }, {
        nombre: "intolerancia",
        tit:"intolerancia",
        pag:"../padecimientos/intolerancia.htm"
    }, {
        nombre: "intolerancias alimentarias",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "intoxicación crónica",
        tit:"intoxicación crónica",
        pag:"../padecimientos/intoxicacion_c.htm"
    }, {
        nombre: "ira",
        tit:"ira",
        pag:"../padecimientos/ira.htm"
    }, {
        nombre: "isaac",
        tit:"isaac",
        pag:"../padecimientos/isaac.htm"
    }, {
        nombre: "juana, libido",
        tit:"juana",
        pag:"../padecimientos/juana.htm"
    }, {
        nombre: "frigidez",
        tit:"juana",
        pag:"../padecimientos/juana.htm"
    }, {
        nombre: "juanete",
        tit:"juanete",
        pag:"../padecimientos/juanete.htm"
    }, {
        nombre: "klepsiella pneumoniae",
        tit:"klepsiella pneumoniae",
        pag:"../padecimientos/klepsiela_pn.htm"
    }, {
        nombre: "clepsiela neumonía",
        tit:"klepsiella pneumoniae",
        pag:"../padecimientos/klepsiela_pn.htm"
    }, {
        nombre: "clepsiela",
        tit:"klepsiella pneumoniae",
        pag:"../padecimientos/klepsiela_pn.htm"
    }, {
        nombre: "legionela",
        tit:"legionela",
        pag:"../padecimientos/legionela_pn.htm"
    }, {
        nombre: "legionella pneumophila",
        tit:"legionela",
        pag:"../padecimientos/legionela_pn.htm"
    }, {
        nombre: "leismania",
        tit:"leismania",
        pag:"../padecimientos/leismania.htm"
    }, {
        nombre: "leishmania",
        tit:"leismania",
        pag:"../padecimientos/leismania.htm"
    }, {
        nombre: "lenguaje",
        tit:"lenguaje",
        pag:"../padecimientos/lenguaje.htm"
    }, {
        nombre: "lenny",
        tit:"lenny",
        pag:"../padecimientos/leny.htm"
    }, {
        nombre: "lepra",
        tit:"lepra",
        pag:"../padecimientos/lepra.htm"
    }, {
        nombre: "leptospira",
        tit:"leptospira",
        pag:"../padecimientos/leptospira.htm"
    }, {
        nombre: "leptotrichia buccalis",
        tit:"leptotrichia buccalis",
        pag:"../padecimientos/leptotrichia_b.htm"
    }, {
        nombre: "lesiones",
        tit:"lesiones",
        pag:"../padecimientos/lesiones.htm"
    }, {
        nombre: "leucemias",
        tit:"leucemias",
        pag:"../padecimientos/leucemia.htm"
    }, {
        nombre: "levadura",
        tit:"levadura",
        pag:"../padecimientos/levadura.htm"
    }, {
        nombre: "listeria",
        tit:"listeria",
        pag:"../padecimientos/listeria_m.htm"
    }, {
        nombre: "listeria monocytogenes",
        tit:"listeria",
        pag:"../padecimientos/listeria_m.htm"
    }, {
        nombre: "logorrea",
        tit:"logorrea",
        pag:"../padecimientos/logorrea.htm"
    }, {
        nombre: "lolita",
        tit:"lolita",
        pag:"../padecimientos/lolita.htm"
    }, {
        nombre: "paperas",
        tit:"paperas",
        pag:"../padecimientos/lolita.htm"
    }, {
        nombre: "lucina",
        tit:"lucina",
        pag:"../padecimientos/lucina.htm"
    }, {
        nombre: "lucio",
        tit:"lucio",
        pag:"../padecimientos/lucio.htm"
    }, {
        nombre: "lumbalgia",
        tit:"lumbalgia",
        pag:"../padecimientos/lumbalgia.htm"
    }, {
        nombre: "lúmbago",
        tit:"lúmbago",
        pag:"../padecimientos/lumbalgia.htm"
    }, {
        nombre: "lupus",
        tit:"lupus",
        pag:"../padecimientos/lupus.htm"
    }, {
        nombre: "microbacterium bovis",
        tit:"microbacterium bovis",
        pag:"../padecimientos/m_bovis.htm"
    }, {
        nombre: "machin",
        tit:"machin",
        pag:"../padecimientos/machin.htm"
    }, {
        nombre: "magda",
        tit:"magda",
        pag:"../padecimientos/magda.htm"
    }, {
        nombre: "malassezia furfur",
        tit:"malassezia furfur",
        pag:"../padecimientos/malassezia_f.htm"
    }, {
        nombre: "malignidad",
        tit:"malignidad",
        pag:"../padecimientos/malignidad.htm"
    }, {
        nombre: "mareos",
        tit:"mareos",
        pag:"../padecimientos/mareos.htm"
    }, {
        nombre: "marimar",
        tit:"marimar",
        pag:"../padecimientos/marimar.htm"
    }, {
        nombre: "hipertensión arterial",
        tit:"marimar",
        pag:"../padecimientos/marimar.htm"
    }, {
        nombre: "mariquita, cromosoma",
        tit:"mariquita",
        pag:"../padecimientos/mariquita.htm"
    }, {
        nombre: "mariscos",
        tit:"mariscos",
        pag:"../padecimientos/mariscos.htm"
    }, {
        nombre: "mastitis",
        tit:"mastitis",
        pag:"../padecimientos/mastitis.htm"
    }, {
        nombre: "memoria",
        tit:"memoria",
        pag:"../padecimientos/memoria.htm"
    }, {
        nombre: "meningitis",
        tit:"meningitis",
        pag:"../padecimientos/meningitis.htm"
    }, {
        nombre: "menopausia",
        tit:"menopausia",
        pag:"../padecimientos/menopausia.htm"
    }, {
        nombre: "mente negativa",
        tit:"mente negativa",
        pag:"../padecimientos/mente_neg.htm"
    }, {
        nombre: "pensamiento negativo",
        tit:"mente negativa",
        pag:"../padecimientos/mente_neg.htm"
    }, {
        nombre: "pensamiento positivo",
        tit:"mente positiva",
        pag:"../padecimientos/mente_pos.htm"
    }, {
        nombre: "mente positiva",
        tit:"mente positiva",
        pag:"../padecimientos/mente_pos.htm"
    }, {
        nombre: "metales",
        tit:"intoxicación por metales",
        pag:"../padecimientos/metales.htm"
    }, {
        nombre: "intoxicación por metales",
        tit:"intoxicación por metales",
        pag:"../padecimientos/metales.htm"
    }, {
        nombre: "miceo intestinalis",
        tit:"miceo intestinalis",
        pag:"../padecimientos/miceo_in.htm"
    }, {
        nombre: "micosis",
        tit:"micosis",
        pag:"../padecimientos/micosis.htm"
    }, {
        nombre: "microbacterium avium",
        tit:"microbacterium avium",
        pag:"../padecimientos/microbac-avium.htm"
    }, {
        nombre: "microcefalia",
        tit:"microcefalia",
        pag:"../padecimientos/microcefalia.htm"
    }, {
        nombre: "microsporum",
        tit:"microsporum",
        pag:"../padecimientos/microsporum_c.htm"
    }, {
        nombre: "microsporum canis",
        tit:"microsporum",
        pag:"../padecimientos/microsporum_c.htm"
    }, {
        nombre: "miedo",
        tit:"miedo",
        pag:"../padecimientos/miedo.htm"
    }, {
        nombre: "miedo a la locura",
        tit:"miedo a la locura",
        pag:"../padecimientos/miedo_locura.htm"
    }, {
        nombre: "migraña",
        tit:"migraña",
        pag:"../padecimientos/migrana.htm"
    }, {
        nombre: "miomas",
        tit:"miomas",
        pag:"../padecimientos/miomas.htm"
    }, {
        nombre: "mitomanía",
        tit:"mitomanía",
        pag:"../padecimientos/mitomania.htm"
    }, {
        nombre: "moisés",
        tit:"moisés",
        pag:"../padecimientos/moises.htm"
    }, {
        nombre: "morganella",
        tit:"morganella tifo",
        pag:"../padecimientos/morganella_t.htm"
    }, {
        nombre: "morganella tifo",
        tit:"morganella tifo",
        pag:"../padecimientos/morganella_t.htm"
    }, {
        nombre: "moraxela",
        tit:"moraxella catarrhalis",
        pag:"../padecimientos/moxarella_c.htm"
    }, {
        nombre: "moraxella catarrhalis",
        tit:"moraxella catarrhalis",
        pag:"../padecimientos/moxarella_c.htm"
    },  {
        nombre: "mucor",
        tit:"mucor",
        pag:"../padecimientos/mucor.htm"
    }, {
        nombre: "mycoplasma hominis",
        tit:"mycoplasma hominis",
        pag:"../padecimientos/mycoplasma_h.htm"
    }, {
        nombre: "mycoplasma neumonia",
        tit:"mycoplasma pneumoniae",
        pag:"../padecimientos/mycoplasma_pn.htm"
    }, {
        nombre: "mycoplasma pneumoniae",
        tit:"mycoplasma pneumoniae",
        pag:"../padecimientos/mycoplasma_pn.htm"
    }, {
        nombre: "nanobacterium sanguinium",
        tit:"nanobacterium sanguinium",
        pag:"../padecimientos/nanobact_s.htm"
    }, {
        nombre: "nano bacterium",
        tit:"nanobacterium sanguinium",
        pag:"../padecimientos/nanobact_s.htm"
    }, {
        nombre: "negatividad, pesimismo",
        tit:"negatividad",
        pag:"../padecimientos/negatividad.htm"
    }, {
        nombre: "neisseria catarrhalis",
        tit:"neisseria catarrhalis",
        pag:"../padecimientos/neiseria_c.htm"
    }, {
        nombre: "neisseria gonorrea",
        tit:"neisseria gonorreae",
        pag:"../padecimientos/neiseria_g.htm"
    }, {
        nombre: "gonorrea",
        tit:"neisseria gonorreae",
        pag:"../padecimientos/neiseria_g.htm"
    }, {
        nombre: "gusano nematodo",
        tit:"gusano nematodo",
        pag:"../padecimientos/nematodo.htm"
    }, {
        nombre: "nocardia americana",
        tit:"nocardia americana",
        pag:"../padecimientos/neocardia_a.htm"
    }, {
        nombre: "neocardia americana",
        tit:"nocardia americana",
        pag:"../padecimientos/neocardia_a.htm"
    }, {
        nombre: "parálisis facial",
        tit:"parálisis facial",
        pag:"../padecimientos/nervio_fa.htm"
    }, {
        nombre: "nervio facial",
        tit:"parálisis facial",
        pag:"../padecimientos/nervio_fa.htm"
    }, {
        nombre: "nervio óptico",
        tit:"edema nervio óptico",
        pag:"../padecimientos/nervio_optico.htm"
    }, {
        nombre: "edema nervio óptico",
        tit:"edema nervio óptico",
        pag:"../padecimientos/nervio_optico.htm"
    }, {
        nombre: "nerviosismo",
        tit:"nerviosismo",
        pag:"../padecimientos/nerviosismo.htm"
    }, {
        nombre: "neumonía",
        tit:"neumonía",
        pag:"../padecimientos/neumonia.htm"
    }, {
        nombre: "neumococo",
        tit:"neumococo",
        pag:"../padecimientos/neumonia.htm"
    }, {
        nombre: "meningitis",
        tit:"neumococo",
        pag:"../padecimientos/neumonia.htm"
    }, {
        nombre: "problemas neurológicos",
        tit:"problemas neurológicos",
        pag:"../padecimientos/neurologicos.htm"
    }, {
        nombre: "neuropatía periférica",
        tit:"neuropatía periférica",
        pag:"../padecimientos/neuropatia_perif.htm"
    }, {
        nombre: "neurosis crítica",
        tit:"neurosis crítica",
        pag:"../padecimientos/neurosis.htm"
    }, {
        nombre: "histeria",
        tit:"histeria",
        pag:"../padecimientos/neurosis.htm"
    }, {
        nombre: "newcastle",
        tit:"newcastle virus",
        pag:"../padecimientos/newcastle.htm"
    }, {
        nombre: "virus del nilo",
        tit:"virus del nilo",
        pag:"../padecimientos/nilo.htm"
    },  {
        nombre: "norwalk",
        tit:"norwalk",
        pag:"../padecimientos/norkwalk.htm"
    }, {
        nombre: "norovirus",
        tit:"norwalk",
        pag:"../padecimientos/norkwalk.htm"
    }, {
        nombre: "nuca sacro",
        tit:"nuca sacro",
        pag:"../padecimientos/nuca-sacro.htm"
    }, {
        nombre: "nutricias",
        tit:"nutricias",
        pag:"../padecimientos/nutricias.htm"
    }, {
        nombre: "obesidad",
        tit:"obesidad",
        pag:"../padecimientos/obsidad.htm"
    }, {
        nombre: "sobrepeso",
        tit:"obesidad",
        pag:"../padecimientos/obsidad.htm"
    }, {
        nombre: "trastornos oculares",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "odio",
        tit:"odio",
        pag:"../padecimientos/odio.htm"
    }, {
        nombre: "olazo",
        tit:"olazo",
        pag:"../padecimientos/olazo.htm"
    }, {
        nombre: "obstrucción intestinal",
        tit:"olazo",
        pag:"../padecimientos/olazo.htm"
    }, {
        nombre: "estreñimiento",
        tit:"olazo, obstrución intestinal",
        pag:"../padecimientos/olazo.htm"
    }, {
        nombre: "oncocercosis",
        tit:"oncocercosis",
        pag:"../padecimientos/oncocercosis.htm"
    }, {
        nombre: "fiebre tifoidea",
        tit:"salmonela",
        pag:"../padecimientos/salmonella_t.htm"
    }, {
        nombre: "orf virus",
        tit:"orf virus",
        pag:"../padecimientos/orf.htm"
    }, {
        nombre: "orgullo",
        tit:"orgullo",
        pag:"../padecimientos/orgullo.htm"
    }, {
        nombre: "hepatitis b",
        tit:"hepatitis b",
        pag:"../padecimientos/orthohepadna.htm"
    }, {
        nombre: "orthohepadnavirus",
        tit:"hepatitis b",
        pag:"../padecimientos/orthohepadna.htm"
    }, {
        nombre: "otitis",
        tit:"otitis",
        pag:"../padecimientos/otitis.htm"
    }, {
        nombre: "ovario",
        tit:"disfunción ovárica",
        pag:"../padecimientos/ovario_disf.htm"
    }, {
        nombre: "disfunción ovárica",
        tit:"disfunción ovárica",
        pag:"../padecimientos/ovario_disf.htm"
    }, {
        nombre: "oxiuros",
        tit:"oxiuros",
        pag:"../padecimientos/oxiuro.htm"
    }, {
        nombre: "enterobius",
        tit:"enterobius v.",
        pag:"../padecimientos/oxiuro.htm"
    }, {
        nombre: "enterobius vermicularis",
        tit:"enterobius v.",
        pag:"../padecimientos/oxiuro.htm"
    }, {
        nombre: "punto alcalino",
        tit:"punto alcalino",
        pag:"../padecimientos/p_alcalino.htm"
    }, {
        nombre: "pitiriasis versicolor",
        tit:"pitiriasis versicolor",
        pag:"../padecimientos/p_versicolo.htm"
    }, {
        nombre: "psoriasis versicolor",
        tit:"pitirosporum versicolor",
        pag:"../padecimientos/p_versicolo.htm"
    }, {
        nombre: "pánico",
        tit:"pánico",
        pag:"../padecimientos/panico.htm"
    }, {
        nombre: "papiloma virus",
        tit:"papiloma virus",
        pag:"../padecimientos/papiloma.htm"
    }, {
        nombre: "parálisis",
        tit:"parálisis",
        pag:"../padecimientos/paralisis.htm"
    }, {
        nombre: "paramixovirus",
        tit:"paramixovirus",
        pag:"../padecimientos/paramixovirus.htm"
    }, {
        nombre: "disfunción parasimpática",
        tit:"disfunción parasimpática",
        pag:"../padecimientos/parasimpatico.htm"
    }, {
        nombre: "parasimpático",
        tit:"disfunción parasimpática",
        pag:"../padecimientos/parasimpatico.htm"
    }, {
        nombre: "parásitos intestinales",
        tit:"parásitos intestinales",
        pag:"../padecimientos/parasitos_i.htm"
    }, {
        nombre: "taenia",
        tit:"parásitos intestinales",
        pag:"../padecimientos/parasitos_i.htm"
    }, {
        nombre: "tenia",
        tit:"parásitos intestinales",
        pag:"../padecimientos/parasitos_i.htm"
    }, {
        nombre: "paratiroides",
        tit:"paratiroides, disfunción",
        pag:"../padecimientos/paratiroides_disf.htm"
    }, {
        nombre: "disfunción de paratiroides ",
        tit:"paratiroides, disfunción",
        pag:"../padecimientos/paratiroides_disf.htm"
    }, {
        nombre: "parkinson",
        tit:"parkinson",
        pag:"../padecimientos/parkinson.htm"
    }, {
        nombre: "parotiditis",
        tit:"parotiditis",
        pag:"../padecimientos/parotiditis.htm"
    }, {
        nombre: "paperas",
        tit:"paperas",
        pag:"../padecimientos/parotiditis.htm"
    }, {
        nombre: "parvovirus",
        tit:"parvovirus",
        pag:"../padecimientos/parvovirus.htm"
    }, {
        nombre: "pasciano",
        tit:"pasciano",
        pag:"../padecimientos/pasciano.htm"
    }, {
        nombre: "paciano",
        tit:"pasciano",
        pag:"../padecimientos/pasciano.htm"
    }, {
        nombre: "epicondilitis",
        tit:"pasciano",
        pag:"../padecimientos/pasciano.htm"
    }, {
        nombre: "codo de tenista",
        tit:"pasciano",
        pag:"../padecimientos/pasciano.htm"
    }, {
        nombre: "pasteurella",
        tit:"pasteurella",
        pag:"../padecimientos/pasteurela.htm"
    }, {
        nombre: "hepatitis a",
        tit:"pasteurella",
        pag:"../padecimientos/pasteurela.htm"
    }, {
        nombre: "embarazo ectópico",
        tit:"paty, embarazo ectópico",
        pag:"../padecimientos/paty.htm"
    }, {
        nombre: "embarazo extrauterino",
        tit:"paty, embarazo ectópico",
        pag:"../padecimientos/paty.htm"
    }, {
        nombre: "pélvico",
        tit:"pélvico",
        pag:"../padecimientos/pelvico.htm"
    }, {
        nombre: "problemas pélvicos",
        tit:"pélvico",
        pag:"../padecimientos/pelvico.htm"
    }, {
        nombre: "pereza",
        tit:"pereza",
        pag:"../padecimientos/pereza.htm"
    }, {
        nombre: "pericarditis",
        tit:"pericarditis",
        pag:"../padecimientos/pericarditis.htm"
    }, {
        nombre: "pezón gemelo",
        tit:"pezón gemelo",
        pag:"../padecimientos/pezon-gemelo.htm"
    }, {
        nombre: "pezón",
        tit:"pezón gemelo",
        pag:"../padecimientos/pezon-gemelo.htm"
    }, {
        nombre: "piedra negra",
        tit:"piedra negra",
        pag:"../padecimientos/piedra_nigra.htm"
    }, {
        nombre: "disfunción del píloro",
        tit:"píloro, disfunción",
        pag:"../padecimientos/piloro_disf.htm"
    }, {
        nombre: "plantas de los pies",
        tit:"plantas",
        pag:"../padecimientos/plantas.htm"
    }, {
        nombre: "plaquetas",
        tit:"plaquetas",
        pag:"../padecimientos/plaquetas.htm"
    }, {
        nombre: "plasmodium falciparum",
        tit:"plasmodium falciparum",
        pag:"../padecimientos/plasmodium_f.htm"
    }, {
        nombre: "plasmodium vivax",
        tit:"plasmodium vivax",
        pag:"../padecimientos/plasmodium_v.htm"
    }, {
        nombre: "pleuritis viral",
        tit:"pleuritis viral",
        pag:"../padecimientos/pleuritis_viral.htm"
    },{
        nombre: "pneumocystis carini",
        tit:"pneumocystis c.",
        pag:"../padecimientos/pneumocystis.htm"
    }, {
        nombre: "poliglobulia",
        tit:"marco antonio, poliglobulia",
        pag:"../padecimientos/poliglobulina.htm"
    }, {
        nombre: "eritrocitosis",
        tit:"eritrocitosis",
        pag:"../padecimientos/poliglobulina.htm"
    }, {
        nombre: "marco antonio",
        tit:"marco antonio, poliglobulia",
        pag:"../padecimientos/poliglobulina.htm"
    }, {
        nombre: "polyomavirus",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    }, {
        nombre: "polioma virus",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    }, {
        nombre: "poliomelitis",
        tit:"poliomielitis",
        pag:"../padecimientos/poliomielitis.htm"
    }, {
        nombre: "poliomielitis",
        tit:"poliomielitis",
        pag:"../padecimientos/poliomielitis.htm"
    }, {
        nombre: "prada",
        tit:"prada",
        pag:"../padecimientos/prada.htm"
    }, {
        nombre: "priones",
        tit:"priones",
        pag:"../padecimientos/priones.htm"
    }, {
        nombre: "prostatitis",
        tit:"prostatitis",
        pag:"../padecimientos/prostatitis.htm"
    }, {
        nombre: "proteus mirabilis",
        tit:"proteus mirabilis",
        pag:"../padecimientos/proteus_m.htm"
    }, {
        nombre: "proteus vulgaris",
        tit:"proteus vulgaris",
        pag:"../padecimientos/proteus_v.htm"
    }, {
        nombre: "pseudomona aeruginosa",
        tit:"pseudomona aeruginosa",
        pag:"../padecimientos/pseudomona_a.htm"
    }, {
        nombre: "psicosis",
        tit:"psicosis",
        pag:"../padecimientos/psicosis.htm"
    }, {
        nombre: "psoriasis",
        tit:"psoriasis",
        pag:"../padecimientos/psoriasis.htm"
    }, {
        nombre: "pterigión",
        tit:"pterigión",
        pag:"../padecimientos/pterigion.htm"
    }, {
        nombre: "quemaduras",
        tit:"quemaduras",
        pag:"../padecimientos/quemaduras.htm"
    }, {
        nombre: "quiste de agua",
        tit:"quiste de agua",
        pag:"../padecimientos/quiste-agua.htm"
    }, {
        nombre: "pólipos",
        tit:"pólipo, quiste de agua",
        pag:"../padecimientos/quiste-agua.htm"
    }, {
        nombre: "reservorio de hongos",
        tit:"reservorio de hongos",
        pag:"../padecimientos/r_hongos.htm"
    }, {
        nombre: "rabia",
        tit:"rabia virus",
        pag:"../padecimientos/rabia.htm"
    }, {
        nombre: "radiculopatía",
        tit:"radiculopatía",
        pag:"../padecimientos/radiculopatia.htm"
    }, {
        nombre: "pancreatitis",
        tit:"pancreatitis",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "ramsés",
        tit:"ramsés",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "rcp",
        tit:"reanimación cardiopulmonar",
        pag:"../padecimientos/rcp.htm"
    }, {
        nombre: "reanimación cardiopulmonar",
        tit:"reanimación cardiopulmonar",
        pag:"../padecimientos/rcp.htm"
    }, {
        nombre: "sv40 virus",
        tit:"sv40 virus",
        pag:"../padecimientos/rcv40.htm"
    }, {
        nombre: "virus del simio",
        tit:"sv40 virus",
        pag:"../padecimientos/rcv40.htm"
    }, {
        nombre: "trastornos renales",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    }, {
        nombre: "reovirus",
        tit:"reovirus",
        pag:"../padecimientos/reovirus.htm"
    }, {
        nombre: "garganta - glúteo",
        tit:"garganta - glúteo",
        pag:"../padecimientos/res_garg_gluteo.htm"
    }, {
        nombre: "glúteo - aquiles",
        tit:"glúteo - aquiles",
        pag:"../padecimientos/res_gluteo_aquiles.htm"
    }, {
        nombre: "reservorio herpes",
        tit:"reservorio herpes",
        pag:"../padecimientos/res_herpes.htm"
    }, {
        nombre: "reservorio hígado",
        tit:"reservorio hígado",
        pag:"../padecimientos/res_higado_occi.htm"
    }, {
        nombre: "hígado occipital",
        tit:"reservorio hígado",
        pag:"../padecimientos/res_higado_occi.htm"
    }, {
        nombre: "mastoides - bulbo",
        tit:"reservorio mastoides bulbo",
        pag:"../padecimientos/res_mast_bulbo.htm"
    }, {
        nombre: "reservorio mejillas",
        tit:"reservorio mejillas",
        pag:"../padecimientos/res_mejillas.htm"
    }, {
        nombre: "resentimiento",
        tit:"resentimiento",
        pag:"../padecimientos/resentimiento.htm"
    }, {
        nombre: "reservorio universal",
        tit:"reservorio universal",
        pag:"../padecimientos/reservorio_z.htm"
    }, {
        nombre: "reservorio",
        tit:"reservorio 1",
        pag:"../padecimientos/reservorio01.htm"
    }, {
        nombre: "reservorio de toxinas",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm"
    }, {
        nombre: "toxinas",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm"
    }, {
        nombre: "residuos",
        tit:"residuos",
        pag:"../padecimientos/residuos.htm"
    }, {
        nombre: "enfermedades respiratorias",
        tit:"enfermedades respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "rhinosporidium seberi",
        tit:"rhinosporidium seberi",
        pag:"../padecimientos/rhinosporidium.htm"
    }, {
        nombre: "rickettsia",
        tit:"rickettsia",
        pag:"../padecimientos/rickettsia.htm"
    }, {
        nombre: "roberta, falso embarazo",
        tit:"roberta, falso embarazo",
        pag:"../padecimientos/roberta.htm"
    }, {
        nombre: "rosácea púrpura",
        tit:"rosácea púrpura",
        pag:"../padecimientos/rosacea_p.htm"
    }, {
        nombre: "roseola",
        tit:"roseola",
        pag:"../padecimientos/roseola.htm"
    }, {
        nombre: "rotavirus",
        tit:"rotavirus",
        pag:"../padecimientos/rotavirus.htm"
    }, {
        nombre: "rubén",
        tit:"rubén",
        pag:"../padecimientos/ruben.htm"
    }, {
        nombre: "hipo",
        tit:"rubén",
        pag:"../padecimientos/ruben.htm"
    }, {
        nombre: "rubéola",
        tit:"rubéola",
        pag:"../padecimientos/rubeola.htm"
    }, {
        nombre: "sacro - bazo",
        tit:"sacro - bazo",
        pag:"../padecimientos/sacro-bazo.htm"
    }, {
        nombre: "lujuria",
        tit:"sade, lujuria",
        pag:"../padecimientos/sade.htm"
    }, {
        nombre: "sade",
        tit:"sade, lujuria",
        pag:"../padecimientos/sade.htm"
    }, {
        nombre: "ninfomanía",
        tit:"sade, lujuria",
        pag:"../padecimientos/sade.htm"
    }, {
        nombre: "saturnino",
        tit:"saturnino, edipo",
        pag:"../padecimientos/saturnino.htm"
    }, {
        nombre: "complejo de edipo",
        tit:"saturnino, edipo",
        pag:"../padecimientos/saturnino.htm"
    }, {
        nombre: "salmonella",
        tit:"salmonella",
        pag:"../padecimientos/salmonella_t.htm"
    }, {
        nombre: "salmonelosis",
        tit:"salmonella",
        pag:"../padecimientos/salmonella_t.htm"
    }, {
        nombre: "tifoidea",
        tit:"salmonella",
        pag:"../padecimientos/salmonella_t.htm"
    }, {
        nombre: "sangrado vaginal",
        tit:"sangrado vaginal",
        pag:"../padecimientos/sangrado-vaginal.htm"
    }, {
        nombre: "sarampión",
        tit:"sarampión",
        pag:"../padecimientos/sarampion.htm"
    }, {
        nombre: "sarcoma de kaposi",
        tit:"sarcoma de kaposi",
        pag:"../padecimientos/sarcoma.htm"
    }, {
        nombre: "sinusitis nasal",
        tit:"sinusitis nasal",
        pag:"../padecimientos/sinusitis_n.htm"
    }, {
        nombre: "congestión nasal",
        tit:"sinusitis nasal",
        pag:"../padecimientos/sinusitis_n.htm"
    }, {
        nombre: "schistosoma",
        tit:"schistosoma",
        pag:"../padecimientos/schistosoma.htm"
    }, {
        nombre: "picor de los nadadores",
        tit:"schistosoma",
        pag:"../padecimientos/schistosoma.htm"
    }, {
        nombre: "tercer ojo",
        tit:"percepción, tercer ojo",
        pag:"../padecimientos/sensibilidad.htm"
    }, {
        nombre: "sensibilidad",
        tit:"percepción, tercer ojo",
        pag:"../padecimientos/sensibilidad.htm"
    }, {
        nombre: "sepsis",
        tit:"sepsis",
        pag:"../padecimientos/sepsis.htm"
    }, {
        nombre: "septicemia",
        tit:"sepsis",
        pag:"../padecimientos/sepsis.htm"
    }, {
        nombre: "serratias",
        tit:"serratias",
        pag:"../padecimientos/serratias.htm"
    }, {
        nombre: "trastornos sexuales",
        tit:"trastornos sexuales",
        pag:"../padecimientos/sexuales.htm"
    }, {
        nombre: "transmisión sexual",
        tit:"trastornos sexuales",
        pag:"../padecimientos/sexuales.htm"
    }, {
        nombre: "shigella",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    }, {
        nombre: "sigela",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    }, {
        nombre: "sida",
        tit:"VIH sida",
        pag:"../padecimientos/sida.htm"
    }, {
        nombre: "sífilis",
        tit:"sífilis",
        pag:"../padecimientos/sifilis.htm"
    }, {
        nombre: "sinusitis frontal",
        tit:"sinusitis frontal",
        pag:"../padecimientos/sinusitis_f.htm"
    }, {
        nombre: "reservorio sofía",
        tit:"sofía",
        pag:"../padecimientos/sofia.htm"
    }, {
        nombre: "cinturón pancreático",
        tit:"sofía",
        pag:"../padecimientos/sofia.htm"
    }, {
        nombre: "síndrome de sjogren",
        tit:"síndrome de sjogren",
        pag:"../padecimientos/sjogren.htm"
    }, {
        nombre: "sistema nervioso autónomo",
        tit:"sistema nervioso autónomo",
        pag:"../padecimientos/sna.htm"
    },{
        nombre: "sistema nervioso simpático",
        tit:"sistema nervioso simpático",
        pag:"../padecimientos/sns_disf.htm"
    }, {
        nombre: "sistema nervioso disfunción",
        tit:"sistema nervioso simpático",
        pag:"../padecimientos/sns_disf.htm"
    }, {
        nombre: "solitaria",
        tit:"solitaria",
        pag:"../padecimientos/solitaria.html"
    }, {
        nombre: "teniasis",
        tit:"solitaria",
        pag:"../padecimientos/solitaria.html"
    }, {
        nombre: "sor, inspiración",
        tit:"sor, inspiración",
        pag:"../padecimientos/sor.htm"
    }, {
        nombre: "sordera",
        tit:"sordera",
        pag:"../padecimientos/sordera.htm"
    }, {
        nombre: "stachybotrys",
        tit:"stachybotrys",
        pag:"../padecimientos/stachybotrys.htm"
    }, {
        nombre: "subdiafragmas",
        tit:"subdiafragmas",
        pag:"../padecimientos/subdiafragmas.htm"
    }, {
        nombre: "reservorio de cisticerco",
        tit:"subdiafragmas",
        pag:"../padecimientos/subdiafragmas.htm"
    }, {
        nombre: "suelo pélvico",
        tit:"suelo pélvico",
        pag:"../padecimientos/suelo_pelvico.htm"
    }, {
        nombre: "síndrome hemolítico",
        tit:"síndrome hemolítico",
        pag:"../padecimientos/suermolitico.htm"
    }, {
        nombre: "síndrome urémico hemolítico",
        tit:"síndrome hemolítico",
        pag:"../padecimientos/suermolitico.htm"
    }, {
        nombre: "síndrome urémico",
        tit:"síndrome hemolítico",
        pag:"../padecimientos/suermolitico.htm"
    }, {
        nombre: "factor surfactante",
        tit:"factor surfactante",
        pag:"../padecimientos/sufactante.htm"
    }, {
        nombre: "sufrimiento fetal",
        tit:"sufrimiento fetal",
        pag:"../padecimientos/sufrimiento_f.htm"
    }, {
        nombre: "disfunción suprarrenal",
        tit:"disfunción suprarrenal",
        pag:"../padecimientos/suprarrenal_disf.htm"
    }, {
        nombre: "trastornos mentales",
        tit:"trastornos mentales",
        pag:"../padecimientos/t_mentales.htm"
    }, {
        nombre: "hiperactividad",
        tit:"trastorno de déficit de atención",
        pag:"../padecimientos/tdah.htm"
    }, {
        nombre: "trastorno de déficit de atención",
        tit:"trastorno de déficit de atención",
        pag:"../padecimientos/tdah.htm"
    }, {
        nombre: "tenosinovitis",
        tit:"tenosinovitis",
        pag:"../padecimientos/tenosinovitis.htm"
    }, {
        nombre: "tétanos",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    }, {
        nombre: "tifo exantemático",
        tit:"tifo exantemático",
        pag:"../padecimientos/tifo_exa.htm"
    }, {
        nombre: "timo",
        tit:"timo, disfunción",
        pag:"../padecimientos/timo_disf.htm"
    }, {
        nombre: "disfunción del timo",
        tit:"timo, disfunción",
        pag:"../padecimientos/timo_disf.htm"
    }, {
        nombre: "tiña mentagrophytes",
        tit:"tiña mentagrophytes",
        pag:"../padecimientos/tina_mentog.htm"
    }, {
        nombre: "tinnitus",
        tit:"tinnitus",
        pag:"../padecimientos/tinitus.htm"
    }, {
        nombre: "acúfenos",
        tit:"tinnitus",
        pag:"../padecimientos/tinitus.htm"
    }, {
        nombre: "tiroides",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "disfunción de la tiroides",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "toc",
        tit:"trastorno obsesivo compulsivo",
        pag:"../padecimientos/toc.htm"
    },{
        nombre: "deseo obsesivo",
        tit:"trastorno obsesivo compulsivo",
        pag:"../padecimientos/toc.htm"
    }, {
        nombre: "trastorno obsesivo compulsivo",
        tit:"trastorno obsesivo compulsivo",
        pag:"../padecimientos/toc.htm"
    }, {
        nombre: "síndrome de torch",
        tit:"síndrome de torch",
        pag:"../padecimientos/torch.htm"
    }, {
        nombre: "tos",
        tit:"tos",
        pag:"../padecimientos/tos.htm"
    }, {
        nombre: "toxinas en el riñón",
        tit:"toxinas en el riñón",
        pag:"../padecimientos/toxinas_rinon.htm"
    }, {
        nombre: "toxoides",
        tit:"toxoides",
        pag:"../padecimientos/toxoides.htm"
    }, {
        nombre: "toxoplasmosis",
        tit:"toxoplasmosis",
        pag:"../padecimientos/toxoplasmosis.htm"
    }, {
        nombre: "trypanosoma cruzi",
        tit:"trypanosoma cruzi",
        pag:"../padecimientos/trepanozoma_c.htm"
    }, {
        nombre: "treponema bucalis",
        tit:"treponema bucalis",
        pag:"../padecimientos/treponema_b.htm"
    }, {
        nombre: "treponema",
        tit:"treponema bucalis",
        pag:"../padecimientos/treponema_b.htm"
    }, {
        nombre: "tricomonas",
        tit:"tricomonas",
        pag:"../padecimientos/tricomonas.htm"
    }, {
        nombre: "trini",
        tit:"trini, comp. elecktra",
        pag:"../padecimientos/trini.htm"
    }, {
        nombre: "complejo de electra",
        tit:"trini, comp. elecktra",
        pag:"../padecimientos/trini.htm"
    }, {
        nombre: "trypanosoma brucei",
        tit:"trypanosoma brucei",
        pag:"../padecimientos/tripanozoma_b.htm"
    }, {
        nombre: "trypanosoma gambiense",
        tit:"trypanosoma gambiense",
        pag:"../padecimientos/tripanozoma_g.htm"
    }, {
        nombre: "trypanosoma gambi",
        tit:"trypanosoma gambiense",
        pag:"../padecimientos/tripanozoma_g.htm"
    }, {
        nombre: "trypanosoma palidum",
        tit:"trypanosoma palidum",
        pag:"../padecimientos/tripanozoma_p.htm"
    }, {
        nombre: "treponema pallidum",
        tit:"trypanosoma palidum",
        pag:"../padecimientos/tripanozoma_p.htm"
    }, {
        nombre: "triquinosis",
        tit:"triquinosis",
        pag:"../padecimientos/triquinosis.htm"
    }, {
        nombre: "kado, tristeza",
        tit:"kado, tristeza",
        pag:"../padecimientos/tristeza.htm"
    }, {
        nombre: "trichophyton",
        tit:"trichophyton",
        pag:"../padecimientos/trychophyton.htm"
    }, {
        nombre: "trichophyton rubrum",
        tit:"trichophyton r.",
        pag:"../padecimientos/trychophyton_r.htm"
    }, {
        nombre: "tuberculosis",
        tit:"tuberculosis",
        pag:"../padecimientos/tuberculosis.htm"
    }, {
        nombre: "tuberculosis 2",
        tit:"tuberculosis 2",
        pag:"../padecimientos/tuberculosis2.htm"
    },{
        nombre: "ureaplasma urealiticum",
        tit:"ureaplasma urealiticum",
        pag:"../padecimientos/ureaplasma_u.htm"
    }, {
        nombre: "uretritis",
        tit:"uretritis",
        pag:"../padecimientos/uretritis.htm"
    }, {
        nombre: "desinflamar útero",
        tit:"útero",
        pag:"../padecimientos/utero-desinf.htm"
    }, {
        nombre: "sincicial respiratorio",
        tit:"sincicial respiratorio",
        pag:"../padecimientos/v_sincicial.htm"
    }, {
        nombre: "vaccinia",
        tit:"vaccinia",
        pag:"../padecimientos/vaccinia.htm"
    }, {
        nombre: "vaginitis",
        tit:"vaginitis",
        pag:"../padecimientos/vaginitis.htm"
    }, {
        nombre: "valor",
        tit:"valor",
        pag:"../padecimientos/valor.htm"
    }, {
        nombre: "válvula mitral",
        tit:"válvula mitral",
        pag:"../padecimientos/valv-mitral.htm"
    }, {
        nombre: "mitral",
        tit:"válvula mitral",
        pag:"../padecimientos/valv-mitral.htm"
    }, {
        nombre: "válvula iliocecal",
        tit:"válvula iliocecal",
        pag:"../padecimientos/valv-occi.htm"
    }, {
        nombre: "iliocecal prominencia occipital",
        tit:"iliocecal prominencia occipital",
        pag:"../padecimientos/valv-occi.htm"
    }, {
        nombre: "ileocecal prominencia occipital",
        tit:"iliocecal prominencia occipital",
        pag:"../padecimientos/valv-occi.htm"
    }, {
        nombre: "varicela",
        tit:"varicela",
        pag:"../padecimientos/varicela.htm"
    }, {
        nombre: "varices",
        tit:"varices",
        pag:"../padecimientos/varices.htm"
    }, {
        nombre: "flebitis",
        tit:"varices",
        pag:"../padecimientos/varices.htm"
    }, {
        nombre: "varices esofágicas",
        tit:"varices esofágicas",
        pag:"../padecimientos/varices_e.htm"
    }, {
        nombre: "vellonella",
        tit:"vellonella",
        pag:"../padecimientos/vellonela.htm"
    }, {
        nombre: "envenenamiento",
        tit:"envenenamiento",
        pag:"../padecimientos/venenos.htm"
    }, {
        nombre: "venenos",
        tit:"envenenamiento",
        pag:"../padecimientos/venenos.htm"
    }, {
        nombre: "venganza",
        tit:"venganza",
        pag:"../padecimientos/venganza.htm"
    }, {
        nombre: "verruga común",
        tit:"verruga",
        pag:"../padecimientos/verruga.htm"
    }, {
        nombre: "vesícula",
        tit:"vesícula",
        pag:"../padecimientos/vesicula.htm"
    }, {
        nombre: "vibro parahemo",
        tit:"vibro parahemoliticus",
        pag:"../padecimientos/vibro-parahemo.htm"
    }, {
        nombre: "vibro parahemoliticus",
        tit:"vibro parahemoliticus",
        pag:"../padecimientos/vibro-parahemo.htm"
    }, {
        nombre: "vih-1",
        tit:"vih-1",
        pag:"../padecimientos/vih1.htm"
    }, {
        nombre: "vih-2",
        tit:"vih-2",
        pag:"../padecimientos/vih2.htm"
    }, {
        nombre: "vih-4",
        tit:"vih-4",
        pag:"../padecimientos/vih4.htm"
    }, {
        nombre: "violación",
        tit:"violación",
        pag:"../padecimientos/violacion.htm"
    }, {
        nombre: "viruela",
        tit:"viruela",
        pag:"../padecimientos/viruela.htm"
    }, {
        nombre: "virus vk",
        tit:"virus vk",
        pag:"../padecimientos/virus_vk.htm"
    }, {
        nombre: "virus viajero",
        tit:"virus viajero",
        pag:"../padecimientos/virus-viajero.htm"
    }, {
        nombre: "vitiligio",
        tit:"vitiligio",
        pag:"../padecimientos/vitiligo.htm"
    }, {
        nombre: "vitíligo",
        tit:"vitiligio",
        pag:"../padecimientos/vitiligo.htm"
    }, {
        nombre: "vivian",
        tit:"vivian",
        pag:"../padecimientos/vivian.htm"
    }, {
        nombre: "integridad anatómica",
        tit:"vivian",
        pag:"../padecimientos/vivian.htm"
    }, {
        nombre: "wallstreet, avaricia",
        tit:"wallstreet, avaricia",
        pag:"../padecimientos/wallstreet.htm"
    }, {
        nombre: "xcaret, inmoral",
        tit:"xcaret, integgridad moral",
        pag:"../padecimientos/xcaret.htm"
    }, {
        nombre: "xmrv virus",
        tit:"xmrv virus",
        pag:"../padecimientos/xmrv-virus.htm"
    }, {
        nombre: "yersinia intestinalis",
        tit:"yersinia intestinalis",
        pag:"../padecimientos/yersinia_i.htm"
    }, {
        nombre: "yersinia pestis",
        tit:"yersinia pestis",
        pag:"../padecimientos/yersinia_p.htm"
    }, {
        nombre: "yersinia neumonía",
        tit:"yersinia pneumoniae",
        pag:"../padecimientos/yersinia_pn.htm"
    }, {
        nombre: "peste neumónica",
        tit:"yersinia pneumoniae",
        pag:"../padecimientos/yersinia_pn.htm"
    }, {
        nombre: "yolanda",
        tit:"yolanda",
        pag:"../padecimientos/yolanda.htm"
    }, {
        nombre: "reservorio de coronavirus",
        tit:"yolanda",
        pag:"../padecimientos/yolanda.htm"
    }, {
        nombre: "chicungunya",
        tit:"chicunguny",
        pag:"../padecimientos/chikungunya.htm"
    }, {
        nombre: "zika chicungunya",
        tit:"zika",
        pag:"../padecimientos/zika.htm"
    }, {
        nombre: "aborto",
        tit:"brusela abortus",
        pag:"../padecimientos/brusela_a.htm"
    }, {
        nombre: "acalasia",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "acromegalia",
        tit:"vitiligo",
        pag:"../padecimientos/vitiligo.htm"
    }, {
        nombre: "adenomegalia",
        tit:"epiclavio",
        pag:"../padecimientos/epiclavio.htm"
    }, {
        nombre: "addison",
        tit:"disfunción renal",
        pag:"../padecimientos/suprarrenal_disf.htm"
    }, {
        nombre: "enfermedad de addison",
        tit:"disfunción renal",
        pag:"../padecimientos/suprarrenal_disf.htm"
    }, {
        nombre: "mal de addison",
        tit:"disfunción renal",
        pag:"../padecimientos/suprarrenal_disf.htm"
    }, {
        nombre: "aneurisma",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "apoplejía",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "azoospermia",
        tit:"trastornos sexuales",
        pag:"../padecimientos/sexuales.htm"
    }, {
        nombre: "bulimia",
        tit:"anorexia",
        pag:"../padecimientos/anorexia.htm"
    }, {
        nombre: "bursitis",
        tit:"actinomices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "cardiopatía congénita",
        tit:"estafilococo aureus +",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    }, {
        nombre: "caries dentales",
        tit:"trastornos bucales",
        pag:"../padecimientos/dentales.htm"
    }, {
        nombre: "caries dentales",
        tit:"estreptococo mutans",
        pag:"../padecimientos/estreptococo_mutans.htm"
    }, {
        nombre: "cefalea",
        tit:"cefalea",
        pag:"../padecimientos/cefalea.htm"
    }, {
        nombre: "ceguera",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "ceguera de los ríos",
        tit:"oncocercosis",
        pag:"../padecimientos/oncocercosis.htm"
    }, {
        nombre: "célula madre",
        tit:"par gen",
        pag:"../padecimientos/gen.htm"
    }, {
        nombre: "células madre",
        tit:"par gen",
        pag:"../padecimientos/gen.htm"
    }, {
        nombre: "ciática",
        tit:"ciatalgia",
        pag:"../padecimientos/ciatalgia.htm"
    }, {
        nombre: "cirrosis hepática",
        tit:"cirrosis",
        pag:"../padecimientos/cirrosis.htm"
    }, {
        nombre: "cistitis",
        tit:"cistitis",
        pag:"../padecimientos/renales.htm"
    }, {
        nombre: "colesterol",
        tit:"cardiovasculares, trastornos",
        pag:"../padecimientos/cardiovasculares.htm"
    }, {
        nombre: "cólico nefrítico",
        tit:"machín",
        pag:"../padecimientos/machin.htm"
    }, {
        nombre: "conjuntivitis",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "crisis curativa",
        tit:"equilibrio energético",
        pag:"../padecimientos/equilibrio_ene.htm"
    }, {
        nombre: "cuadriplejia",
        tit:"estreptococo f",
        pag:"../padecimientos/estreptococo_f.htm"
    }, {
        nombre: "daño cerebral",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "desprendimiento de retina",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "disentería",
        tit:"disentería",
        pag:"../padecimientos/disenteria.htm"
    }, {
        nombre: "disfagia",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "dislipemia",
        tit:"dislipemia",
        pag:"../padecimientos/cardiovasculares.htm"
    }, {
        nombre: "displasia",
        tit:"antineoplásico",
        pag:"../padecimientos/antineoplasico.htm"
    }, {
        nombre: "diverticulosis",
        tit:"divertículos",
        pag:"../padecimientos/diverticulos.htm"
    }, {
        nombre: "diverticulitis",
        tit:"divertículos",
        pag:"../padecimientos/diverticulos.htm"
    }, {
        nombre: "elefantiasis",
        tit:"filaria",
        pag:"../padecimientos/filaria.htm"
    }, {
        nombre: "endometritis",
        tit:"mycoplasma hominis",
        pag:"../padecimientos/mycoplasma_h.htm"
    }, {
        nombre: "chagas",
        tit:"trepanozoma cruzi",
        pag:"../padecimientos/trepanozoma_c.htm"
    }, {
        nombre: "enfermedad de chagas",
        tit:"trepanozoma cruzi",
        pag:"../padecimientos/trepanozoma_c.htm"
    }, {
        nombre: "enfermedad de lyme",
        tit:"borrelia",
        pag:"../padecimientos/borrelia.htm"
    }, {
        nombre: "lyme",
        tit:"borrelia",
        pag:"../padecimientos/borrelia.htm"
    }, {
        nombre: "arañazo de gato",
        tit:"bartonela",
        pag:"../padecimientos/bartonella.htm"
    }, {
        nombre: "sueño",
        tit:"tripanozoma g.",
        pag:"../padecimientos/tripanozoma_g.htm"
    }, {
        nombre: "sentido de equilibrio",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "enteritis necrótica",
        tit:"clorstridium p.",
        pag:"../padecimientos/clorstridium_p.htm"
    }, {
        nombre: "gastroenteritis",
        tit:"clorstridium p.",
        pag:"../padecimientos/clorstridium_p.htm"
    }, {
        nombre: "epoc",
        tit:"enfisema pulmonar",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "enfermedad pulmonar obstructiva crónica",
        tit:"enfisema pulmonar",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "epididimitis",
        tit:"ureaplasma urealíticum",
        pag:"../padecimientos/ureaplasma_u.htm"
    }, {
        nombre: "epistaxis",
        tit:"klebsiela pn.",
        pag:"../padecimientos/klepsiela_pn.htm"
    }, {
        nombre: "epistaxis",
        tit:"clamidia pn.",
        pag:"../padecimientos/clamidia_pn.htm"
    }, {
        nombre: "eructo",
        tit:"estómago, disfunción",
        pag:"../padecimientos/estomago_disf.htm"
    }, {
        nombre: "disfunción del esófago",
        tit:"estómago, disfunción",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "esófago",
        tit:"estómago, disfunción",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "esterilidad",
        tit:"infertilidad",
        pag:"../padecimientos/infertilidad.htm"
    },{
        nombre: "esquitosomiasis",
        tit:"schistosoma",
        pag:"../padecimientos/schistosoma.htm"
    },{
        nombre: "schistosomiasis",
        tit:"schistosoma",
        pag:"../padecimientos/schistosoma.htm"
    },{
        nombre: "faringitis",
        tit:"enf. resperatorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "estenosis",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "estenosis",
        tit:"válvula mitral",
        pag:"../padecimientos/valv-mitral.htm"
    }, {
        nombre: "estenosis uretral",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    }, {
        nombre: "fiebre de las trincheras",
        tit:"bartonella",
        pag:"../padecimientos/bartonella.htm"
    }, {
        nombre: "fiebre de malta",
        tit:"brusela abortus",
        pag:"../padecimientos/brusela_a.htm"
    }, {
        nombre: "fiebre de oroya",
        tit:"bartonella",
        pag:"../padecimientos/bartonella.htm"
    }, {
        nombre: "filariasis",
        tit:"filaria",
        pag:"../padecimientos/filaria.htm"
    }, {
        nombre: "flujo vaginal",
        tit:"vaginitis",
        pag:"../padecimientos/vaginitis.htm"
    }, {
        nombre: "gastroenteritis",
        tit:"trastornos digestivos",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "gangrena",
        tit:"enf. degenerativas",
        pag:"../padecimientos/degenerativas.htm"
    }, {
        nombre: "gingivitis",
        tit:"trastornos dentales",
        pag:"../padecimientos/dentales.htm"
    }, {
        nombre: "glaucoma",
        tit:"orf virus",
        pag:"../padecimientos/orf.htm"
    }, {
        nombre: "gota",
        tit:"hiperuricemia",
        pag:"../padecimientos/hiperuricemia.htm"
    }, {
        nombre: "halitosis",
        tit:"trastornos dentales",
        pag:"../padecimientos/dentales.htm"
    }, {
        nombre: "hematuria",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "covid",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "covid 19",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "covid-19",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "hepatomegalia",
        tit:"trastornos hepáticos",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "herpes zóster",
        tit:"herpes 1",
        pag:"../padecimientos/herpes1.htm"
    }, {
        nombre: "hiporexia",
        tit:"histoplasma capsulatum",
        pag:"../padecimientos/histoplasma_c.htm"
    }, {
        nombre: "hipotiroidismo",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "hidrocele",
        tit:"quiste de agua",
        pag:"../padecimientos/quiste-agua.htm"
    }, {
        nombre: "ictericia",
        tit:"trastornos hepáticos",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "infarto al miocardio",
        tit:"coronarias",
        pag:"../padecimientos/coronarias.htm"
    }, {
        nombre: "inmunodeficiencia",
        tit:"timo, disfunción",
        pag:"../padecimientos/timo_disf.htm"
    }, {
        nombre: "incontinencia urinaria",
        tit:"estreptococo g",
        pag:"../padecimientos/estreptococo_g.htm"
    }, {
        nombre: "insuficiencia cardíaca",
        tit:"cardiovasculares, enf.",
        pag:"../padecimientos/cardiovasculares.htm"
    }, {
        nombre: "insuficiencia renal",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    }, {
        nombre: "insuficiencia hepática",
        tit:"trastornos hepáticos",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "laringitis",
        tit:"enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "linfadenitis",
        tit:"epiclavio",
        pag:"../padecimientos/epiclavio.htm"
    }, {
        nombre: "linfomas",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "listeriosis",
        tit:"listeria m.",
        pag:"../padecimientos/listeria_m.htm"
    }, {
        nombre: "loasis",
        tit:"filaria",
        pag:"../padecimientos/filaria.htm"
    }, {
        nombre: "malaria",
        tit:"plasmodium f",
        pag:"../padecimientos/plasmodium_f.htm"
    }, {
        nombre: "melatonina",
        tit:"vitiligo",
        pag:"../padecimientos/vitiligo.htm"
    }, {
        nombre: "melanoma",
        tit:"vitiligo",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "metástasis",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "mioma",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "mononucleosis",
        tit:"eipsteinbar virus",
        pag:"../padecimientos/eipsteinbar.htm"
    }, {
        nombre: "necrosis",
        tit:"necrosis",
        pag:"../padecimientos/necrosis.htm"
    }, {
        nombre: "necrosis de cabeza de fémur",
        tit:"bordetella",
        pag:"../padecimientos/bordetella.htm"
    }, {
        nombre: "necrosis",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    }, {
        nombre: "neoplasia",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    }, {
        nombre: "neumonitis",
        tit:"enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "neuralgia del trigémino",
        tit:"leny",
        pag:"../padecimientos/leny.htm"
    }, {
        nombre: "trigémino",
        tit:"leny",
        pag:"../padecimientos/leny.htm"
    }, {
        nombre: "neuritis",
        tit:"Guillen Barre",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "nicturia",
        tit:"estreptococo c",
        pag:"../padecimientos/estreptococo_g.htm"
    }, {
        nombre: "onicomádesis",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    }, {
        nombre: "onicomádesis",
        tit:"trychopyton",
        pag:"../padecimientos/trychophyton.htm"
    }, {
        nombre: "onicomicosis",
        tit:"trychopyton",
        pag:"../padecimientos/trychophyton.htm"
    }, {
        nombre: "orzuelo",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm#orzuelo"
    }, {
        nombre: "osteomielitis",
        tit:"vellonela",
        pag:"../padecimientos/vellonela.htm"
    }, {
        nombre: "ovario poliquístico",
        tit:"carmen, disf. ovárica",
        pag:"../padecimientos/carmen.htm"
    }, {
        nombre: "parálisis ascendente",
        tit:"Guillen Barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "parestesias",
        tit:"tripanozoma g.",
        pag:"../padecimientos/tripanozoma_g.htm"
    }, {
        nombre: "parto prematuro",
        tit:"gardenerella v.",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "parto prematuro",
        tit:"síndrome de Torch",
        pag:"../padecimientos/torch.htm"
    }, {
        nombre: "periodontitis",
        tit:"vellonela",
        pag:"../padecimientos/vellonela.htm"
    }, {
        nombre: "perrilla",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "peste bubónica",
        tit:"yersinia pestis",
        pag:"../padecimientos/yersinia_p.htm"
    }, {
        nombre: "picadura de insecto",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {
        nombre: "pielonefritis",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    }, {
        nombre: "pie de atleta",
        tit:"trychophyton",
        pag:"../padecimientos/trychophyton.htm"
    }, {
        nombre: "pie plano",
        tit:"espolon",
        pag:"../padecimientos/espolon.htm"
    }, {
        nombre: "piojos",
        tit:"escabiosis",
        pag:"../padecimientos/escabiasis.htm"
    }, {
        nombre: "polifagia",
        tit:"gula",
        pag:"../padecimientos/gula.htm"
    }, {
        nombre: "quimioterapia",
        tit:"magda",
        pag:"../padecimientos/magda.htm"
    }, {
        nombre: "quiste ovárico",
        tit:"norkwalk",
        pag:"../padecimientos/norkwalk.htm"
    }, {
        nombre: "recctorragia",
        tit:"enterobacter c.",
        pag:"../padecimientos/enterobacter_c.htm"
    }, {
        nombre: "reflujo gastroesofágico",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "reumatismo",
        tit:"artritis",
        pag:"../padecimientos/artritis.htm"
    }, {
        nombre: "retinopatía diabética",
        tit:"edema macular",
        pag:"../padecimientos/e_macular.htm"
    }, {
        nombre: "rinitis",
        tit:"sinusitis nasal",
        pag:"../padecimientos/sinusitis_n.htm"
    }, {
        nombre: "ronquidos",
        tit:"apnea",
        pag:"../padecimientos/apnea.htm"
    }, {
        nombre: "sexuales",
        tit:"trastornos sexuales",
        pag:"../padecimientos/sexuales.htm"
    }, {
        nombre: "síndrome de cushing",
        tit:"antrax",
        pag:"../padecimientos/antrax.htm"
    }, {
        nombre: "síndrome de down",
        tit:"cromosoma 21",
        pag:"../padecimientos/cromo-21.htm"
    }, {
        nombre: "down, síndrome",
        tit:"cromosoma 21",
        pag:"../padecimientos/cromo-21.htm"
    }, {
        nombre: "síndrome de raynaud",
        tit:"síndrome de raynaud",
        pag:"../padecimientos/sns_disf.htm"
    }, {
        nombre: "sistema inmunitario",
        tit:"angeles, sist. inmune",
        pag:"../padecimientos/angeles.htm"
    }, {
        nombre: "tabaquismo",
        tit:"enfisema",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "talasemia",
        tit:"lucio",
        pag:"../padecimientos/lucio.htm"
    }, {
        nombre: "tiña",
        tit:"micosis",
        pag:"../padecimientos/micosis.htm"
    }, {
        nombre: "toxocariasis",
        tit:"toxacara, acaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "túnel carpiano",
        tit:"tunel carpiano",
        pag:"../padecimientos/carpiano.htm"
    }, {
        nombre: "úlcera gástrica",
        tit:"helicobacter pilori",
        pag:"../padecimientos/helicobacter_p.htm"
    }, {
        nombre: "vaginismo",
        tit:"trastornos sexuales",
        pag:"../padecimientos/sexuales.htm"
    }, {
        nombre: "verruga genital",
        tit:"papiloma virus",
        pag:"../padecimientos/papiloma.htm"
    }, {
        nombre: "vértigo de meniere",
        tit:"toxoplasmosis",
        pag:"../padecimientos/toxoplasmosis.htm"
    }, {
        nombre: "vesiculitis seminal",
        tit:"prostatitis",
        pag:"../padecimientos/prostatitis.htm"
    }, {
        nombre: "vómito",
        tit:"trastornos digestivos",
        pag:"../padecimientos/gastritis.htm"
    },                                 {
        nombre: "encefalitis",
        tit:"aerobacter aerogenus",
        pag:"../padecimientos/a_aerogenus.htm"
    }, {
        nombre: "encefalitis",
        tit:"criptococo n.",
        pag:"../padecimientos/criptococcus_n.htm"
    }, {
        nombre: "encefalitis",
        tit:"Guillén barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "encefalitis",
        tit:"epilepsia",
        pag:"../padecimientos/epilepsia.htm"
    }, {
        nombre: "encefalitis",
        tit:"listeria",
        pag:"../padecimientos/listeria_m.htm"
    }, {
        nombre: "encefalitis",
        tit:"migraña",
        pag:"../padecimientos/migrana.htm"
    }, {
        nombre: "encefalitis",
        tit:"virus del nilo",
        pag:"../padecimientos/nilo.htm"
    }, {
        nombre: "encefalitis",
        tit:"roseola",
        pag:"../padecimientos/roseola.htm"
    }, {
        nombre: "constipación",
        tit:"adenovirus 36",
        pag:"../padecimientos/adenovirus36.htm"
    }, {
        nombre: "encefalitis",
        tit:"sarampión",
        pag:"../padecimientos/sarampion.htm"
    }, {
        nombre: "encefalitis",
        tit:"trepanozoma c.",
        pag:"../padecimientos/trepanozoma_c.htm"
    }, {
        nombre: "conciencia",
        tit:"primeros auxilios",
        pag:"emerg.htm"
    }, {
        nombre: "conciencia",
        tit:"aerobacter aerógenus",
        pag:"../padecimientos/a_aerogenus.htm"
    }, {                                   
        nombre: "conciencia",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {                                   
        nombre: "conciencia",
        tit:"asfixia",
        pag:"../padecimientos/asfixia.htm"
    }, {                                   
        nombre: "conciencia",
        tit:"convulsiones",
        pag:"../padecimientos/convulsiones.htm"
    }, {                                   
        nombre: "conciencia",
        tit:"envenenamiento",
        pag:"../padecimientos/venenos.htm"
    }, {
        nombre: "septicemia",
        tit:"aerobacter aerógenus",
        pag:"../padecimientos/a_aerogenus.htm"
    },  {
        nombre: "septicemia",
        tit:"estreptococo agalactiae",
        pag:"../padecimientos/agalactiae.htm"
    },  {
        nombre: "septicemia",
        tit:"estafilococo aureus +",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    }, {
        nombre: "septicemia",
        tit:"salmonella t.",
        pag:"../padecimientos/salmonella_t.htm"
    }, {
        nombre: "septicemia",
        tit:"yersinia pestis",
        pag:"../padecimientos/yersinia_p.htm"
    }, {
        nombre: "fascitis",
        tit:"aerobacter aerógenus",
        pag:"../padecimientos/a_aerogenus.htm"
    }, {
        nombre: "absceso",
        tit:"aerobacter aerógenus",
        pag:"../padecimientos/a_aerogenus.htm"
    }, {
        nombre: "absceso",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "absceso",
        tit:"actinomices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "absceso",
        tit:"alzheimer",
        pag:"../padecimientos/alzheimer.htm"
    }, {
        nombre: "absceso",
        tit:"amibiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "absceso",
        tit:"antrax",
        pag:"../padecimientos/antrax.htm"
    }, {
        nombre: "absceso",
        tit:"cancer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    },  {
        nombre: "absceso",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "absceso",
        tit:"trastornos hepáticos",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "absceso",
        tit:"listeria",
        pag:"../padecimientos/listeria_m.htm"
    }, {
        nombre: "absceso",
        tit:"miomas",
        pag:"../padecimientos/miomas.htm"
    }, {
        nombre: "absceso",
        tit:"pleuritis viral",
        pag:"../padecimientos/pleuritis_viral.htm"
    }, {
        nombre: "absceso",
        tit:"residuos",
        pag:"../padecimientos/residuos.htm"
    }, {
        nombre: "absceso",
        tit:"sepsis",
        pag:"../padecimientos/sepsis.htm"
    },  {
        nombre: "sentido de equilibrio",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "equilibrio",
        tit:"chapingo",
        pag:"../padecimientos/chapingo.htm"
    }, {
        nombre: "equilibrio",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    }, {
        nombre: "equilibrio",
        tit:"citomegalovirus",
        pag:"../padecimientos/dormir.htm"
    }, {
        nombre: "vértigo",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "vértigo",
        tit:"clyptospora",
        pag:"../padecimientos/clyptospora_cay.htm"
    }, {
        nombre: "vértigo",
        tit:"filaria",
        pag:"../padecimientos/filaria.htm"
    }, {
        nombre: "vértigo",
        tit:"mareos",
        pag:"../padecimientos/mareos.htm"
    }, {
        nombre: "vértigo",
        tit:"polioma",
        pag:"../padecimientos/polioma.htm"
    }, {
        nombre: "dislexia",
        tit:"lenguaje",
        pag:"../padecimientos/lenguaje.htm"
    }, {
        nombre: "dislexia",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    }, {
        nombre: "dislexia",
        tit:"clyptospora c.",
        pag:"../padecimientos/clyptospora_cay.htm"
    }, {
        nombre: "dislexia",
        tit:"poliomielitis",
        pag:"../padecimientos/poliomielitis.htm"
    },  {
        nombre: "tartamudeo",
        tit:"abraham",
        pag:"../padecimientos/abraham.htm"
    },  {
        nombre: "tartamudeo",
        tit:"dislexia",
        pag:"../padecimientos/lenguaje.htm"
    }, {
        nombre: "disentería",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "disentería",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "disentería",
        tit:"entamoeba",
        pag:"../padecimientos/entamoeba.htm"
    }, {
        nombre: "disentería",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"alergia alimentaria",
        pag:"../padecimientos/alergia_a.htm"
    },  {
        nombre: "distensión abdominal",
        tit:"bacilo paratiyphico",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"clamidia tucans",
        pag:"../padecimientos/clamidia_tu.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"colitis",
        pag:"../padecimientos/colitis.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"síndrome de crohn",
        pag:"../padecimientos/crohn.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    },  {
        nombre: "distensión abdominal",
        tit:"diverticulosis",
        pag:"../padecimientos/diverticulos.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"equinococcus f.",
        pag:"../padecimientos/equinococcus_f.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"trastornos digestivos",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "distensión abdominal",
        tit:"intoxicación crónica",
        pag:"../padecimientos/intoxicacion_c.htm"
    }, {
        nombre: "ictericia",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "ictericia",
        tit:"bebesia",
        pag:"../padecimientos/babesia.htm"
    }, {
        nombre: "ictericia",
        tit:"clamidia t.",
        pag:"../padecimientos/clamidia_t.htm"
    }, {
        nombre: "ictericia",
        tit:"cromosoma 20",
        pag:"../padecimientos/cromo-20.htm"
    }, {
        nombre: "ictericia",
        tit:"equinococus",
        pag:"../padecimientos/equinococus_g.htm"
    }, {
        nombre: "ictericia",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    }, {
        nombre: "ictericia",
        tit:"ictericia",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "ictericia",
        tit:"disfunción del hígado",
        pag:"../padecimientos/higado_disf.htm"
    }, {
        nombre: "ictericia",
        tit:"plasmodium vivax",
        pag:"../padecimientos/plasmodium_v.htm"
    }, {
        nombre: "ictericia",
        tit:"ramsés",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "sudoración",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "sudoración",
        tit:"coronarias",
        pag:"../padecimientos/coronarias.htm"
    }, {
        nombre: "sudoración",
        tit:"dengue hemorrágico",
        pag:"../padecimientos/dengueh.htm"
    }, {
        nombre: "sudoración",
        tit:"diabetes",
        pag:"../padecimientos/diabetes.htm"
    }, {
        nombre: "sudoración",
        tit:"leucemias",
        pag:"../padecimientos/leucemia.htm"
    }, {
        nombre: "sudoración",
        tit:"menopausia",
        pag:"../padecimientos/menopausia.htm"
    }, {
        nombre: "vómito",
        tit:"ácaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "vómito",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "vómito",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {
        nombre: "vómito",
        tit:"anisakis",
        pag:"../padecimientos/anisakis.htm"
    }, {
        nombre: "vómito",
        tit:"anorexia",
        pag:"../padecimientos/anorexia.htm"
    }, {
        nombre: "vómito",
        tit:"arsénico",
        pag:"../padecimientos/arsenico.htm"
    }, {
        nombre: "vómito",
        tit:"astrovirus",
        pag:"../padecimientos/astrovirus.htm"
    }, {
        nombre: "vómito",
        tit:"bacilo paratifi",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "vómito",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    }, {
        nombre: "vómito",
        tit:"campylobacter j.",
        pag:"../padecimientos/campylobacter_j.htm"
    }, {
        nombre: "vómito",
        tit:"chaco",
        pag:"../padecimientos/chaco.htm"
    }, {
        nombre: "vómito",
        tit:"choque tóxico",
        pag:"../padecimientos/choque-toxico.htm"
    },  {
        nombre: "vómito",
        tit:"cólera",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "vómito",
        tit:"colitis",
        pag:"../padecimientos/colitis.htm"
    }, {
        nombre: "vómito",
        tit:"creatinina",
        pag:"../padecimientos/creatinina.htm"
    }, {
        nombre: "vómito",
        tit:"disfunción duodenal",
        pag:"../padecimientos/duodeno_disf.htm"
    }, {
        nombre: "vómito",
        tit:"e coli",
        pag:"../padecimientos/e-coli.htm"
    },  {
        nombre: "vómito",
        tit:"embarazo molar",
        pag:"../padecimientos/e_molar.htm"
    }, {
        nombre: "vómito",
        tit:"ébola virus",
        pag:"../padecimientos/ebola.htm"
    },  {
        nombre: "vómito",
        tit:"entamoeba",
        pag:"../padecimientos/entamoeba.htm"
    }, {
        nombre: "vómito",
        tit:"enterococus f",
        pag:"../padecimientos/enterococus_f.htm"
    }, {
        nombre: "vómito",
        tit:"trastornos digestivos",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "vómito",
        tit:"hanta virus",
        pag:"../padecimientos/hantavirus.htm"
    }, {
        nombre: "vómito",
        tit:"hemorragias",
        pag:"../padecimientos/hemorragias.htm"
    }, {
        nombre: "vómito",
        tit:"trastornos hepáticos",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "vómito",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "vómito",
        tit:"lesimania",
        pag:"../padecimientos/leismania.htm"
    }, {
        nombre: "vómito",
        tit:"leptospira",
        pag:"../padecimientos/leptospira.htm"
    }, {
        nombre: "vómito",
        tit:"lupus",
        pag:"../padecimientos/lupus.htm"
    }, {
        nombre: "vómito",
        tit:"meningitis",
        pag:"../padecimientos/meningitis.htm"
    }, {
        nombre: "vómito",
        tit:"migraña",
        pag:"../padecimientos/migrana.htm"
    }, {
        nombre: "vómito",
        tit:"norkwalk",
        pag:"../padecimientos/norkwalk.htm"
    }, {
        nombre: "vómito",
        tit:"disfunción del píloro",
        pag:"../padecimientos/piloro_disf.htm"
    }, {
        nombre: "vómito",
        tit:"plasmodium vivax",
        pag:"../padecimientos/plasmodium_v.htm"
    }, {
        nombre: "vómito",
        tit:"ramses",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "vómito",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    }, {
        nombre: "vómito",
        tit:"stachybotrys",
        pag:"../padecimientos/stachybotrys.htm"
    }, {
        nombre: "vómito",
        tit:"envenenamiento",
        pag:"../padecimientos/venenos.htm"
    }, {
        nombre: "vómito",
        tit:"zika",
        pag:"../padecimientos/zika.htm"
    }, {
        nombre: "alergia",
        tit:"toxacara, ácaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "alergia",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {
        nombre: "alergia",
        tit:"angeles",
        pag:"../padecimientos/angeles.htm"
    }, {
        nombre: "alergia",
        tit:"dermatitis",
        pag:"../padecimientos/dermatitis.htm"
    }, {
        nombre: "alergia",
        tit:"adema",
        pag:"../padecimientos/edema.htm"
    }, {
        nombre: "alergia",
        tit:"trastornos gástricos",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "alergia",
        tit:"herpes 6",
        pag:"../padecimientos/herpes6.htm"
    }, {
        nombre: "alergia",
        tit:"sistema inmune",
        pag:"../padecimientos/inmunocomp.htm"
    }, {
        nombre: "alergia",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "alergia",
        tit:"intoxicación crónica",
        pag:"../padecimientos/intoxicacion_c.htm"
    },  {
        nombre: "alergia",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    }, {
        nombre: "tos",
        tit:"cáncer de garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    }, {
        nombre: "tos",
        tit:"derrame pleural",
        pag:"../padecimientos/derrame-pleural.htm"
    }, {
        nombre: "tos",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    }, {
        nombre: "tos",
        tit:"fibrosis quística",
        pag:"../padecimientos/fibrosis_q.htm"
    }, {
        nombre: "tos",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "tos",
        tit:"hanta virus",
        pag:"../padecimientos/hantavirus.htm"
    }, {
        nombre: "tos",
        tit:"histoplasma c.",
        pag:"../padecimientos/histoplasma_c.htm"
    }, {
        nombre: "tos",
        tit:"leptospira",
        pag:"../padecimientos/leptospira.htm"
    }, {
        nombre: "tos",
        tit:"pleuritis viral",
        pag:"../padecimientos/pleuritis_viral.htm"
    },  {
        nombre: "tos",
        tit:"pneumocystis",
        pag:"../padecimientos/pneumocystis.htm"
    },  {
        nombre: "tos",
        tit:"yersinia pestis",
        pag:"../padecimientos/yersinia_p.htm"
    }, {
        nombre: "urticaria",
        tit:"toxacara, ácaro",
        pag:"../padecimientos/acaro.htm"
    }, {
        nombre: "urticaria",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    }, {
        nombre: "urticaria",
        tit:"anisakis",
        pag:"../padecimientos/anisakis.htm"
    }, {
        nombre: "urticaria",
        tit:"Endolimax nana",
        pag:"../padecimientos/endolimax_nana.htm"
    }, {
        nombre: "endolimax nana",
        tit:"Endolimax nana",
        pag:"../padecimientos/endolimax_nana.htm"
    }, {
        nombre: "acidez y oxidación",
        tit:"acidez y oxidación",
        pag:"../padecimientos/acidez.htm"
    }, {
        nombre: "neoplasia",
        tit:"calcificación lumbar",
        pag:"../padecimientos/cal_lumbar.htm"
    }, {
        nombre: "neoplasia",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "neoplasia",
        tit:"hamer",
        pag:"../padecimientos/hamer.htm"
    }, {
        nombre: "neoplasia",
        tit:"lepra",
        pag:"../padecimientos/lepra.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"anorexia",
        pag:"../padecimientos/anorexia.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"actinomices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"cáncer de garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"cirrosis hepática",
        pag:"../padecimientos/cirrosis.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"colitis",
        pag:"../padecimientos/colitis.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"creatinina",
        pag:"../padecimientos/creatinina.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"cromosoma 22",
        pag:"../padecimientos/cromo-22.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"cromosoma 9",
        pag:"../padecimientos/cromo-9.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"disfunción del hígado",
        pag:"../padecimientos/higado_disf.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"leucemias",
        pag:"../padecimientos/leucemia.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"disfunción suprarrenal",
        pag:"../padecimientos/suprarrenal_disf.htm"
    }, {
        nombre: "pérdida de peso",
        tit:"pneumocystis",
        pag:"../padecimientos/pneumocystis.htm"
    }, {
        nombre: "adenoides",
        tit:"plaquetas",
        pag:"../padecimientos/plaquetas.htm"
    },  {
        nombre: "adenoides",
        tit:"adenovirus",
        pag:"../padecimientos/adenovirus.htm"
    },  {
        nombre: "catarro",
        tit:"adenovirus",
        pag:"../padecimientos/adenovirus.htm"
    }, {
        nombre: "catarro",
        tit:"adenovirus 36",
        pag:"../padecimientos/adenovirus36.htm"
    }, {
        nombre: "catarro",
        tit:"clamidia ps.",
        pag:"../padecimientos/clamidia_ps.htm"
    }, {
        nombre: "catarro",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "catarro",
        tit:"influenza",
        pag:"../padecimientos/influenza.htm"
    }, {
        nombre: "catarro",
        tit:"parvovirus",
        pag:"../padecimientos/parvovirus.htm"
    }, {
        nombre: "catarro",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    }, {
        nombre: "resfriado",
        tit:"adenovirus",
        pag:"../padecimientos/adenovirus.htm"
    }, {
        nombre: "corioamnionitis",
        tit:"estreptococo agalactiae",
        pag:"../padecimientos/agalactiae.htm"
    }, {
        nombre: "parto",
        tit:"cándida a.",
        pag:"../padecimientos/candida_a.htm"
    }, {
        nombre: "parto",
        tit:"clamidia pn.",
        pag:"../padecimientos/clamidia_pn.htm"
    }, {
        nombre: "parto",
        tit:"epilepsia",
        pag:"../padecimientos/epilepsia.htm"
    }, {
        nombre: "parto",
        tit:"gardenerella v.",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "parto",
        tit:"htlv 1",
        pag:"../padecimientos/htlv1.htm"
    }, {
        nombre: "parto",
        tit:"mycoplasma h.",
        pag:"../padecimientos/mycoplasma_h.htm"
    }, {
        nombre: "parto",
        tit:"orthohepadna virus",
        pag:"../padecimientos/orthohepadna.htm"
    }, {
        nombre: "parto",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    }, {
        nombre: "parto",
        tit:"torch",
        pag:"../padecimientos/torch.htm"
    }, {
        nombre: "gestación",
        tit:"cándida a.",
        pag:"../padecimientos/candida_a.htm"
    }, {
        nombre: "gestación",
        tit:"clamidia pn.",
        pag:"../padecimientos/clamidia_pn.htm"
    }, {
        nombre: "gestación",
        tit:"epilepsia",
        pag:"../padecimientos/epilepsia.htm"
    }, {
        nombre: "gestación",
        tit:"gardenerella v.",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "gestación",
        tit:"htlv 1",
        pag:"../padecimientos/htlv1.htm"
    }, {
        nombre: "gestación",
        tit:"mycoplasma h.",
        pag:"../padecimientos/mycoplasma_h.htm"
    }, {
        nombre: "gestación",
        tit:"orthohepadna virus",
        pag:"../padecimientos/orthohepadna.htm"
    }, {
        nombre: "gestación",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    }, {
        nombre: "gestación",
        tit:"torch",
        pag:"../padecimientos/torch.htm"
    },  {
        nombre: "sarcoma",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "sarcoma",
        tit:"orthohepadna virus",
        pag:"../padecimientos/orthohepadna.htm"
    }, {
        nombre: "sarcoma",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    }, {
        nombre: "sarcoma",
        tit:"VIH sida",
        pag:"../padecimientos/sida.htm"
    }, {
        nombre: "reflujo",
        tit:"cáncer garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    }, {
        nombre: "reflujo",
        tit:"esclerodermia",
        pag:"../padecimientos/esclerodermia.htm"
    }, {
        nombre: "reflujo",
        tit:"gastritis",
        pag:"../padecimientos/gastritis2.htm"
    }, {
        nombre: "diarrea",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    }, {
        nombre: "diarrea",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "diarrea",
        tit:"arsenicosis",
        pag:"../padecimientos/arsenico.htm"
    },  {
        nombre: "diarrea",
        tit:"anisakis",
        pag:"../padecimientos/anisakis.htm"
    }, {
        nombre: "diarrea",
        tit:"bacilo paratyphi",
        pag:"../padecimientos/b_paratiyphico.htm"
    }, {
        nombre: "diarrea",
        tit:"botulismo",
        pag:"../padecimientos/botulismo.htm"
    }, {
        nombre: "diarrea",
        tit:"burkholderia",
        pag:"../padecimientos/burkholderia_c.htm"
    }, {
        nombre: "diarrea",
        tit:"clamidia i.",
        pag:"../padecimientos/clamidia_i.htm"
    }, {
        nombre: "diarrea",
        tit:"clorstridium d.",
        pag:"../padecimientos/clorstridium_d.htm"
    }, {
        nombre: "diarrea",
        tit:"cólera",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "diarrea",
        tit:"disentería",
        pag:"../padecimientos/disenteria.htm"
    }, {
        nombre: "diarrea",
        tit:"trastornos digestivos",
        pag:"../padecimientos/gastritis.htm"
    }, {
        nombre: "colitis",
        tit:"estrés",
        pag:"../padecimientos/estres.htm"
    }, {
        nombre: "colitis",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "colitis",
        tit:"benavides",
        pag:"../padecimientos/benavides.htm"
    }, {
        nombre: "colitis",
        tit:"estafilococo aureus +",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    }, {
        nombre: "colitis",
        tit:"tricomonas",
        pag:"../padecimientos/tricomonas.htm"
    }, {
        nombre: "colitis",
        tit:"salmonela",
        pag:"../padecimientos/salmonella_t.htm"
    },  {
        nombre: "colitis",
        tit:"VIH sida",
        pag:"../padecimientos/sida.htm"
    }, {
        nombre: "cólico",
        tit:"Botulismo",
        pag:"../padecimientos/botulismo.htm"
    }, {
        nombre: "cólico",
        tit:"Carmen, disfunción ovárica",
        pag:"../padecimientos/carmen.htm"
    }, {
        nombre: "cólico",
        tit:"Colitis",
        pag:"../padecimientos/colitis.htm"
    },  {
        nombre: "cólico",
        tit:"endometriosis",
        pag:"../padecimientos/endometriosis.htm"
    }, {
        nombre: "cólico",
        tit:"Disfunción estomacal",
        pag:"../padecimientos/estomago_disf.htm"
    }, {
        nombre: "bronquitis",
        tit:"Enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "bronquitis",
        tit:"enfisema",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "bronquitis",
        tit:"disfunción del bazo",
        pag:"../padecimientos/bazo_disf.htm"
    }, {
        nombre: "bronquitis",
        tit:"sarampión",
        pag:"../padecimientos/sarampion.htm"
    }, {
        nombre: "bronquitis",
        tit:"epiclavio",
        pag:"../padecimientos/epiclavio.htm"
    }, {
        nombre: "bronquitis",
        tit:"Goiz",
        pag:"../padecimientos/goiz.htm"
    }, {
        nombre: "bronquitis",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "bronquitis",
        tit:"influenza",
        pag:"../padecimientos/influenza.htm"
    }, {
        nombre: "gripe",
        tit:"H1N7",
        pag:"../padecimientos/h1n7.htm"
    }, {
        nombre: "gripe",
        tit:"newcastle",
        pag:"../padecimientos/newcastle.htm"
    }, {
        nombre: "gripe",
        tit:"influenza",
        pag:"../padecimientos/influenza.htm"
    },  {
        nombre: "neuropatía",
        tit:"tunel carpiano",
        pag:"../padecimientos/carpiano.htm"
    }, {
        nombre: "neuropatía",
        tit:"Gillén Barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "neuropatía",
        tit:"htlv-1",
        pag:"../padecimientos/htlv1.htm"
    }, {
        nombre: "disfunción eréctil",
        tit:"cáncer de próstata",
        pag:"../padecimientos/cancer_prostata.htm"
    }, {
        nombre: "disfunción eréctil",
        tit:"diabetes mellitus",
        pag:"../padecimientos/diabetes.htm"
    }, {
        nombre: "disfunción eréctil",
        tit:"prostatitis",
        pag:"../padecimientos/prostatitis.htm"
    }, {
        nombre: "metástasis",
        tit:"botulismo",
        pag:"../padecimientos/botulismo.htm"
    }, {
        nombre: "metástasis",
        tit:"clorstridium m.",
        pag:"../padecimientos/clorstridium_m.htm"
    }, {
        nombre: "metástasis",
        tit:"hamer",
        pag:"../padecimientos/hamer.htm"
    }, {
        nombre: "metástasis",
        tit:"pseudomona a.",
        pag:"../padecimientos/pseudomona_a.htm"
    }, {
        nombre: "erisipela",
        tit:"erisipela",
        pag:"../padecimientos/erisipela.htm"
    }, {
        nombre: "erisipela",
        tit:"estreptococo pyogenes",
        pag:"../padecimientos/estrepto-pyogenes.htm"
    }, {
        nombre: "erisipela",
        tit:"estreptococo beta hemolítico",
        pag:"../padecimientos/estreptococo_beta.htm"
    }, {
        nombre: "erisipela",
        tit:"estafilococo aureus",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    }, {
        nombre: "mastitis",
        tit:"estreptococo pyogenes",
        pag:"../padecimientos/estrepto-pyogenes.htm"
    },  {
        nombre: "fibrosis quística",
        tit:"clorstridium p.",
        pag:"../padecimientos/clorstridium_p.htm"
    }, {
        nombre: "fibrosis quística",
        tit:"pseudomona a.",
        pag:"../padecimientos/pseudomona_a.htm"
    }, {
        nombre: "fibrosis quística",
        tit:"hepatitis",
        pag:"../padecimientos/hepatitis.htm"
    },  {
        nombre: "fibrosis quística",
        tit:"ramses",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "hígado graso",
        tit:"hepatitis",
        pag:"../padecimientos/hepatitis.htm"
    }, {
        nombre: "enfermedad de Kawasaki",
        tit:"ramses",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "síndrome de Reye",
        tit:"ramses",
        pag:"../padecimientos/ramses.htm"
    },  {
        nombre: "disnea",
        tit:"Enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    }, {
        nombre: "disnea",
        tit:"anemia",
        pag:"../padecimientos/anemia.htm"
    }, {
        nombre: "disnea",
        tit:"enfisema",
        pag:"../padecimientos/enfisema.htm"
    }, {
        nombre: "disnea",
        tit:"derrame pleural",
        pag:"../padecimientos/derrame-pleural.htm"
    }, {
        nombre: "disnea",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    }, {
        nombre: "disnea",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "disnea",
        tit:"fibrosis quística",
        pag:"../padecimientos/fibrosis_q.htm"
    }, {
        nombre: "disnea",
        tit:"pneumosystis",
        pag:"../padecimientos/pneumocystis.htm"
    }, {
        nombre: "disnea",
        tit:"hanta virus",
        pag:"../padecimientos/hantavirus.htm"
    }, {
        nombre: "úlcera gástrica",
        tit:"clorstridium p.",
        pag:"../padecimientos/clorstridium_p.htm"
    }, {
        nombre: "úlcera gástrica",
        tit:"sarampión",
        pag:"../padecimientos/sarampion.htm"
    },  {
        nombre: "úlcera",
        tit:"actinómices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "úlcera",
        tit:"blastocistis",
        pag:"../padecimientos/blastocistis_h.htm"
    },  {
        nombre: "úlcera",
        tit:"clamidia t.",
        pag:"../padecimientos/clamidia_t.htm"
    }, {
        nombre: "úlcera",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    }, {
        nombre: "úlcera",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    }, {
        nombre: "úlcera",
        tit:"leismania",
        pag:"../padecimientos/leismania.htm"
    }, {
        nombre: "úlcera",
        tit:"lepra",
        pag:"../padecimientos/lepra.htm"
    },  {
        nombre: "úlcera",
        tit:"lupus",
        pag:"../padecimientos/lupus.htm"
    }, {
        nombre: "úlcera",
        tit:"pytirosporum v.",
        pag:"../padecimientos/p_versicolo.htm"
    }, {
        nombre: "salpullido",
        tit:"alergia alimentaria",
        pag:"../padecimientos/alergia_a.htm"
    }, {
        nombre: "salpullido",
        tit:"morganela",
        pag:"../padecimientos/morganella_t.htm"
    },  {
        nombre: "salpullido",
        tit:"ricketsia",
        pag:"../padecimientos/rickettsia.htm"
    }, {
        nombre: "salpullido",
        tit:"tripanozoma p.",
        pag:"../padecimientos/tripanozoma_p.htm"
    }, {
        nombre: "somnolencia",
        tit:"alergia alimentaria",
        pag:"../padecimientos/alergia_a.htm"
    }, {
        nombre: "somnolencia",
        tit:"cisticerco",
        pag:"../padecimientos/cisticerco.htm"
    }, {
        nombre: "somnolencia",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    }, {
        nombre: "somnolencia",
        tit:"dengue",
        pag:"../padecimientos/dengue.htm"
    }, {
        nombre: "somnolencia",
        tit:"intoxicación",
        pag:"../padecimientos/intoxicacion_c.htm"
    }, {
        nombre: "somnolencia",
        tit:"priones",
        pag:"../padecimientos/priones.htm"
    }, {
        nombre: "somnolencia",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    }, {
        nombre: "somnolencia",
        tit:"envenenamiento",
        pag:"../padecimientos/venenos.htm"
    },  {
        nombre: "asma",
        tit:"Alex",
        pag:"../padecimientos/alex.htm"
    },{
        nombre: "asma",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    }, {
        nombre: "asma",
        tit:"enterovirus",
        pag:"../padecimientos/enterovirus.htm"
    }, {
        nombre: "asma",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    }, {
        nombre: "asma",
        tit:"rabia",
        pag:"../padecimientos/rabia.htm"
    },  {
        nombre: "asma",
        tit:"estafilococo A -",
        pag:"../padecimientos/estafilococo_aneg.htm"
    },  {
        nombre: "celiaquía, celiaca",
        tit:"anemia",
        pag:"../padecimientos/anemia.htm"
    },  {
        nombre: "celiaquía, celiaca",
        tit:"Enf. autoinmunes",
        pag:"../padecimientos/autoinmune.htm"
    }, {
        nombre: "celiaquía, celiaca",
        tit:"cromosoma 21",
        pag:"../padecimientos/cromo-21.htm"
    }, {
        nombre: "celiaquía, celiaca",
        tit:"distensión abdominal",
        pag:"../padecimientos/distension_ab.htm"
    }, {
        nombre: "celiaquía, celiaca",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "gluten",
        tit:"anemia",
        pag:"../padecimientos/anemia.htm"
    },  {
        nombre: "gluten",
        tit:"Enf. autoinmunes",
        pag:"../padecimientos/autoinmune.htm"
    }, {
        nombre: "gluten",
        tit:"cromosoma 21",
        pag:"../padecimientos/cromo-21.htm"
    }, {
        nombre: "gluten",
        tit:"distensión abdominal",
        pag:"../padecimientos/distension_ab.htm"
    }, {
        nombre: "gluten",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    }, {
        nombre: "ascitis",
        tit:"distensión abdominal",
        pag:"../padecimientos/distension_ab.htm"
    }, {
        nombre: "hormonas",
        tit:"Alvaro",
        pag:"../padecimientos/alvaro.htm"
    }, {
        nombre: "hormonas",
        tit:"corrección hormonal",
        pag:"../padecimientos/correc-hormonal.htm"
    },  {
        nombre: "hormonas",
        tit:"menopausia",
        pag:"../padecimientos/menopausia.htm"
    }, {
        nombre: "demencia senil",
        tit:"Alzheimer",
        pag:"../padecimientos/alzheimer.htm"
    }, {
        nombre: "demencia",
        tit:"amnesia",
        pag:"../padecimientos/amnesia.htm"
    }, {
        nombre: "memoria",
        tit:"Alzheimer",
        pag:"../padecimientos/alzheimer.htm"
    }, {
        nombre: "memoria",
        tit:"demencia",
        pag:"../padecimientos/demencia.htm"
    }, {
        nombre: "memoria",
        tit:"amnesia",
        pag:"../padecimientos/amnesia.htm"
    }, {
        nombre: "exantema",
        tit:"roseola",
        pag:"../padecimientos/roseola.htm"
    }, {
        nombre: "aneurisma",
        tit:"cefalea",
        pag:"../padecimientos/cefalea.htm"
    },  {
        nombre: "aneurisma",
        tit:"convulsiones",
        pag:"../padecimientos/convulsiones.htm"
    }, {
        nombre: "aneurisma",
        tit:"encefalitis",
        pag:"../padecimientos/encefalitis.htm"
    }, {
        nombre: "aneurisma",
        tit:"migraña",
        pag:"../padecimientos/migrana.htm"
    }, {
        nombre: "aneurisma",
        tit:"sífilis",
        pag:"../padecimientos/sifilis.htm"
    }, {
        nombre: "desnutrición",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm"
    }, {
        nombre: "carencia nutricional",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm"
    }, {
        nombre: "desnutrición",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "desnutrición",
        tit:"giardia",
        pag:"../padecimientos/giardia.htm"
    }, {
        nombre: "desnutrición",
        tit:"microcefalia",
        pag:"../padecimientos/microcefalia.htm"
    }, {
        nombre: "desnutrición",
        tit:"mucor",
        pag:"../padecimientos/mucor.htm"
    }, {
        nombre: "flatulencia",
        tit:"amebiasis",
        pag:"../padecimientos/amibiasis.htm"
    }, {
        nombre: "flatulencia",
        tit:"yersinia i.",
        pag:"../padecimientos/yersinia_i.htm"
    },  {
        nombre: "hinchazón",
        tit:"actinomices",
        pag:"../padecimientos/actinomices.htm"
    }, {
        nombre: "hinchazón",
        tit:"amiloidosis",
        pag:"../padecimientos/amiloidosis.htm"
    }, {
        nombre: "hinchazón",
        tit:"cáncer de mama",
        pag:"../padecimientos/cancer_mama.htm"
    }, {
        nombre: "hinchazón",
        tit:"dermatitis",
        pag:"../padecimientos/dermatitis.htm"
    }, {
        nombre: "hinchazón",
        tit:"lupus",
        pag:"../padecimientos/lupus.htm"
    },  {
        nombre: "hinchazón",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    },  {
        nombre: "hinchazón",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    },  {
        nombre: "arritmia",
        tit:"Ana Alicia",
        pag:"../padecimientos/"
    },  {
        nombre: "arritmia",
        tit:"amiloidosis",
        pag:"../padecimientos/amiloidosis.htm"
    },  {
        nombre: "arritmia",
        tit:"cisticerco",
        pag:"../padecimientos/cisticerco.htm"
    },  {
        nombre: "arritmia",
        tit:"pericarditis",
        pag:"../padecimientos/pericarditis.htm"
    },  {
        nombre: "arritmia",
        tit:"lupus",
        pag:"../padecimientos/lupus.htm"
    },  {
        nombre: "arritmia",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    },   {
        nombre: "fibrilación",
        tit:"Ana Alicia",
        pag:"../padecimientos/"
    },  {
        nombre: "fibrilación",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    },  {
        nombre: "cardiopatía",
        tit:"Ana Alicia",
        pag:"../padecimientos/"
    },  {
        nombre: "cardiopatía",
        tit:"Enf. cardiovasculares",
        pag:"../padecimientos/cardiovasculares.htm"
    },  {
        nombre: "cardiopatía",
        tit:"Enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    },  {
        nombre: "cardiopatía",
        tit:"rubeola",
        pag:"../padecimientos/rubeola.htm"
    },  {
        nombre: "cardiopatía",
        tit:"sífilis",
        pag:"../padecimientos/sifilis.htm"
    },  {
        nombre: "cardiopatía",
        tit:"trepanozoma c.",
        pag:"../padecimientos/trepanozoma_c.htm"
    },  {
        nombre: "asfixia",
        tit:"resucitación cardiopulmonar",
        pag:"../padecimientos/rcp.htm"
    }, {
        nombre: "asfixia",
        tit:"choque anafiláctico",
        pag:"../padecimientos/anafilactico.htm"
    },  {
        nombre: "asfixia",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    }, {
        nombre: "asfixia",
        tit:"edema",
        pag:"../padecimientos/edema.htm"
    }, {
        nombre: "kawasaki",
        tit:"enfermedad de Kawasaki",
        pag:"../padecimientos/ramses.htm"
    }, {
        nombre: "aborto",
        tit:"síndrome de Torch",
        pag:"../padecimientos/torch.htm"
    },  {
        nombre: "absceso hepático",
        tit:"absceso hepático",
        pag:"../padecimientos/absesohepatico.htm"
    },  {
        nombre: "absceso tubario",
        tit:"absceso tubario",
        pag:"../padecimientos/clamidia_t.htm"
    },  {
        nombre: "acné vulgar",
        tit:"acné vulgar",
        pag:"../padecimientos/estafilococo_albus.htm"
    },  {
        nombre: "actinomicosis",
        tit:"actinomyces",
        pag:"../padecimientos/actinomices.htm"
    },  {
        nombre: "afta",
        tit:"fiebre aftosa",
        pag:"../padecimientos/aftosa.htm"
    }, {
        nombre: "afta",
        tit:"trastornos bucales",
        pag:"../padecimientos/dentales.htm"
    },  {
        nombre: "afta",
        tit:"herpes 4",
        pag:"../padecimientos/herpes4.htm"
    },  {
        nombre: "alucinaciones",
        tit:"psicosis",
        pag:"../padecimientos/psicosis.htm"
    },  {
        nombre: "amenorrea",
        tit:"Carmen",
        pag:"../padecimientos/carmen.htm"
    },  {
        nombre: "amigdalitis",
        tit:"estreptococo c.",
        pag:"../padecimientos/estreptococo_c.htm"
    },  {
        nombre: "ascaris",
        tit:"parásitos intestinales",
        pag:"../padecimientos/parasitos_i.htm"
    },  {
        nombre: "ataxia cerebelosa",
        tit:"new castle",
        pag:"../padecimientos/newcastle.htm"
    },  {
        nombre: "bebesiosis",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    },  {
        nombre: "libido",
        tit:"Juana",
        pag:"../padecimientos/juana.htm"
    },  {
        nombre: "bartolenosis",
        tit:"bartonela",
        pag:"../padecimientos/bartonella.htm"
    },  {
        nombre: "bucales",
        tit:"trastornos bucales",
        pag:"../padecimientos/dentales.htm"
    },  {
        nombre: "trastornos bucales",
        tit:"trastornos bucales",
        pag:"../padecimientos/dentales.htm"
    },  {
        nombre: "bursitis",
        tit:"Pasciano",
        pag:"../padecimientos/pasciano.htm"
    },  {
        nombre: "cardiovasculares",
        tit:"Enf. cardiovasculares",
        pag:"../padecimientos/cardiovasculares.htm"
    },   {
        nombre: "enfermedades cardiovasculares",
        tit:"Enf. cardiovasculares",
        pag:"../padecimientos/cardiovasculares.htm"
    },  {
        nombre: "trastornos cardiovaculares",
        tit:"Enf. cardiovasculares",
        pag:"../padecimientos/cardiovasculares.htm"
    },  {
        nombre: "choque tóxico",
        tit:"choque tóxico",
        pag:"../padecimientos/choque-toxico.htm"
    },  {
        nombre: "tóxico",
        tit:"choque tóxico",
        pag:"../padecimientos/choque-toxico.htm"
    },  {
        nombre: "ciclo circadiano",
        tit:"sistema nervioso autónomo",
        pag:"../padecimientos/sna.htm"
    },  {
        nombre: "angioma",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "angioma",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm"
    },  {
        nombre: "angioma",
        tit:"cirrosis",
        pag:"../padecimientos/cirrosis.htm"
    },  {
        nombre: "angioma",
        tit:"cromosoma 12",
        pag:"../padecimientos/cromo-12.htm"
    }, {
        nombre: "coriorretinitis",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "esclerosis múltiple",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "crioamnionitis",
        tit:"ureaplasma",
        pag:"../padecimientos/ureaplasma_u.htm"
    },  {
        nombre: "epidimitis",
        tit:"ureaplasma",
        pag:"../padecimientos/ureaplasma_u.htm"
    },  {
        nombre: "herpangina",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    },  {
        nombre: "cistitis",
        tit:"colera",
        pag:"../padecimientos/colera.htm"
    }, {
        nombre: "cistitis",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    }, {
        nombre: "cistitis",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    },  {
        nombre: "cistitis",
        tit:"enterobacter c.",
        pag:"../padecimientos/enterobacter_c.htm"
    },  {
        nombre: "cistitis",
        tit:"herpes 5",
        pag:"../padecimientos/herpes5.htm"
    },  {
        nombre: "cistitis",
        tit:"polyomavirus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "hidatidosis",
        tit:"equinococus granulosus",
        pag:"../padecimientos/equinococus_g.htm"
    },  {
        nombre: "hydrocele",
        tit:"pólipo, quiste",
        pag:"../padecimientos/quiste-agua.htm"
    },  {
        nombre: "incontinencia urinaria",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "incontinencia urinaria",
        tit:"síndrome de Crohn",
        pag:"../padecimientos/crohn.htm"
    },  {
        nombre: "incontinencia urinaria",
        tit:"gardenerella v.",
        pag:"../padecimientos/gardenerella_v.htm"
    }, {
        nombre: "legionelosis",
        tit:"legionela",
        pag:"../padecimientos/legionela_pn.htm"
    },  {
        nombre: "leucoencefalopatía",
        tit:"polyomavirus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "LMP",
        tit:"polyomavirus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "lumbalgia",
        tit:"obesidad",
        pag:"../padecimientos/obsidad.htm"
    },  {
        nombre: "lumbalgia",
        tit:"radiculopatía",
        pag:"../padecimientos/radiculopatia.htm"
    },  {
        nombre: "macromegalia",
        tit:"Vivian",
        pag:"../padecimientos/vivian.htm"
    },  {
        nombre: "membrana hialina",
        tit:"factor surfactante",
        pag:"../padecimientos/sufactante.htm"
    },  {
        nombre: "hialina",
        tit:"factor surfactante",
        pag:"../padecimientos/sufactante.htm"
    },  {
        nombre: "surfactante",
        tit:"factor surfactante",
        pag:"../padecimientos/sufactante.htm"
    },  {
        nombre: "migraña",
        tit:"cefalea",
        pag:"../padecimientos/cefalea.htm"
    },  {
        nombre: "migraña",
        tit:"Isaac",
        pag:"../padecimientos/isaac.htm"
    },  {
        nombre: "migraña",
        tit:"encefalitis",
        pag:"../padecimientos/encefalitis.htm"
    },  {
        nombre: "migraña",
        tit:"mareos",
        pag:"../padecimientos/mareos.htm"
    },  {
        nombre: "migraña",
        tit:"tifo exantemático",
        pag:"../padecimientos/tifo_exa.htm"
    },  {
        nombre: "obesidad",
        tit:"Elena",
        pag:"../padecimientos/elena.htm"
    },  {
        nombre: "obesidad",
        tit:"polifagia, gula",
        pag:"../padecimientos/gula.htm"
    },  {
        nombre: "obesidad",
        tit:"adicciones",
        pag:"../padecimientos/adicciones.htm"
    },  {
        nombre: "oculares",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    },  {
        nombre: "paludismo",
        tit:"plasmodium f.",
        pag:"../padecimientos/plasmodium_f.htm"
    },  {
        nombre: "paludismo",
        tit:"plasmodium vivax.",
        pag:"../padecimientos/plasmodium_v.htm"
    }, {
        nombre: "malaria",
        tit:"plasmodium vivax.",
        pag:"../padecimientos/plasmodium_v.htm"
    },  {
        nombre: "mialgia",
        tit:"fibromialgia",
        pag:"../padecimientos/fibromialgia.htm"
    },   {
        nombre: "mialgia",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    },   {
        nombre: "mialgia",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    },   {
        nombre: "mialgia",
        tit:"choque tóxico",
        pag:"../padecimientos/choque-toxico.htm"
    },   {
        nombre: "mialgia",
        tit:"meningitis",
        pag:"../padecimientos/meningitis.htm"
    },   {
        nombre: "mialgia",
        tit:"coronavirus",
        pag:"../padecimientos/coronavirus.htm"
    },{
        nombre: "mialgia",
        tit:"tripanozoma g.",
        pag:"../padecimientos/tripanozoma_g.htm"
    },  {
        nombre: "parkinson",
        tit:"trastornos mentales",
        pag:"../padecimientos/t_mentales.htm"
    }, {
        nombre: "parkinson",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    }, {
        nombre: "quimioterapia",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "quiste amébico",
        tit:"entamoeba h.",
        pag:"../padecimientos/entamoeba.htm"
    },  {
        nombre: "rectorragia",
        tit:"enterobacter c.",
        pag:"../padecimientos/enterobacter_c.htm"
    },  {
        nombre: "hemorroides",
        tit:"enterobacter c.",
        pag:"../padecimientos/enterobacter_c.htm"
    },  {
        nombre: "hemorroides",
        tit:"papiloma v.",
        pag:"../padecimientos/papiloma.htm"
    },  {
        nombre: "renales",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    }, {
        nombre: "respiratorias",
        tit:"Enf. respiratorias",
        pag:"../padecimientos/respiratorias.htm"
    },  {
        nombre: "tabaquismo",
        tit:"adicciones",
        pag:"../padecimientos/adicciones.htm"
    }, {
        nombre: "tdah",
        tit:"trastorno de déficit de atención",
        pag:"../padecimientos/tdah.htm"
    },  {
        nombre: "síndrome de Jacobsen",
        tit:"trastorno de déficit de atención",
        pag:"../padecimientos/tdah.htm"
    },  {
        nombre: "síndrome de Jacobsen",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    }, {
        nombre: "Torch, síndrome de",
        tit:"síndrome de Torch",
        pag:"../padecimientos/torch.htm"
    }, {
        nombre: "trastornos de la vista",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    },  {
        nombre: "tricomoniasis urogenital",
        tit:"tricomonas",
        pag:"../padecimientos/tricomonas.htm"
    },  {
        nombre: "trismo",
        tit:"chapingo",
        pag:"../padecimientos/chapingo.htm"
    }, {
        nombre: "trismus",
        tit:"chapingo",
        pag:"../padecimientos/chapingo.htm"
    },  {
        nombre: "trombo",
        tit:"plaquetas",
        pag:"../padecimientos/plaquetas.htm"
    },  {
        nombre: "trombo",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    },  {
        nombre: "trombo flebitis",
        tit:"varices",
        pag:"../padecimientos/varices.htm"
    }, {
        nombre: "trombo",
        tit:"cromosoma 1",
        pag:"../padecimientos/cromo-1.htm"
    },  {
        nombre: "vacas locas",
        tit:"priones",
        pag:"../padecimientos/priones.htm"
    },  {
        nombre: "tumor",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm#tumor"
    },  {
        nombre: "displasia",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm#"
    },  {
        nombre: "metaplasia",
        tit:"cáncer, tratamiento",
        pag:"../padecimientos/cancer-trata.htm#metaplasia"
    }, {
        nombre: "exudado",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm#exudado"
    }, {
        nombre: "trasudado",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm#trasudado"
    },  {
        nombre: "infiltrado",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm#infiltrado"
    },  {
        nombre: "drenaje de toxinas",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm#drenaje"
    }, {
        nombre: "granuloma",
        tit:"reservorio de toxinas",
        pag:"../padecimientos/residuos.htm#granuloma"
    },  {
        nombre: "hematoma",
        tit:"lesiones",
        pag:"../padecimientos/lesiones.htm#hematoma"
    },  {
        nombre: "desgarro",
        tit:"lesiones",
        pag:"../padecimientos/lesiones.htm#desgarro"
    }, {
        nombre: "esguince",
        tit:"lesiones",
        pag:"../padecimientos/lesiones.htm#esguince"
    },  {
        nombre: "luxación",
        tit:"lesiones",
        pag:"../padecimientos/lesiones.htm#luxacion"
    },  {
        nombre: "embolia",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    }, {
        nombre: "carbohidratos",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#a"
    }, {
        nombre: "lípidos",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#a"
    },  {
        nombre: "grasas",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#a"
    },  {
        nombre: "omegas",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#a"
    },  {
        nombre: "proteínas",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#a"
    },  {
        nombre: "vitaminas",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#b"
    },  {
        nombre: "minerales",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "calcio",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "cobre",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "cromo",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "fósforo",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "hierro",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "anemia",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "azufre",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "yodo",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "zinc",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "sodio",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "niquel",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "litio",
        tit:"carencia nutricional",
        pag:"rastreos/nutrimentos.htm#c"
    },  {
        nombre: "triglicéridos",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    },  {
        nombre: "triglicéridos",
        tit:"diabetes",
        pag:"../padecimientos/diabetes.htm"
    },  {
        nombre: "triglicéridos",
        tit:"hepatitis",
        pag:"../padecimientos/hepatitis.htm"
    },  {
        nombre: "triglicéridos",
        tit:"ramsés",
        pag:"../padecimientos/ramses.htm"
    },  {
        nombre: "falsa esclerosis",
        tit:"citomegalovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "miopía",
        tit:"castañeda",
        pag:"../padecimientos/castaneda.htm"
    },  {
        nombre: "hipermetropía",
        tit:"castañeda",
        pag:"../padecimientos/castaneda.htm"
    },  {
        nombre: "astigmatismo",
        tit:"castañeda",
        pag:"../padecimientos/castaneda.htm"
    },  {
        nombre: "presbicia",
        tit:"castañeda",
        pag:"../padecimientos/castaneda.htm"
    },  {
        nombre: "dispepsia",
        tit:"anisakis",
        pag:"../padecimientos/anisakis.htm"
    },  {
        nombre: "dispepsia",
        tit:"bartonella",
        pag:"../padecimientos/bartonella.htm"
    },  {
        nombre: "dispepsia",
        tit:"clorstridium d.",
        pag:"../padecimientos/clorstridium_d.htm"
    },  {
        nombre: "dispepsia",
        tit:"síndrome de Crohn",
        pag:"../padecimientos/crohn.htm"
    },  {
        nombre: "dispepsia",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    }, {
        nombre: "dispepsia",
        tit:"equinococus g.",
        pag:"../padecimientos/equinococus_g.htm"
    },  {
        nombre: "manía",
        tit:"trastorno bipolar",
        pag:"../padecimientos/bipolar.htm"
    },  {
        nombre: "timomas",
        tit:"blastocistis h.",
        pag:"../padecimientos/blastocistis_h.htm"
    },  {
        nombre: "Gilchrist",
        tit:"blastomicosis",
        pag:"../padecimientos/blastomicosis.htm"
    }, {
        nombre: "tosferina",
        tit:"bordetella",
        pag:"../padecimientos/bordetella.htm"
    },  {
        nombre: "insuficiencia hepática",
        tit:"borrelia",
        pag:"../padecimientos/borrelia.htm"
    },  {
        nombre: "linfoma",
        tit:"brucelosis",
        pag:"../padecimientos/brucela.htm"
    },  {
        nombre: "esplenomegalia",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    },  {
        nombre: "esplenomegalia",
        tit:"brucela",
        pag:"../padecimientos/brucela.htm"
    },  {
        nombre: "esplenomegalia",
        tit:"brucela abortus",
        pag:"../padecimientos/brusela_a.htm"
    },  {
        nombre: "esplenomegalia",
        tit:"schistosoma",
        pag:"../padecimientos/schistosoma.htm"
    },  {
        nombre: "parto",
        tit:"brucela abortus",
        pag:"../padecimientos/brusela_a.htm"
    },  {
        nombre: "fibrosis quística",
        tit:"burkordelia c.",
        pag:"../padecimientos/burkholderia_c.htm"
    },  {
        nombre: "sarcomas",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    },  {
        nombre: "carcinomas",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    }, {
        nombre: "disfagia",
        tit:"cáncer de garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    },  {
        nombre: "mamografía",
        tit:"cáncer de mama",
        pag:"../padecimientos/cancer_mama.htm"
    },  {
        nombre: "displasia cervical",
        tit:"cáncer cervicouterino",
        pag:"../padecimientos/cancer_uterino.htm"
    },  {
        nombre: "arteroesclerosis",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    },  {
        nombre: "colesterol alto",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    },  {
        nombre: "hipertensión arterial",
        tit:"balance cardiovascular",
        pag:"../padecimientos/cardio1.htm"
    },  {
        nombre: "psoriasis",
        tit:"caspa",
        pag:"../padecimientos/caspa.htm"
    },  {
        nombre: "microsporum cannis",
        tit:"caspa",
        pag:"../padecimientos/caspa.htm"
    },  {
        nombre: "tiña",
        tit:"caspa",
        pag:"../padecimientos/caspa.htm"
    },  {
        nombre: "tiña",
        tit:"microsporum cannis",
        pag:"../padecimientos/microsporum_c.htm"
    },  {
        nombre: "tiña",
        tit:"tiña mentographytes",
        pag:"../padecimientos/tina_mentog.htm"
    },  {
        nombre: "tiña",
        tit:"trychophyton",
        pag:"../padecimientos/trychophyton.htm"
    },  {
        nombre: "eczema",
        tit:"celulitis",
        pag:"../padecimientos/celulitis.htm"
    },  {
        nombre: "eczema",
        tit:"dermatitis",
        pag:"../padecimientos/dermatitis.htm"
    }, {
        nombre: "isquemia",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    },  {
        nombre: "estegnosis",
        tit:"infarto cerebral",
        pag:"../padecimientos/cerebrovascular.htm"
    },  {
        nombre: "estegnosis",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "estegnosis",
        tit:"válvula mitral",
        pag:"../padecimientos/valv-mitral.htm"
    },  {
        nombre: "estegnosis",
        tit:"cromosoma 20",
        pag:"../padecimientos/cromo-20.htm"
    },  {
        nombre: "artralgia",
        tit:"babesia",
        pag:"../padecimientos/babesia.htm"
    }, {
        nombre: "artralgia",
        tit:"chikungunya",
        pag:"../padecimientos/chikungunya.htm"
    },  {
        nombre: "electrocución",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    },  {
        nombre: "trombocitopenia",
        tit:"plaquetas",
        pag:"../padecimientos/plaquetas.htm"
    },  {
        nombre: "trombocitopenia",
        tit:"choque tóxico",
        pag:"../padecimientos/choque-toxico.htm"
    },  {
        nombre: "trombocitopenia",
        tit:"cromosoma 1",
        pag:"../padecimientos/cromo-1.htm"
    },  {
        nombre: "hipotensión arterial",
        tit:"marimar",
        pag:"../padecimientos/marimar.htm"
    },  {
        nombre: "ascitis",
        tit:"cirrosis",
        pag:"../padecimientos/cirrosis.htm"
    },  {
        nombre: "neurotoxinas",
        tit:"clorstridium malignum",
        pag:"../padecimientos/clorstridium_m.htm"
    },  {
        nombre: "neurotoxinas",
        tit:"tétanos",
        pag:"../padecimientos/tetanos.htm"
    },  {
        nombre: "hidratación",
        tit:"diarrea",
        pag:"../padecimientos/diarrea.htm"
    },{
        nombre: "hidratación",
        tit:"bacilo paratiyphico",
        pag:"../padecimientos/b_paratiyphico.htm"
    },  {
        nombre: "hidratación",
        tit:"campylobacter j.",
        pag:"../padecimientos/campylobacter_j.htm"
    },  {
        nombre: "hidratación",
        tit:"colera",
        pag:"../padecimientos/colera.htm"
    },  {
        nombre: "hidratación",
        tit:"crisis convulsiva",
        pag:"../padecimientos/convulsiones.htm"
    }, {
        nombre: "hidratación",
        tit:"creatinina alta",
        pag:"../padecimientos/creatinina.htm"
    }, {
        nombre: "hidratación",
        tit:"disentería",
        pag:"../padecimientos/disenteria.htm"
    },  {
        nombre: "hidratación",
        tit:"entamoeba h.",
        pag:"../padecimientos/entamoeba.htm"
    },  {
        nombre: "hidratación",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    },  {
        nombre: "hidratación",
        tit:"inconsciencia",
        pag:"../padecimientos/inconsciencia.htm"
    },  {
        nombre: "hidratación",
        tit:"rotavirus",
        pag:"../padecimientos/rotavirus.htm"
    },  {
        nombre: "hidratación",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    },  {
        nombre: "deshidratación",
        tit:"diarrea",
        pag:"../padecimientos/diarrea.htm"
    },{
        nombre: "deshidratación",
        tit:"bacilo paratiyphico",
        pag:"../padecimientos/b_paratiyphico.htm"
    },  {
        nombre: "deshidratación",
        tit:"campylobacter j.",
        pag:"../padecimientos/campylobacter_j.htm"
    },  {
        nombre: "deshidratación",
        tit:"colera",
        pag:"../padecimientos/colera.htm"
    },  {
        nombre: "deshidratación",
        tit:"crisis convulsiva",
        pag:"../padecimientos/convulsiones.htm"
    }, {
        nombre: "deshidratación",
        tit:"creatinina alta",
        pag:"../padecimientos/creatinina.htm"
    }, {
        nombre: "deshidratación",
        tit:"disentería",
        pag:"../padecimientos/disenteria.htm"
    },  {
        nombre: "deshidratación",
        tit:"entamoeba h.",
        pag:"../padecimientos/entamoeba.htm"
    },  {
        nombre: "deshidratación",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    },  {
        nombre: "deshidratación",
        tit:"inconsciencia",
        pag:"../padecimientos/inconsciencia.htm"
    },  {
        nombre: "deshidratación",
        tit:"rotavirus",
        pag:"../padecimientos/rotavirus.htm"
    },  {
        nombre: "deshidratación",
        tit:"shigella",
        pag:"../padecimientos/shigella.htm"
    },  {
        nombre: "procesos cognitivos",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "cognición",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "funciones cognitivas",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "praxias",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "gnosis",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "atención",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "orientación",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "desorientación",
        tit:"conciencia",
        pag:"../padecimientos/conciencia.htm"
    },  {
        nombre: "ataque al corazón",
        tit:"coronarias",
        pag:"../padecimientos/coronarias.htm"
    },  {
        nombre: "espasmos",
        tit:"crisis convulsivas",
        pag:"../padecimientos/convulsiones.htm"
    },  {
        nombre: "espasmos",
        tit:"choque eléctrico",
        pag:"../padecimientos/choque-electrico.htm"
    },  {
        nombre: "espasmos",
        tit:"blastocistis h.",
        pag:"../padecimientos/blastocistis_h.htm"
    },  {
        nombre: "espasmos",
        tit:"distemper canino",
        pag:"../padecimientos/distemper_c.htm"
    },  {
        nombre: "hematuria",
        tit:"varicela",
        pag:"../padecimientos/varicela.htm"
    },  {
        nombre: "sistema endocrino",
        tit:"corrección hormonal",
        pag:"../padecimientos/correc-hormonal.htm"
    },  {
        nombre: "endocrino",
        tit:"corrección hormonal",
        pag:"../padecimientos/correc-hormonal.htm"
    },  {
        nombre: "endocrino",
        tit:"Alvaro",
        pag:"../padecimientos/alvaro.htm"
    },  {
        nombre: "rabdomiolitis",
        tit:"creatinina alta",
        pag:"../padecimientos/creatinina.htm"
    },  {
        nombre: "Hodgkin",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    },  {
        nombre: "Hodgkin",
        tit:"criptococcus n.",
        pag:"../padecimientos/criptococcus_n.htm"
    },   {
        nombre: "Hodgkin",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    },  {
        nombre: "carcinoma",
        tit:"cromosoma 3",
        pag:"../padecimientos/cromo-3.htm"
    },  {
        nombre: "Lobo-hirchhorn",
        tit:"cromosoma 4",
        pag:"../padecimientos/cromo-4.htm"
    },  {
        nombre: "mieloma",
        tit:"leucemias",
        pag:"../padecimientos/leucemia.htm"
    },{
        nombre: "mieloma",
        tit:"cromosoma 4",
        pag:"../padecimientos/cromo-4.htm"
    },  {
        nombre: "mieloma",
        tit:"cromosoma 14",
        pag:"../padecimientos/cromo-14.htm"
    },  {
        nombre: "heterotropia poliventricular",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    },  {
        nombre: "poliposis adenomatosa",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    },  {
        nombre: "Lejeune",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    },{
        nombre: "pólipos",
        tit:"antrax",
        pag:"../padecimientos/antrax.htm"
    },  {
        nombre: "pólipos",
        tit:"botulismo",
        pag:"../padecimientos/botulismo.htm"
    },  {
        nombre: "pólipos",
        tit:"cáncer de garganta",
        pag:"../padecimientos/cancer_garganta.htm"
    },  {
        nombre: "pólipos",
        tit:"miomas",
        pag:"../padecimientos/miomas.htm"
    },  {
        nombre: "pólipos",
        tit:"sangrado vaginal",
        pag:"../padecimientos/sangrado-vaginal.htm"
    },  {
        nombre: "apoptosis",
        tit:"cáncer",
        pag:"../padecimientos/cancer.htm"
    },  {
        nombre: "apoptosis",
        tit:"necrosis",
        pag:"../padecimientos/necrosis.htm"
    },  {
        nombre: "apoptosis",
        tit:"rcv40",
        pag:"../padecimientos/rcv40.htm"
    },  {
        nombre: "apoptosis",
        tit:"cromosoma 6",
        pag:"../padecimientos/cromo-6.htm"
    },  {
        nombre: "apoptosis",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "Williams-Beuren",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    },  {
        nombre: "hipotonia",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    }, {
        nombre: "hipotonia",
        tit:"cromosoma 12",
        pag:"../padecimientos/cromo-12.htm"
    }, {
        nombre: "hipotonia",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    }, {
        nombre: "Russell-Silver",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    },  {
        nombre: "osteocondromas",
        tit:"cromosoma 8",
        pag:"../padecimientos/cromo-8.htm"
    },  {
        nombre: "glioma",
        tit:"cromosoma 10",
        pag:"../padecimientos/cromo-10.htm"
    },  {
        nombre: "Emanuel",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    },  {
        nombre: "Síndrome de Emanuel",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    },  {
        nombre: "Síndrome de Russel-Silver",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    },  {
        nombre: "Russel-Silver",
        tit:"cromosoma 11",
        pag:"../padecimientos/cromo-11.htm"
    },  {
        nombre: "Síndrome de Russel-Silver",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    },  {
        nombre: "Russel-Silver",
        tit:"cromosoma 7",
        pag:"../padecimientos/cromo-7.htm"
    },  {
        nombre: "retinoblastoma",
        tit:"cromosoma 13",
        pag:"../padecimientos/cromo-13.htm"
    },  {
        nombre: "linfoma de Burkitt",
        tit:"cromosoma 14",
        pag:"../padecimientos/cromo-14.htm"
    },  {
        nombre: "linfoma folicular",
        tit:"cromosoma 14",
        pag:"../padecimientos/cromo-14.htm"
    },  {
        nombre: "síndrome de Angelman",
        tit:"cromosoma 15",
        pag:"../padecimientos/cromo-15.htm"
    },  {
        nombre: "Angelman",
        tit:"cromosoma 15",
        pag:"../padecimientos/cromo-15.htm"
    },  {
        nombre: "síndrome de Prader-Willi",
        tit:"cromosoma 15",
        pag:"../padecimientos/cromo-15.htm"
    },  {
        nombre: "Prader-Willi",
        tit:"cromosoma 15",
        pag:"../padecimientos/cromo-15.htm"
    },  {
        nombre: "meduloblastoma",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "trisomía 18",
        tit:"cromosoma 18",
        pag:"../padecimientos/cromo-18.htm"
    },  {
        nombre: "Edwards",
        tit:"cromosoma 18",
        pag:"../padecimientos/cromo-18.htm"
    },  {
        nombre: "estenosis pulmonar",
        tit:"cromosoma 20",
        pag:"../padecimientos/cromo-20.htm"
    }, {
        nombre: "trisomía 21",
        tit:"cromosoma 21",
        pag:"../padecimientos/cromo-21.htm"
    }, {
        nombre: "trisomía X",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    },  {
        nombre: "síndrome de Turner",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    },  {
        nombre: "Turner",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    },  {
        nombre: "ginecomastia",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    },  {
        nombre: "azoospermia",
        tit:"cromosoma x-y",
        pag:"../padecimientos/cromo-xy.htm"
    },  {
        nombre: "mielina",
        tit:"citomagolovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "mielina",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    },  {
        nombre: "mielina",
        tit:"Guillen Barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "mielina",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "mielina",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    },  {
        nombre: "mielina",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "desmielinización",
        tit:"citomagolovirus",
        pag:"../padecimientos/citomegalovirus.htm"
    },  {
        nombre: "desmielinización",
        tit:"cryptocides p.",
        pag:"../padecimientos/cryptocides_p.htm"
    },  {
        nombre: "desmielinización",
        tit:"Guillen Barré",
        pag:"../padecimientos/guillenbarre.htm"
    }, {
        nombre: "desmielinización",
        tit:"polioma virus",
        pag:"../padecimientos/polioma.htm"
    },  {
        nombre: "desmielinización",
        tit:"cromosoma 5",
        pag:"../padecimientos/cromo-5.htm"
    },  {
        nombre: "desmielinización",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "cyclosporosis",
        tit:"cryptospora cayetanesis",
        pag:"../padecimientos/cryptospora_cay.htm"
    },  {
        nombre: "ciclosporosis",
        tit:"cryptospora cayetanesis",
        pag:"../padecimientos/cryptospora_cay.htm"
    },  {
        nombre: "cryptosporosis",
        tit:"cryptospora cayetanesis",
        pag:"../padecimientos/cryptospora_cay.htm"
    },  {
        nombre: "timidez",
        tit:"David",
        pag:"../padecimientos/david.htm"
    },  {
        nombre: "desorientación",
        tit:"demencia senil",
        pag:"../padecimientos/demencia.htm"
    },  {
        nombre: "hipoglucemia",
        tit:"apnea",
        pag:"../padecimientos/apnea.htm"
    },  {
        nombre: "hipoglucemia",
        tit:"crisis convulsiva",
        pag:"../padecimientos/convulsiones.htm"
    },  {
        nombre: "hipoglucemia",
        tit:"inconsciencia",
        pag:"../padecimientos/inconsciencia.htm"
    },  {
        nombre: "hiperglucemia",
        tit:"diabetes",
        pag:"../padecimientos/diabetes.htm"
    },  {
        nombre: "hiperglucemia",
        tit:"diabetes insípida",
        pag:"../padecimientos/diabetes_ins.htm"
    },  {
        nombre: "hiperglucemia",
        tit:"trastornos renales",
        pag:"../padecimientos/renales.htm"
    },  {
        nombre: "hiperglucemia",
        tit:"mareos",
        pag:"../padecimientos/mareos.htm"
    },  {
        nombre: "bocio",
        tit:"tiroides, disfunción",
        pag:"../padecimientos/tiroides_disf.htm"
    },  {
        nombre: "bocio",
        tit:"difteria",
        pag:"../padecimientos/difteria.htm"
    },   {
        nombre: "menarquia",
        tit:"dismenorrea",
        pag:"../padecimientos/dismenorrea.htm"
    },  {
        nombre: "menarquia",
        tit:"sangrado vaginal",
        pag:"../padecimientos/sangrado-vaginal.htm"
    },  {
        nombre: "linfaedema",
        tit:"edema",
        pag:"../padecimientos/edema.htm"
    },  {
        nombre: "angioedema",
        tit:"edema",
        pag:"../padecimientos/edema.htm"
    },  {
        nombre: "protozoo",
        tit:"ver parásitos",
        pag:"parasitos_i.htm"
    },  {
        nombre: "conjuntivitis",
        tit:"estafilococo aureus",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    },  {
        nombre: "endocarditis",
        tit:"válvula mitral",
        pag:"../padecimientos/valv-mitral.htm"
    },{
        nombre: "endocarditis",
        tit:"bartonella",
        pag:"../padecimientos/bartonella.htm"
    },  {
        nombre: "endocarditis",
        tit:"estafilococo e.",
        pag:"../padecimientos/estafilococo-epi.htm"
    },  {
        nombre: "endocarditis",
        tit:"estafilococo aureus +",
        pag:"../padecimientos/estafilococo_aureus_pos.htm"
    },  {
        nombre: "endocarditis",
        tit:"estreptococo b.",
        pag:"../padecimientos/estreptococo_bovis.htm"
    },  {
        nombre: "endocarditis",
        tit:"fiebre reumática",
        pag:"../padecimientos/f_reumatica.htm"
    },  {
        nombre: "endocarditis",
        tit:"serratias",
        pag:"../padecimientos/serratias.htm"
    },  {
        nombre: "peritonitis",
        tit:"apendicitis",
        pag:"../padecimientos/apendicitis.htm"
    },  {
        nombre: "peritonitis",
        tit:"divertículos",
        pag:"../padecimientos/diverticulos.htm"
    },  {
        nombre: "peritonitis",
        tit:"estreptococo pn.",
        pag:"../padecimientos/estreptococo_pn.htm"
    },  {
        nombre: "peritonitis",
        tit:"reservorios de toxinas",
        pag:"../padecimientos/residuos.htm"
    },   {
        nombre: "impétigo",
        tit:"estreptococo p.",
        pag:"../padecimientos/estrepto-pyogenes.htm"
    },  {
        nombre: "circadiano",
        tit:"estrés",
        pag:"../padecimientos/estres.htm"
    },  {
        nombre: "circadiano",
        tit:"vitiligo",
        pag:"../padecimientos/vitiligo.htm"
    },  {
        nombre: "circadiano",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "ciclos circadianos",
        tit:"sistema nerviosos autónomo",
        pag:"../padecimientos/sna.htm"
    },  {
        nombre: "ciclos circadianos",
        tit:"estrés",
        pag:"../padecimientos/estres.htm"
    },  {
        nombre: "ciclos circadianos",
        tit:"vitiligo",
        pag:"../padecimientos/vitiligo.htm"
    },  {
        nombre: "ciclos circadianos",
        tit:"cromosoma 17",
        pag:"../padecimientos/cromo-17.htm"
    },  {
        nombre: "miocarditis",
        tit:"bartonella",
        pag:"../padecimientos/bartonella.htm"
    },  {
        nombre: "miocarditis",
        tit:"coxsackie",
        pag:"../padecimientos/coxsackie.htm"
    },  {
        nombre: "miocarditis",
        tit:"fiebre reumática",
        pag:"../padecimientos/f_reumatica.htm"
    },  {
        nombre: "hiporexia",
        tit:"fasiolopsis burski",
        pag:"../padecimientos/fasiolopsis_b.htm"
    },  {
        nombre: "proteinuria",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    },  {
        nombre: "albuminuria",
        tit:"fiebre amarilla",
        pag:"../padecimientos/fiebre_ama.htm"
    },  {
        nombre: "uveitis",
        tit:"trastornos oculares",
        pag:"../padecimientos/oculares.htm"
    },  {
        nombre: "fisura",
        tit:"fractura",
        pag:"../padecimientos/fractura.htm"
    },  {
        nombre: "regeneración tisular",
        tit:"gen",
        pag:"../padecimientos/gen.htm"
    },  {
        nombre: "regeneración de tejidos",
        tit:"gen",
        pag:"../padecimientos/gen.htm"
    },  {
        nombre: "regeneración de órganos",
        tit:"gen",
        pag:"../padecimientos/gen.htm"
    },  {
        nombre: "zambo",
        tit:"genu valgo",
        pag:"../padecimientos/genu-valgo.htm"
    },  {
        nombre: "epiglotitis",
        tit:"haemophilus influenza",
        pag:"../padecimientos/haemophilus_i.htm"
    },  {
        nombre: "choque hipovolémico",
        tit:"hemorragias",
        pag:"../padecimientos/hemorragias.htm"
    },  {
        nombre: "hipovolémico",
        tit:"hemorragias",
        pag:"../padecimientos/hemorragias.htm"
    },  {
        nombre: "conjuntivitis",
        tit:"hepatitis n",
        pag:"../padecimientos/hepatitis_n.htm"
    },  {
        nombre: "herpes labial",
        tit:"herpes 4",
        pag:"../padecimientos/herpes4.htm"
    },  {
        nombre: "acalacia",
        tit:"hernia hiatal",
        pag:"../padecimientos/h-hiatal.htm"
    },  {
        nombre: "embarazo ectópico",
        tit:"htlv 1",
        pag:"../padecimientos/htlv1.htm"
    },  {
        nombre: "embarazo ectópico",
        tit:"htlv 2",
        pag:"../padecimientos/htlv2.htm"
    },  {
        nombre: "embarazo tubárico",
        tit:"Paty, embarazo ectópico",
        pag:"../padecimientos/paty.htm"
    },  {
        nombre: "embarazo tubárico",
        tit:"htlv 1",
        pag:"../padecimientos/htlv1.htm"
    },  {
        nombre: "embarazo tubárico",
        tit:"htlv 2",
        pag:"../padecimientos/htlv2.htm"
    },  {
        nombre: "embarazo ectópico",
        tit:"htlv 4",
        pag:"../padecimientos/htlv4.htm"
    },  {
        nombre: "intolerancia a la lactosa",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    },  {
        nombre: "lactosa",
        tit:"intolerancias alimentarias",
        pag:"../padecimientos/intolerancia_a.htm"
    },  {
        nombre: "diabetes gestacional",
        tit:"diabetes",
        pag:"../padecimientos/diabetes.htm"
    },  {
        nombre: "diabetes gestacional",
        tit:"klebsiella",
        pag:"../padecimientos/klepsiela_pn.htm"
    },  {
        nombre: "policitemia",
        tit:"Lucio",
        pag:"../padecimientos/lucio.htm"
    },  {
        nombre: "tuberculosis",
        tit:"m. bovis",
        pag:"../padecimientos/m_bovis.htm"
    },  {
        nombre: "bismuto",
        tit:"magda",
        pag:"../padecimientos/magda.htm"
    },  {
        nombre: "mutación genética",
        tit:"mariquita",
        pag:"../padecimientos/mariquita.htm"
    },  {
        nombre: "trastornos genéticos",
        tit:"mariquita",
        pag:"../padecimientos/mariquita.htm"
    },  {
        nombre: "trastorno genético",
        tit:"mariquita",
        pag:"../padecimientos/mariquita.htm"
    },  {
        nombre: "climaterio",
        tit:"menopausia",
        pag:"../padecimientos/menopausia.htm"
    },  {
        nombre: "bochornos",
        tit:"menopausia",
        pag:"../padecimientos/menopausia.htm"
    },  {
        nombre: "neutropenia",
        tit:"m. avium",
        pag:"../padecimientos/microbac-avium.htm"
    },  {
        nombre: "dermatofitosis",
        tit:"microsporum c.",
        pag:"../padecimientos/microsporum_c.htm"
    },  {
        nombre: "anorexia",
        tit:"morganella t.",
        pag:"../padecimientos/morganella_t.htm"
    },  {
        nombre: "odinofagia",
        tit:"mycoplasma pn.",
        pag:"../padecimientos/mycoplasma_pn.htm"
    }, {
        nombre: "piuría",
        tit:"neiseria g.",
        pag:"../padecimientos/neiseria_g.htm"
    },  {
        nombre: "ascariasis",
        tit:"nematodo",
        pag:"../padecimientos/nematodo.htm"
    },  {
        nombre: "pulmonía",
        tit:"neumonía",
        pag:"../padecimientos/neumonia.htm"
    },  {
        nombre: "entumecimiento",
        tit:"neuropatía periférica",
        pag:"../padecimientos/neuropatia_perif.htm"
    },  {
        nombre: "borderline",
        tit:"neurosis",
        pag:"../padecimientos/neurosis.htm"
    },  {
        nombre: "conjuntivitis",
        tit:"new castle",
        pag:"../padecimientos/newcastle.htm"
    },  {
        nombre: "hipoxia",
        tit:"new castle",
        pag:"../padecimientos/newcastle.htm"
    },   {
        nombre: "hipoxia",
        tit:"sufrimiento fetal",
        pag:"../padecimientos/sufrimiento_f.htm"
    },  {
        nombre: "salpullido",
        tit:"virus del nilo",
        pag:"../padecimientos/nilo.htm"
    },  {
        nombre: "palpitaciones",
        tit:"Ana alicia, taquicardia",
        pag:"../padecimientos/"
    }, {
        nombre: "palpitaciones",
        tit:"disfunción parasimática",
        pag:"../padecimientos/parasimpatico.htm"
    }, {
        nombre: "hipocalcemia",
        tit:"paratiroides, disfunción",
        pag:"../padecimientos/paratiroides_disf.htm"
    },  
    ]; 
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    const busqueda = document.getElementById('search').value.toLowerCase().split('').map( letra => acentos[letra] || letra).join('');
    const resul = document.getElementById('find');
    resul.innerHTML="";
    var n = 0;
    for(let name of arreglo){

        let nombre = name.nombre.toLowerCase().split('').map( letra => acentos[letra] || letra).join('');
        if(nombre.indexOf(busqueda) !== -1){
            if(primer(nombre)===primer(busqueda)){
                n++;
                resul.innerHTML += `<div onClick='cerrar("${name.pag}");' onmouseover='window.open("${name.pag}","buscados");' class="resultado">${prime(name.tit)}</a></div>` ;
            }                
        }
    }
    if(n==0){
        resul.innerHTML=` No hay resultados` ; 
    }

}
function bor(){
    document.getElementById('search').value = '';
    document.getElementById('find').innerHTML="";
}
function cerrar(pag){
    window.open(pag,"_top");
    closeBuscar();
}
//mostra-ocultar buscar
function openBuscar() {
    document.getElementById("buscar").style.display = "block";
}

function closeBuscar() {        
    document.getElementById("buscar").style.display = "none";       
    document.getElementById("buscar").style.transitionDelay = "1000";
}


// JavaScript Document
/*Bloquear copiar textos*/
document.onkeydown = function() {
    if (window.event) {
        if ((window.event.keyCode >= 117) && (window.event.keyCode <= 123)) {
            //Bloquear Backspace
            //Bloquear Teclas Fxx (excepto F1)
            window.event.cancelBubble = true;

            window.event.returnValue = false;
            return false;
        }
    }

    if (event.altLeft) {
        if ((window.event.keyCode == 37) || (window.event.keyCode == 39)) {
            //Bloquear Alt + Cursor Izq/Der.
            return false;
        }
    }



    //alert(window.event.keyCode);
    return true;

}

function queryBlue() {
    document.querySelector("link[href='CSS2.css']").href = "CSS02blue.css";
}

function disableselect(e) {
    return false
}

function reEnable() {
    return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}

clabHack = 0;
document.oncontextmenu = function() { return false }

function right(e) {
    if (navigator.appName == 'Netscape') {
        if (e.which == 3 || e.which == 2) {
            alert("Aqui no puedes utilizar el botón izquierdo del mouse...");
            for (i = 0; i != clabHack; i++) alert("Ya te lo habia advertido, ahora te penalizaré con \n                 " + (clabHack - i) + "\n              clicks !!!...");
                clabHack += 10;
            alert("La proxima vez que lo hagas será peor !!!");
            return false;
        }
    }
    if (navigator.appName == 'Microsoft Internet Explorer') {
        if (event.button == 2 || event.button == 3) {
            alert("Aqui no puedes utilizar el botón derecho del mouse...");
            for (i = 0; i != clabHack; i++) alert("Ya te lo habia advertido, ahora te penalizaré con \n                 " + (clabHack - i) + "\n              clicks !!!...");
                clabHack += 10;
            alert("La proxima vez que lo hagas será peor !!! ");
            return false;
        }
    }
    return true;
}
document.onmousedown = left;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
window.onmousedown = left;

function myFunction2() {
    var x = document.getElementById('myDIV2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function MM_swapImgRestore() { //v3.0
    var i, x, a = document.MM_sr;
    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() { //v3.0
    var d = document;
    if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length,
        a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) {
                d.MM_p[j] = new Image;
                d.MM_p[j++].src = a[i];
            }
        }
    }

function MM_findObj(n, d) { //v4.01
    var p, i, x;
    if (!d) d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
        for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document);
            if (!x && d.getElementById) x = d.getElementById(n);
        return x;
    }

function MM_swapImage() { //v3.0
    var i, j = 0,
    x, a = MM_swapImage.arguments;
    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;
            x.src = a[i + 2];
        }
    }


    /*Mostrar Menu lateral*/

    $(".submenu").click(function() {
        $(this).children("ul").slideToggle();
    })

    $("ul").click(function(ev) {
        ev.stopPropagation();
    })



    <!--
    function toggle_visibility(id) {
        var e = document.getElementById(id);
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    }




    function show_menu(id) {
        document.getElementById(id).style.display = 'block';
    }

    function hide_menu(id) {
        document.getElementById(id).style.display = 'none';
        document.getElementById(id).style.transitionDelay = "1000";
    }

//div de pacientes cortina

function toggle_height(id) {
    var e = document.getElementById(id);
    if (e.style.height == '0%')
        e.style.height = '90%';
    else
        e.style.height = '0%';
}

//Abrir/cerrar temas laterales

function openTemas() {
    document.getElementById("mastemas").style.height = "auto";
    document.getElementById("mastemas").style.display = "block";
}

function closeTemas() {
    document.getElementById("mastemas").style.height = "0";
    document.getElementById("mastemas").style.display = "none";
}

//div de pacientes cambio de altura

document.querySelector('#button').addEventListener('click', function() {
    document.querySelector('.text').classList.toggle('max');
});


function ocultar() {
    document.getElementById('uno').style.display = 'none';
}

function mostrar() {
    document.getElementById('uno').style.display = 'block';
}

function ocultarPares() {
    document.getElementById('pares').style.display = 'none';
}

function mostrarPares() {
    document.getElementById('pares').style.display = 'block';
}

function masPares() {
    document.getElementById('par2').style.display = 'block';
}

function disabletext(e) {
    return false
}

function reEnable() {
    return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
    document.onmousedown = disabletext
    document.onclick = reEnable
}

function cambio(link){
    var cam = document.getElementById("pares");
    cam.src = link;    
}




// *** SWITCH ESTILOS ***

// JavaScript Document

//Cambiar colores y CSS link;

function colorBlue() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/blue.css');
    localStorage.href = 'CSS/blue.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos Azul");   
    location.reload();
    
}

function colorVerde() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/verde.css');
    localStorage.href = 'CSS/verde.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos Verde");
    location.reload();
    
    
}

function colorRojo() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/rojo.css');
    localStorage.href = 'CSS/rojo.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos de Siena");
    location.reload();
    
}

function colorPurple() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/purple.css');
    localStorage.href = 'CSS/purple.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos de Púrpura");
    location.reload();
    
}

function colorMetal() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/metal.css');
    localStorage.href = 'CSS/metal.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos Metal");  
    location.reload();
    
    
}

function colorNight() {
    var link = document.getElementById('CSS-main');
    link.setAttribute('href', 'CSS/night.css');
    localStorage.href = 'CSS/night.css';
    alert("Cambiaste la Guía de Biomagnetismo a tonos de Noche");
    location.reload();
    
}

//Cambiar la nueva CSS al cargar cada página

function nuevoCss(){    
    var css;
    css = localStorage.href;
    if (css) {          
        document.getElementById("CSS-main").setAttribute('href', css);              
    }
    
    //verificar pacientes
    if(localStorage.pagpac){
        document.getElementById("ifrpac").src = localStorage.pagpac;
    }else{
        localStorage.setItem('pagpac', 'pacientes/index.html');
        document.getElementById("ifrpac").src = localStorage.pagpac;
    }
    if(localStorage.openpac){
        if(localStorage.openpac === "sip"){
            document.getElementById("ifrpac").src = localStorage.pagpac;
            abrir_pacientes1();
        }else{
            if(localStorage.openpac === "sip"){
                document.getElementById("ifrpac").src = localStorage.pagpac;
                abrir_pacientes2();
            }
        }
    }else{
        localStorage.setItem('openpac', 'no');
    }
}

//Crear Cookies

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}



// Menu pacientes PC
function abrir_pacientes1() {
    document.getElementById("divbmobile").style.width = "42%";
    document.getElementById("barra-menu").style.paddingLeft = "10px";
    document.getElementById("btn-pacientes").style.display = "block";          
    document.getElementById("anchura").style.marginLeft = "10px";
    document.getElementById("anchura").style.width = "60%"; 
    localStorage.openpac = "sip";

}
 // cerrar pacientes PC  
 function cerrar_pacientes1() {
    document.getElementById("divbmobile").style.width = "0px";
    document.getElementById("barra-menu").style.paddingLeft = "15%";            
    document.getElementById("btn-pacientes").style.display = "none";
    document.getElementById("anchura").style.marginLeft = "15%";
    document.getElementById("anchura").style.width = "100%"; 
    localStorage.openpac = "no";

}

// Menu pacientes Cel
function abrir_pacientes2() {
    document.getElementById("divbmobile").style.width = "90%";          
    document.getElementById("btn-pacientes2").style.display = "block";       
    localStorage.openpac = "sic";

}
 // cerrar pacientes Cel  
 function cerrar_pacientes2() {
    document.getElementById("divbmobile").style.width = "0px";
    document.getElementById("btn-pacientes2").style.display = "none";
    localStorage.openpac = "no";

}
