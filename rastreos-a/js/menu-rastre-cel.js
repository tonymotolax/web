document.write(`
		<!-- Cel-Bar --> 
		<div class="barra-menu2" style="display:block">            
			<div class="menu-cab-bn" id="menu-btn" onclick="toggle_menu3('iframe-celbar');"><a href="#"><img src="../graficos/menu_cab.gif" width="34px" id="btn-menu-img"></a></div>			
			<!-- Menu-Controles -->
			<div class="menu-top2" id="menu-top2">

				<div id="opcion-a" class="btn-menu-top"><a href="../buscar.htm" target="_self"><img src="../iconos/menu-lupita.png" height="22px" alt=""/></a></div>
				<div id="top-a">Buscar2</div>
				<div id="opcion-b" class="btn-menu-top"><a href="#" onclick="toggle_visibility('colores');"><img src="../iconos/ajustes.png" height="22px" alt=""/></a></div>
				<div id="top-b" style="margin-left:15px">Cambiar colores</div>
				<!-- pacientes boton -->		
				<div id="opcion-c" class="btn-menu-top"><a href="#" onclick="abrir_pacientes2('divbmobile');"><img id="start_img2" src="../iconos/registros.png" height="22px" alt=""></a></div>
				<div id="top-c" style="margin-left:50px">mostrar Pacientes</div>
			</div>
		</div>
		<div class="cel-bar"> 
			<!-- logo celular -->
			<div class="logo-fondo tablet-show"><img src="../graficos/logo1b.png" width="160px" alt=""/></div>
			<div class="logo-fondo cel-show"><img src="../graficos/logo-ch.png" height="40px" alt=""/></div>
		</div>
		<!-- menu lateral celular -->
		<div  id="iframe-celbar" class="iframe-celbar">			
			<ul  class="acel" id="acel">		
				<li id="opcion4"><a href="../index.html" target="_self"><img src="../iconos/menu-home1.png" width="35px" alt=""/></a></li>    
				
				<li id="opcion5"><a href="../padecimientos.htm" target="_self"><img src="../iconos/menu-pades1.png" width="35px" alt=""/></a></li>
				
				<li id="opcion6"><a href="#opcion6"><img src="../iconos/menu-listas1.png" width="35px" alt=""/></a>		
					<ul id="menu6">			   
						<li><a href="bacterias.htm" target="_self">Bacterias</a></li>
						<li><a href="virus.htm" target="_self">Virus</a></li>
						<li><a href="hongos.htm" target="_self">Hongos</a></li>
						<li><a href="parasitos.htm" target="_self">Parásitos</a></li>
<li><a href="emocionales.htm" target="_self">Emocionales</a></li>
<li><a href="especiales.htm" target="_self">Especiales</a></li>			 
						<li><a href="disfuncionales.htm" target="_self">Disfuncionales</a></li>
						<li><a href="reservorios.htm" target="_self">Reservorios</a></li> 
						<li><a href="mas-pares.htm" target="_self">Más listas...</a></li>
					</ul>
					
				</li> 

				<li id="opcion7"><a href="#opcion7"><img src="../iconos/menu-protocolos1.png" width="35px" alt=""/></a>
					<ul id="menu7">		
						<li style="background:hsla(213,26%,44%,0.74);"><a href="../rastreos/protocolos.htm" target="_self">Protocolos <img src="../graficos/arrow-right.png" width="10" height="10" alt=""/></a></li>
						<li><a href="../rastreos/r_basico.htm" >Esencial: 173 puntos</a></li>
						<li><a href="../rastreos/r_cabeza.htm" >Completo: x zonas</a></li>
						<li><a href="../rastreos/r_avanzado.htm" >Avanzado: 2° Nivel</a></li>
						<li><a href="../rastreos/protocolos.htm" >Más protocolos...</a></li>
					</ul>
				</li>		
				<li id="opcion8"><a href="#opcion8"><img src="../iconos/menu-tutorial1.png" width="35px" alt=""/></a>
					<ul id="menu8">
						<li style="background:hsla(213,26%,44%,0.74);"><a href="../tutorial/tutorial.htm" target="_self">Tutorial</a></li>
						<li><a href="../tutorial/puntos.htm" target="_self">Atlas de Puntos</a></li>
						<li><a href="../tutorial/par.htm" target="_self">Qué es el Par B.M.?</a></li>
						<li><a href="../tutorial/tratamiento.htm" target="_self">Tratamiento</a></li>    
						<li><a href="../tutorial/pares-clasif.htm" target="_self">Clasificación de pares</a></li>	
					</ul> 
				</li>	
			</ul></div>		
			<!-- Colores -->
			<div class="colores oculto" id="colores" onclick="toggle_visibility('colores');">
				<p style="font-family: Gotham, 'Helvetica Neue', Helvetica, Arial, 'sans-serif';color:#3E3D3D;font-size: 14px; font-weight: 600">COLORES:</p>
				<a href="#" onclick="colorMetal('CSS/metal.css', 0);"><p class="botonc" style="background-color: #515C68; color:#fff">METAL</p></a>

				<a href="#" onclick="colorVerde('CSS/verde.css', 0);" ><p class="botonc" style="background-color: #2E8271; color:#fff">VERDE</p></a>

				<a href="#" onclick="colorBlue('CSS/azul.css', 0);" ><p class="botonc" style="background-color: #0364D8; color:#fff">AZUL</p></a>

				<a href="#" onclick="colorRojo('CSS/rojo.css', 0);" ><p class="botonc" style="background-color: #722F1F; color:#fff">SIENA</p></a>

				<a href="#" onclick="colorPurple('CSS/purple.css', 0);" ><p class="botonc" style="background-color: #6906BD; color:#fff">PURPURA</p></a>
				<a href="#" onclick="colorNight('CSS/night.css', 0);" ><p class="botonc" style="background-color: #283B66; color:#fff">NOCHE</p></a>
			</div>	
			<!-- pacientes iframe-->
			<div id="divbmobile" class="divbmobile">
				<div id="btn-pacientes" class="btn-pacientes"><a href="#" class="cerrar-btn" onclick="cerrar_pacientes1('divbmobile');" style="color:#fff;">x</a></div>
				<div id="btn-pacientes2" class="btn-pacientes2"><a href="#" class="cerrar-btn" onclick="cerrar_pacientes2('divbmobile');" style="color:#fff;">x</a></div>	
				<iframe src="#" name="pacientes" id="ifrpac" scrolling="yes" frameborder="0"
				style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px;"></iframe>	
			</div>
			
	`);

function toggle_menu3(id) {
				console.log('Global');
				var e = document.getElementById(id);
				console.log(e.style.width);
				if (e.style.width == '0px' || e.style.width == '' ){
					document.getElementById("iframe-celbar").style.width = "210px";
					document.getElementById('btn-menu-img').src="../graficos/menu_cab2.gif";
					console.log('funciona1');
					document.getElementById("main-page").style.paddingLeft = "75px";
				}else{
					document.getElementById("iframe-celbar").style.width = "0px";
					document.getElementById('btn-menu-img').src = "../graficos/menu_cab.gif";
					console.log('funciona2');
					document.getElementById("main-page").style.paddingLeft = "15px";
				}
			}

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById('header').style.height = "50px";
		document.getElementById('logo-cab').src = "../graficos/logo1b.png";
		document.getElementById('logo-cab').style.padding = "3px";
		document.getElementById('barra-menu').style.marginTop = "50px";
		document.getElementById('menu-top').style.marginTop = "-92px";
		document.getElementById('adorno').style.opacity = "0";
	} else {
		document.getElementById('header').style.height = "150px";
		document.getElementById('logo-cab').src = "../graficos/logo-txt.png";
		document.getElementById('logo-cab').style.padding = "0px";
		document.getElementById('barra-menu').style.marginTop = "150px";
		document.getElementById('menu-top').style.marginTop = "10px";
		document.getElementById('adorno').style.opacity = "1.0";
	}
}

function scrollTop() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById('btn-top').style.display = "block";		
	} else {
		document.getElementById('btn-top').style.display = "none";	
	}
}
window.onscroll = function() {
	scrollFunction()
|	scrollTop() }; 