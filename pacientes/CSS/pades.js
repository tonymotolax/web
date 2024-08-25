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

var countries = ["abseso tubario","abseso hepático","aborto","accidente cerebrobascular","acalasia","acne vulgar","acromegalia","actinomicosis","adenomegalia","enfermedad de addison","aftas","alergia alimentaria","alergia respiratoria","ansiedad, trastonrno de","artrosis","ascitis","alopecia","alucinaciones","alzheimer","amebiasis intestinal","amenorrea","amigdalitis","anemia","anemia del mar mediterraneo","aneurisma","anorexia","trastorno de ansiedad","apendicitis","apnea","apoplejia","arsenicosis","artritis reumatoide","ascaris","asfixia","asma","ataxia cerebelosa","autismo","azoospermia","babesiosis","balantidiosis","bartolenosis","botulismo","bradicardia","bipolar, trastorno","bronquiectasia","bronquitis","trastornos bucales","bulimia","trastornos digestivos","bursitis","necrosis de cabeza de femur","calambres","calcificación lumbar","cálculos renales","cálculos biliares","cancer","cancer cervicouterino","cancer de estómago","cancer de páncreas","cancer de próstata","cancer de vejiga","cancer de mama","cancer vesical","carcinoma","cardiopatía congénita","cardiovasculares enfermedades","enfermedades cardiovasculares","caries dentales","caspa","cataratas","catarro común","cefalea","ceguera","choque anafiláctico","ciática","cólera","ceguera de los ríos","células madre","regeneración isular","celulitis","choque tóxico","intoxicación","ciclos circadianos","cirrosis hepática","cistitis","climaterio","colesterol","hipercolesterolemia","colera","cólico estomacal","cólico nefrítico","colitis","colitis pseudomembranosa","coriorretinitis","coccidiomicosis","retraso del recimiento","confusión mental","condilomas","congestion nasal","conjuntivitis","crisis convulsivas","crisis curativa","crioamnionitis","crohn, enfermedad de","enfermedad de crohn","cuadriplejia","daño cerebral","demencia senil","dermatitis","diabetes insípida","diabetes mellitus","retinopatia diabética","debilidad muscular","dengue","dengue hemorrágico","derrame pleural","desequilibrio linfático","desintoxicación uimioterapia","desprendimiento de retina","desnutrición","discinesia","displasia celular","displasia ervical","distensión abdominal","distensión del colon","intestino irritable","divertículos","diarrea","difteria","disnea","disentería","disfagia","reflujo gastroesofágico","dislexia","dislipemia","dislipidemia","dismenorrea","drogadicción","enteritis","eructos","escarlatina","esófago de barret","espondilitis de rodilla","estrés","exantema","elefantiasis","embarazo ectópico","Chagas","Lyme, enfermedad de","edema","embarazo molar","enteritis necrótica","encefalitis","endometriosis","endometritis","enfermedades autoinmunes","enfermedad de Chagas","enfermedad de Lyme","enfermedad del arañazo de gato","arañazo de ato","enfermedad del sueño","enfermedad de Carrión","enfermedades degenerativas","enfisema pulmonar","enuresis","equilibrio energético","sentido del equilibrio","epididimitis","epilepsia","epistaxis","producción de esperma","enfermedad pulmonar obstructiva rónica","EPOC","esclerodermia","esclerosis múltiple","esclerosis múltiple falsa","esófago, disfunción","disfunción del esófago","espina bífida","espolón","esquitosomiasis","esquizofrenia","estenosis uretral","esterilidad","estreñimiento","espondilitis anquilosante","eyaculación precoz","faringitis","fascitis","faciola epática","flujo vaginal","fotofobia","fatiga crónica, síndrome de","fibromialgia","fibrosis quística","fiebre de las trincheras","fiebre de Oroya","fiebre de Malta","fiebre reumática","fiebre tifoidea","filariasis","frigidez","gardenerella vaginalis","gonorrea","galactorrea","gastritis","gangrena","genu valgo","gardiasis","Gilchrist, enfermedad e","enfermedad de Gilchrist","gingivitis","glaucoma","glioblastoma","glomerulonefritis","gota","granulomatosis infantil éptica","enfermedad de Graves","gripe","gripe aviaria","halitosis","hemiplejia","hemorragia nasal","hemorragia craneal","hemorragia gástrica","hemorroides","hernia hiatal","hepatitis","hepatitis A","hepatitis B","hepatitis C","hepatitis D","hepatitis F","hepatitis G","hepatitis H","hepatitis I","hepatitis J","hepatitis K","hepatitis L","hepatitis M","herpangina","herpes","herpes 1","herpes 2","herpes 3","herpes 4","herpes 5","herpes 6, genital","herpes 7","herpes 8","herpes 9, genital","herpes oster","herpes labial","herpes de garganta","herpes sistémico","hernia diafragmática","herpes genital","hidatidosis","hepatomegalia","hipocalcemia","hipotiroidismo","hiporexia","HTLV-1","quiste iatídico","tenia de perro","hiperactividad, TDAH, trastorno de atención","hipertensión arterial","hiperuricemia","hipo","hydrocele, quiste de agua","inmunodeficiencia","insomnio","incontinencia rinaria","intolerancia alimentaria","intolerancia a la lactosa","intolerancia al gluten","intolerancia a leginosas","intoxicación crónica","juanete","legionelosis","lepra","leptospirosis","linfadenitis","inflamación ganglionar","linfogranuloma venereo","insuficiencia cradiaca","insuficiencia renal","insuficiencia pulmonar","insuficiencia hepática","insuficiencia pancreática","laringitis","legionela","leismaniasis","lesión medular","leucemia","melatonina, producción","linfedema","levaduras","linfoma","listeriosis","micosis cuero cabelludo","micosis genital","onicomicosis","leucoencefalopatia multifocal","loasis","lumbalgia","lupus eritematoso sistémico","malaria","mal de Addison","mastitis","membrana hialina","factor surfactante","gastroenteritis","giardiasis","hematuria","ictericia","infarto miocardio","infertilidad","influenza","meningococo","megacolon","metástasis","micoplasmosis aviar","micosis","mononucleosis","mielomeningocele","meningitis","menopausia","migraña","mioma","nisseria","nisseria gonorrheae","neuralgia","neuralgia ciatálgica","neurosis","newcastle","neoplasia","neumonitis","neuralgia del trigémino","neuritis","neuropatía periférica","nicturia","obesidad, sobrepeso","trastornos oculares","obstrucción coronaria","obstrucción del píloro","obstrucción intestinal","líbido, disminución","oncocercosis","onicomádesis","orzuelo, perrilla","osteomielitis","oxiuros","otitis","ovario poliquístico","paludismo","paperas","papiloma virus","paranoia","peste bubónica","peste pneumónica","picadura de insecto","plasmodium vivax","pie de atleta","pleuresía","pleuritis","pneumocistis irovenchi","polineuritis","poliomielitis","polipos","polipos nasales","proteus","proteus mirabillis","parálisis ascendente","parálisis del brazo","parálisis facial","parásitos intestinales","parestesias","Parkinson","parto prematuro","pericarditis","periodontitis","perrilla","pielonefritis","pie plano","piojos","quimioterapia","pitiriasis versicolor","pleuritis","polifagia","poliglobulia, politicemia","polirradiculoneuropatía","protatitis","psicosis","psoriasis","pseudomona","pterigion","quiste amébico","quiste ovárico","prostatitis","quiste pulmonar","rabia","radiculopatía","rectorragia","respiratorias, enfermedades","reumatismo","retraso mental","rickettsia","rotavirus","trastornos renales","rinitis","ronquidos","rosacea púrpura","roseola","sarna","shigella","salmonelosis","sarampión","sarcoma de Kaposi","schistomatosis","sepsis, septicemia","trastornos sexuales","SIDA","VIH-ida","sifilis","sífilis","síndrome de Cushing","síndrome de Raynaud","síndrome de Sjögren","síndrome urémico emolítico","sinusitis","sistema inmunitario","sistema nervioso autónomo","sistema nervioso central","solitaria","sordera","suicidio","sufrimiento fetal","tabaquismo","talasemia","taquicardia","tunel carpiano","arritmia ideopática","teniasis","tenosinovitis","tétanos","tifus","tinnitus","tendinitis","tracoma","trastornos emolíticos","treponema pallidum","tripanosoma gambiae","tripanosoma cruzi","tumor de mama","tumor intracraneal","tumor hipofisiario","tenias","tiña","síndrome de TORCH","tos","toxocariasis","trastorno de la vista","trastornos pélvicos","trismo","tricomoniasis urogenital","triquinelosis","trismo","tromboflebitis","úlcera gástrica","úlcera varicosa","uretritis","varicela","vértigo","vértigo de Meniere","vesiculitis","VIH 1","VIH 2","VIH 3","Virus del Nilo","Virus sincicial R","vómito","enfermedad de vacas locas","vaginismo","vaginitis","varices, flebitis","varices esofágicas","verruga común","verruga genital","Vitiligo","Viruela","Yersinia pestis","Yersinia intestinalis","XMRV virus","Zika"];


