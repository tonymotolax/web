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

let uli = new URLSearchParams(location.search);
var ido = uli.get('id');

function start() {
    var recog = false;
    if (activo) {
        escucha.src = '../iconos/bocina.gif';
        escucha.value= 'Asistente';
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
            escucha.src = '../iconos/menu-bocina.gif';
            escucha.value= 'Escuchando';
            activo = true;
            reconocimiento.start();
            reconocimiento.onresult = (event) => {
                var resultadoEscucha = event.results[0][0].transcript;


                var str = resultadoEscucha;
                console.log(str);
                var res = str.split(" ");

                //comandos a ocupar
                if (str.toLowerCase() === 'nuevo paciente') {
                    console.log('Abrir');
                    window.open("insertar.html","_self");
                    recog = true;
                }

                if (str.toLowerCase() === 'nueva sesión') {
                    console.log('Abrir');
                    if(ido){
                        window.open("nueva.html?id=" + ido,"_self");
                    }else{
                        speech.text = 'Para crear una nueva sesión debes abrir el archivo del paciente';
                        window.speechSynthesis.speak(speech); 
                    }
                    
                    recog = true;
                }

                if (str.toLowerCase() === 'nueva sesion') {
                    console.log('Abrir');
                    if(ido){
                        window.open("nueva.html?id=" + ido,"_self");
                    }else{
                        speech.text = 'Para crear una nueva sesión debes abrir el archivo del paciente';
                        window.speechSynthesis.speak(speech); 
                    }
                    
                    recog = true;
                }

                if (res[0].toLowerCase() === 'agregar') {
                    var com = res.splice(2, res.length);
                    var value = com.join(" ");
                    var coma = res.splice(3, res.length);
                    var valuen = coma.join(" ");
                    var agre=false;
                    if(res[1].toLowerCase()==='nombre'){
                        agre=true;
                        document.getElementById('aa').value = value;
                    }
                    if(res[1].toLowerCase()==='apellido'){
                        agre=true;
                        document.getElementById('bb').value = value;
                    }
                    if(res[1].toLowerCase()==='direccion'){
                        agre=true;
                        document.getElementById('cc').value = value;
                    }
                    if(res[1].toLowerCase()==='código'){
                        agre=true;
                        document.getElementById('dd').value = valuen;
                    }
                    if(res[1].toLowerCase()==='ciudad'){
                        agre=true;
                        if(document.getElementById('ff').name === 'ciudad'){
                            document.getElementById('ff').value = value;
                        }else{
                          document.getElementById('ee').value = value;  
                      }
                    }
                    if(res[1].toLowerCase()==='telefono'){
                        agre=true;
                        document.getElementById('hh').value = value;
                    }
                    if(res[1].toLowerCase()==='edad'){
                        agre=true;
                        document.getElementById('jj').value = value;
                    }
                    if(res[1].toLowerCase()==='estatura'){
                        agre=true;
                        document.getElementById('kk').value = value;
                    }
                    if(res[1].toLowerCase()==='peso'){
                        agre=true;
                        document.getElementById('mm').value = value;
                    }
                    if(res[1].toLowerCase()==='observaciones'){
                        agre=true;
                        document.getElementById('ff').value = value;
                    }
                    if(res[1].toLowerCase()==='cuántos'){
                        agre=true;
                        document.getElementById('oo').value = valuen;
                    }
                    if(res[1].toLowerCase()==='cuantos'){
                        agre=true;
                        document.getElementById('oo').value = valuen;
                    }
                    if(res[1].toLowerCase()==='sistole'){
                        agre=true;
                        document.getElementById('vv').value = value;
                    }
                    if(res[1].toLowerCase()==='sístole'){
                        agre=true;
                        document.getElementById('vv').value = value;
                    }
                    if(res[1].toLowerCase()==='diástole'){
                        agre=true;
                        document.getElementById('ww').value = value;
                    }
                    if(res[1].toLowerCase()==='síntomas'){
                        agre=true;
                        document.getElementById('bbb').value = value;
                    }
                    if(res[1].toLowerCase()==='país'){
                        agre=true;
                        if(document.getElementById('ee').name === 'pais'){
                            document.getElementById('ee').value = value;
                        }else{
                          document.getElementById('dd').value = value;  
                      }

                  }                    
                  if(res[1].toLowerCase()==='par'){
                    agre=true;
                    document.getElementById('aa').value = value;
                }
                if(res[1].toLowerCase()==='patogeno'){
                    agre=true;
                    document.getElementById('bb').value = value;
                }
                if(res[1].toLowerCase()==='patógeno'){
                    agre=true;
                    document.getElementById('bb').value = value;
                }
                if(res[1].toLowerCase()==='padecimiento'){
                    agre=true;
                    document.getElementById('bb').value = value;
                }
                if(agre === false){
                    speech.text = 'El campo' + res[1].toLowerCase() + 'no se ha encontrado';
                    window.speechSynthesis.speak(speech);
                }

                recog = true;

            }

                //que tan bien esta el reconocimiento
                console.log('Confidencial: ' + event.results[0][0].confidence);


                //despues de detectar comando
                if (recog === false) {
                    speech.text = 'El comando' + resultadoEscucha + 'no se ha reconocido';
                    window.speechSynthesis.speak(speech);
                    console.log('Ha fallado algo');
                    escucha.src = '../iconos/bocina.gif';
                    escucha.value= 'Asistente';
                    activo = false;
                }
            }


            reconocimiento.onspeechend = (event) => {
                reconocimiento.stop();
                console.log('Ha dejado de escuchar el microfono');
                escucha.src = '../iconos/bocina.gif';
                escucha.value= 'Asistente';
                activo = false;
            }

            reconocimiento.onerror = (event) => {
                speech.text = 'Algo ha fallado, revisa la configuración de tu micrófono';
                window.speechSynthesis.speak(speech);
                textError.textContent = 'Algo fallo intentalo de nuevo';
                console.log('error' + event.error);
                escucha.src = '../iconos/bocina.gif';
                escucha.value= 'Asistente';
                activo = false;
            }


        }
    }
}

escucha.addEventListener('click', inicio);