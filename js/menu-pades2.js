document.write(`
		<!-- Cel-Bar --> 
	
		<!-- Cel-Bar --> 
<div class="menu-cel">    
<header class="scroll">    
  <nav>   
  <a href="index2.htm" style="margin-left: 15px;">Home</a>
  <a href="padecimientos.htm">Búsqueda sintomática</a>
  <a href="listas/0-listas-cel.htm">Clasificación</a>
  <a href="rastreos/0-rastreos-cel.htm">Niveles Rastreo</a>
<a href="tutorial/0-tutorial-cel.htm">Tutorial</a> 
      <a href="buscar.htm"><img src="iconos/menu-lupita.png" width="22" alt=""/> Buscar</a>
      <a href="#" onclick="toggle_visibility('colores');"> <img src="iconos/ajustes.png" width="22" alt=""/> Colores</a> 
      <a href="#" onclick="abrir_pacientes2('divbmobile');"><img src="iconos/registros.png" width="22" alt=""/> Pacientes</a>
  </nav>
</header>
    <div class="cel-head"><img src="graficos/logo1b.png" width="220px" style="position:absolute; top:12px; left: 15px; z-index:9999;" alt=""/>
    <div class="adorno" style="width:182px"></div></div>
    </div>

			<!-- Menu-Controles -->
			<div class="menu-top2" id="menu-top2">

				<div id="opcion-a" class="btn-menu-top"><a href="buscar.htm" target="_self"><img src="iconos/menu-lupita.png" height="22px" alt=""/></a></div>
				<div id="top-a">Buscar</div>
				<div id="opcion-b" class="btn-menu-top"><a href="#" onclick="toggle_visibility('colores');"><img src="iconos/ajustes.png" height="22px" alt=""/></a></div>
				<div id="top-b" style="margin-left:15px">Colores:</div>
				<!-- pacientes boton -->		
				<div id="opcion-c" class="btn-menu-top"><a href="#" onclick="abrir_pacientes2('divbmobile');"><img id="start_img2" src="iconos/registros.png" height="22px" alt=""></a></div>
				<div id="top-c" style="margin-left:50px">mostrar Pacientes</div>

<div class="bot-mastemas" ><a href="#" onclick="toggle_visibility('mastemas');" class="mastemas"><img src="../iconos/mas-temas.png" height="100" style="margin-left:-70px" alt=""/></a></div>
			</div>
					
		
		<!-- menu lateral celular -->
		<div  id="iframe-celbar" class="iframe-celbar">			
			<ul  class="acel" id="acel">		
				<li id="opcion4"><a href="index.htm" target="_self"><img src="iconos/menu-home1.png" width="35px" alt=""/> Home</a></li>    
				
				<li id="opcion5"><a href="padecimientos.htm" target="_self"><img src="iconos/menu-pades1.png" width="35px" alt=""/> Búsqueda sintomática</a></li>
				
				<li id="opcion6"><a href="#opcion6"><img src="iconos/menu-listas1.png" width="35px" alt=""/> Clasificación</a>		
					<ul id="menu6" style="margin-top:-50px">			   
					<li><a href="listas/bacterias.htm" target="_self">Bacterias</a></li>
					<li><a href="listas/virus.htm" target="_self">Virus</a></li>
					<li><a href="listas/hongos.htm" target="_self">Hongos</a></li>
					<li><a href="listas/parasitos.htm" target="_self">Parásitos</a></li>
<li><a href="listas/emocionales.htm" target="_self">Emocionales</a></li>
<li><a href="listas/especiales.htm" target="_self">Especiales</a></li>			
					<li><a href="listas/disfuncionales.htm" target="_self">Disfuncionales</a></li>
					<li><a href="listas/reservorios.htm" target="_self">Reservorios</a></li> 
                    <li><a href="listas/milpares.htm" target="_self">Mil pares</a></li>
					<li><a href="listas/mas-pares.htm" target="_self">Más listas...</a></li>	
					</ul>
					
				</li> 

				<li id="opcion7"><a href="#opcion7"><img src="iconos/menu-protocolos1.png" width="35px" alt=""/> Niveles Rastreo</a>
					<ul id="menu7" style="margin-top:-85px">		
						<li style="background:hsla(213,26%,44%,0.74);"><a href="rastreos/protocolos.htm" target="_self">Niveles Rastreo</a></li>
						<li><a href="rastreos/r_basico.htm" >Básico</a></li>
						<li><a href="rastreos/r_cabeza1.htm" >Por zonas</a></li>
<li><a href="rastreos-a/r_cabeza.htm" >Completo: x listas</a></li>
						<li><a href="rastreos/r_avanzado.htm" >Avanzado</a></li>
						<li><a href="rastreos/protocolos.htm" >Más protocolos...</a></li>
					</ul>
				</li>		
				<li id="opcion8"><a href="#opcion8"><img src="iconos/menu-tutorial1.png" width="35px" alt=""/> Tutorial</a>
					<ul id="menu8" style="margin-top:-125px">
						<li style="background:hsla(213,26%,44%,0.74);"><a href="tutorial/tutorial.htm" target="_self">Tutorial</a></li>
						<li><a href="tutorial/puntos.htm" target="_self">Atlas de Puntos</a></li>
						<li><a href="tutorial/par.htm" target="_self">Principios</a></li>
						<li><a href="tutorial/tratamiento.htm" target="_self">Tratamiento</a></li>    
						<li><a href="tutorial/pares-clasif.htm" target="_self">Clasificación de pares</a></li>	
					</ul> 
				</li>	
			</ul>
			</div>
			</div>
			<!-- Colores -->
			<div class="colores oculto" id="colores" onclick="toggle_visibility('colores');">
				<p style="font-family: Gotham, 'Helvetica Neue', Helvetica, Arial, 'sans-serif';color:#3E3D3D;font-size: 14px; font-weight: 600">Ambientes:</p>
				<a href="#" onclick="colorMetal('CSS/metal.css', 0);"><p class="botonc" style="background-color: #515C68; color:#fff">Montaña</p></a>

				<a href="#" onclick="colorVerde('CSS/verde.css', 0);" ><p class="botonc" style="background-color: #2E8271; color:#fff">Bosque</p></a>

				<a href="#" onclick="colorBlue('CSS/azul.css', 0);" ><p class="botonc" style="background-color: #0364D8; color:#fff">Oceano</p></a>

				<a href="#" onclick="colorRojo('CSS/rojo.css', 0);" ><p class="botonc" style="background-color: #722F1F; color:#fff">Sabana</p></a>

				<a href="#" onclick="colorPurple('CSS/purple.css', 0);" ><p class="botonc" style="background-color: #6906BD; color:#fff">Selva</p></a>
				<a href="#" onclick="colorNight('CSS/night.css', 0);" ><p class="botonc" style="background-color: #283B66; color:#fff">Polar</p></a>
			</div>	
			
			<!-- pacientes iframe-->
			<div id="divbmobile" class="divbmobile">
				<div id="btn-pacientes" class="btn-pacientes"><a href="#" class="cerrar-btn" onclick="cerrar_pacientes1('divbmobile');" style="color:#fff;">x</a></div>
				<div id="btn-pacientes2" class="btn-pacientes2"><a href="#" class="cerrar-btn" onclick="cerrar_pacientes2('divbmobile');" style="color:#fff;">x</a></div>	
				<iframe src="#" name="pacientes" id="ifrpac" scrolling="yes" frameborder="0"
				style="position: absolute; overflow: scroll; height:100%; width:100%; top:-8px;"></iframe>	
			</div>
			
			<!-- Cabeza PC-->
			<div class="pc-cabeza">
				<div class="header" id="header">
					<img src="graficos/logo-txt.png" id="logo-cab" 
					style="height:90%; max-width:60%; float:left; margin-left: 15px; z-index:555" alt=""/></div>
					<div class="adorno" id="adorno" alt=""></div>
					<!-- Menu-Bar -->
					<div class="barra-menu" width="100%" id="barra-menu">
<ul  class="acorh">	
<li><a href="index.htm">Home</a></li>
<li class="m-active"><a href="padecimientos.htm" style="color:#777">Búsqueda sintomática</a></li>

				<li id="opcion1"><a href="#opcion1" onclick="toggle_visibility('menu1');" onmouseover="big_menu();" onmouseout="short_menu();">Clasificación</a>		
<ul id="menu1" class="oculto">
				<li><a href="listas/bacterias.htm" target="_self">Bacterias</a></li>
				<li><a href="listas/virus.htm" target="_self">Virus</a></li>
				<li><a href="listas/hongos.htm" target="_self">Hongos</a></li>
				<li><a href="listas/parasitos.htm" target="_self">Parásitos</a></li>
<li><a href="listas/emocionales.htm" target="_self">Emocionales</a></li>
<li><a href="listas/especiales.htm" target="_self">Especiales</a></li>			
<li><a href="listas/disfuncionales.htm" target="_self">Disfuncionales</a></li>
<li><a href="listas/reservorios.htm" target="_self">Reservorios</a></li> 
<li><a href="listas/milpares.htm" target="_self">Mil pares</a></li><li><a href="listas/mas-pares.htm" target="_self">Más listas...</a></li>	
</ul>		
</li>
<li id="opcion2" onmouseover="big_menu();" onmouseout="short_menu();"><a href="#opcion2"  onclick="toggle_visibility('menu2');">Niveles Rastreo</a>		
<ul id="menu2" class="oculto">
<li><a href="rastreos/r_basico.htm" >Esencial: 173 puntos</a></li>
<li><a href="rastreos/r_cabeza1.htm" >Completo: x zonas</a></li>
<li><a href="rastreos/r_avanzado.htm" >Avanzado: 2° Nivel</a></li>
<li><a href="rastreos/protocolos.htm" >Más protocolos...</a></li>	</ul>		
</li>	
<li id="opcion3"><a href="#opcion3" onclick="toggle_visibility('menu3');">Tutorial</a>		
<ul id="menu3" class="oculto">
<li><a href="tutorial/tutorial.htm" >Tutorial</a></li>
<li><a href="tutorial/par.htm" >Principios</a></li>
<li><a href="tutorial/tratamiento.htm" >Tratamiento</a></li>
<li><a href="tutorial/puntos.htm" >Atlas de Puntos</a></li>		   
</ul>		
</li>	
</ul>
<!-- Menu-Controles -->
<div class="menu-top" id="menu-top">

<div id="opcion-a" class="btn-menu-top"><a href="buscar.htm" target="_self"><img src="iconos/menu-lupita.png" height="22px" alt=""/></a></div>
<div id="top-a">Buscar</div>
<div id="opcion-b" class="btn-menu-top"><a href="#" onclick="toggle_visibility('colores');"><img src="iconos/ajustes.png" height="22px" alt=""/></a></div>
<div id="top-b" style="margin-left:15px">Colores:</div>
<!-- pacientes boton -->		
<div id="opcion-c" class="btn-menu-top"><a href="#" onclick="abrir_pacientes1('divbmobile');"><img id="start_img2" src="iconos/registros.png" height="22px" alt=""></a></div>
<div id="top-c" style="margin-left:50px">mostrar Pacientes</div>
<div class="bot-mastemas" ><a href="#" onclick="toggle_visibility('mastemas');" class="mastemas"><img src="../iconos/mas-temas.png" height="100" style="margin-left:-70px" alt=""/></a></div>
</div>
</div>					
</div>
</div>
	`);

function toggle_menu3(id) {
    var e = document.getElementById(id);
    if (e.style.marginLeft == '-205px' || e.style.marginLeft == '') {
        document.getElementById("iframe-celbar").style.marginLeft = "-5px";
        document.getElementById('btn-menu-img').src = "graficos/menu_cab2.gif";
    } else {
        document.getElementById("iframe-celbar").style.marginLeft = "-205px";
        document.getElementById('btn-menu-img').src = "graficos/menu_cab.gif";
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').style.height = "50px";
        document.getElementById('logo-cab').src = "graficos/logo1b.png";
        document.getElementById('logo-cab').style.padding = "3px";
        document.getElementById('barra-menu').style.marginTop = "50px";
        document.getElementById('menu-top').style.marginTop = "-92px";
        document.getElementById('adorno').style.opacity = "0";
    } else {
        document.getElementById('header').style.height = "150px";
        document.getElementById('logo-cab').src = "graficos/logo-txt.png";
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
    scrollFunction() |
        scrollTop()
};