function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id +"autocomplete-list");
      a.setAttribute("class","autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML ="<strong>"+ arr[i].substr(0, val.length) +"</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML +="<input type='hidden' value='"+ arr[i] +"'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id +"autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the"active"item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as"active":*/
    if (!x) return false;
    /*start by removing the"active"class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class"autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the"active"class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var countries = ["pineal - pineal","pineal - hipófisis","pineal - hipotálamo","pineal - bulbo raquídeo","pineal - duodeno","pineal - vejiga","pineal - cerebelo","pineal - útero","pineal - próstata","pineal - páncreas","pineal - tiroides","pineal - corazón","pineal - hígado","pineal - suprarrenal","coronilla - hipófisis","coronilla - hipotálamo","hipófisis - hipófisis","hipófisis - ovario","hipófisis - vejiga","hipófisis- bulbo raquídeo","hipófisis - útero","hipófisis - mastoides","hipófisis - tálamo","hipófisis - supraciliar","hipófisis - tiroides","hipófisis - vesícula","hipófisis - suprarrenales","hipófisis - testículo","hipófisis - corazón","hipófisis - cerebelo","supraciliar - bulbo raquídeo","supraciliar - interciliar","interciliar - bulbo raquídeo","seno frontal - seno frontal","ceja - ceja","ojo - ojo","ojo - cerebelo","ojo - rabo del ojo","ojo - escápula","párpado - párpado","lacrimal - lacrimal","lacrimal - craneal","canto de ojo - canto de ojo","mácula - cerebelo","piso orbital - piso orbital","piso orbital - cerebelo","craneal - craneal","nariz - nariz","seno nasal - seno nasal","pómulo - riñón","pómulo - pómulo","pómulo - tiroides","malar - malar","malar - riñón (cl)","arco cigomático - arco cigomático","arco cigomático - parietal","maxilar superior - maxilar superior","maxilar superior - cola páncreas","maxilar inferior - maxilar inferior","hueco axilar - hueco axilar","rama mandibular - rama mandibular","mentón - mentón","angulo - angulo","dentadura - dentadura","lengua - lengua","lengua - timo","lengua - ano","lengua - hígado","lengua - corazón","labio- labio","labio- labio sup","comisura - comisura","comisura - labio","parietal - parietal","parietal - colon transverso","parietal - riñón","parietal - nervio vago (D)","parietal - bulbo raquído","parietal - occipital","parietal - diafragma","parietal inf. - parietal inf.","fronto parietal - hiperactividad","frontal (I) - vejiga","cortex prefrontal - cortex prefrontal (D)","corteza cerebral - lóbulo cerebral","corteza cerebral - hipófisis","polígono de willis- polígono de willis","lóbulo prefrontal (D)- corazón","lóbulo prefrontal (I) - ciáico (I)","tálamo - tálamo (hl)","tálamo - tálamo (cl)","hipotálamo - sacro","hipotálamo - tálamo","temporal - temporal","temporal - yugular","temporal - cardias","temporal - temporal (I)","temporal - bulbo raquídeo","temporal - esternocleido mastoideo","temporal (I) - temporal (I)","temporal (I) - hipocampo","temporal (I) - hipófisis","temporal (I) - cisura de rolando","temporal (I) - frontal","temporal (I) - occipital","temporal (D) -  temporal (D)","témporoccipital - témporoccipital","sien - sien","sien - bulbo","sien - suprarrenales","sien - corazón","quiasma - quiasma","polo - polo","polo - uretra","polo - tiroides","polo - calcáneao","fronto polo - fronto polo","antecuerno - antecuerno","cisura de silvio - cisura de silvio","cisura media - cisura media","cisura de rolando - cisura de rolando","pre pineal - pre pineal","pre pineal - vejiga","pre pineal -post pineal","post pineal - post pineal","post pineal - amígdala","post pineal - bulbo","post pineal - vejiga","cuerpo calloso - cuerpo calloso","preauricular - preauricular","preauricular -vejiga","oído - oído","oído - oído (I)","oído - temporal","oído - temporal (cl)","oído - ovario o testículo","oído - oído (D","D)","yunque - riñón (hl)","oreja - oreja","nervio facial - nervio facial","nervio facial - nervio facial (hl)","rama mandibular - rama mandibular","mandíbula - mandíbula","adenoides - adenoides","mastoides - mastoides","mastoides - mastoides (cl)","mastoides - bulbo raquídeo","mastoides - riñón (hl)","mastoides - duodeno","mastoides - corazón","mastoides - clavícula","mastoides - riñón (l)","mastoides - hipófisis","retromastoides - retromastoides", "huasteca - huasteca","núcleos basales - bulbo raquídeo","cerebelo - cerebelo","cerebelo - cerebelo (I I)","cerebelo - bulbo","cerebelo - supraespinoso","cerebelo - cola de caballo","bulbo raquídeo - pineal","bulbo raquídeo - vejiga","bulbo raquídeo - cerebelo","bulbo raquídeo - trapecio","bulbo raquídeo - colon desc","bulbo raquídeo - corazón","bulbo raquídeo - axila","occipital - occipital","occipital -  duodeno","occipital - parótida","occipital - timo","occipital - bulbo","occipital - temporal","occipital - lumbar 5","occipital - riñón (cl)","occipital - testículo","nuca - sacro","tallo parietal - tallo parietal","hipocampo - sacro","amígdala cerebral - a. cerebral (D)","amígdala cerebral - timo","amígdala cerebral - bulbo","base del craneo - base del craneo","cerebro - riñón (hl)","capitis - capitis","nucleo acumbens - nucleo acumbens","adenohipófisis - riñón (I)"];


