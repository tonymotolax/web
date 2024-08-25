document.write(`
		<div class="cel-bar">
			<!-- Botón menú lateral -->
			<div class="menu-cab-bn" id="menu-btn"><a href="#" onclick="toggle_menu('cel-bar');"><img src="graficos/menu_cab.gif" width="34px"></a></div>
			<div class="menu-cab-bn" id="menu-btn2" style="display:none"><a href="#" onclick="toggle_menu('cel-bar');"><img src="graficos/menu_cab2.gif" width="34px"></a></div>
			<!-- logo celular -->
			<div class="logo-fondo cel-hide"><img src="graficos/logo1b.gif" width="160px" alt=""/></div>
			<!-- menu lateral celular -->
			<iframe src="cel-menu.htm" name="cel-bar" id="cel-bar" frameborder="0"
			class="iframe-celbar" scrolling="no"></iframe>
		</div>		
	`);



function toggle_menu2(id) {
        var e = document.getElementById(id);
        if (e.style.width == '0px'){
			document.getElementById("divbmobile").style.width = "0%";
			document.getElementById("barra-menu").style.paddingLeft = "15%";
			document.getElementById("btn-paciente2").style.display = "none";
		document.getElementById("anchura").style.marginLeft = "15%";
		document.getElementById("anchura").style.width = "100%";           	
		}else{
			document.getElementById("divbmobile").style.width = "42%";
			document.getElementById("barra-menu").style.paddingLeft = "10px";
			document.getElementById("btn-paciente2").style.display = "block";	       
		document.getElementById("anchura").style.marginLeft = "10px";
			document.getElementById("anchura").style.width = "60%";	
		}
    }

function cerrar_menu2(id) {
        var e = document.getElementById(id);
        if (e.style.width != '0px'){						
			document.getElementById("divbmobile").style.width = "0px";
			document.getElementById("barra-menu").style.paddingLeft = "15%";
			document.getElementById("btn-paciente2").style.display = "none";
		document.getElementById("anchura").style.marginLeft = "15%";
		document.getElementById("anchura").style.width = "100%"; 
		}
    }
window.onscroll = function() {scrollFunction()}; 