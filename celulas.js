var inter = setInterval(function () {
  document.querySelector("svg").style.height = window.innerHeight - 40;
  document.querySelector(".content").style.height = window.innerHeight + "px";
}, 10);

function apply (title, text) {
  document.querySelector("#header").innerHTML = title;
  document.querySelector("#information").innerHTML = text;
}

document.querySelector(".nucleolo").onmouseover = function(){
  apply("Nucléolo", "En biología celular, el nucléolo es una región del núcleo que se considera una estructura supra-macromolecular, ​​ que no posee membrana que lo limite.");
}

document.querySelector(".nucleo").onmouseover = function(){
  apply("Núcleo", "El núcleo celular es un orgánulo membranoso que se encuentra en el centro de las células eucariotas. ​El conjunto de genes de esos cromosomas se denomina genoma nuclear. La función del núcleo es mantener la integridad de esos genes y controlar las actividades celulares regulando la expresión génica.");
}

document.querySelectorAll(".cloroplasto").forEach(function(e) {
  e.onmouseover = function() {
    apply("Cloroplasto", "Los cloroplastos son los orgánulos celulares que en los organismos eucariotas fotosintetizadores se ocupan de la fotosíntesis.");
  }
});

document.querySelectorAll(".microtubulos").forEach(function(e) {
  e.onmouseover = function() {
    apply("Microtubulos", "Los microtúbulos son estructuras celulares formadas por polímeros proteicos, de 25 nm de diámetro exterior y unos 12 nm de diámetro interior, con longitudes que varían entre unos pocos nanómetros a micrómetros; intervienen en diversos procesos celulares que involucran desplazamiento de vesículas de secreción, movimiento de orgánulos, transporte intracelular de sustancias, así como en la división celular (mitosis y meiosis) y que, junto con los microfilamentos y los filamentos intermedios, forman el citoesqueleto.");
  }
});

document.querySelectorAll(".reticulo_endoplasmatico").forEach(function(e) {
  e.onmouseover = function() {
    apply("Reículo Endoplasmático", "El retículo endoplasmático o endoplásmico es un orgánulo distribuido por todo el citoplasma de una célula eucariota, la cual se representa como un complejo sistema de membranas dispuestas en forma de sacos aplanados y túbulos que están interconectados entre sí compartiendo el mismo espacio interno.");
  }
});

document.querySelectorAll(".aparato_golgi").forEach(function(e) {
  e.onmouseover = function() {
    apply("Aparato de Golgi", "El aparato de Golgi es un orgánulo presente en todas las células eucariotas.​ Pertenece al sistema de endomembranas.");
  }
});

document.querySelector(".lisosoma").onmouseover = function(){
  apply("Lisosoma", "Orgánulo celular de forma irregular y membrana sencilla que contiene reservas de enzimas necesarias para la digestión de las partículas ingeridas por las células fagocitarias.");
}

document.querySelectorAll(".pared_celular").forEach(function(e) {
  e.onmouseover = function() {
    apply("Pared Celular", "La pared celular es una capa resistente, a veces rígida, porque soporta las fuerzas osmóticas y el crecimiento, que se localiza en el exterior de la membrana plasmática en las células de plantas, hongos, algas, bacterias y arqueas.");
  }
});

document.querySelectorAll(".vacuola").forEach(function(e) {
  e.onmouseover = function() {
    apply("Vacuola", "Una vacuola es un orgánulo celular presente en todas las células vegetales. También aparece en algunas células procariotas y eucariotas.");
  }
});

document.querySelectorAll(".mitocondria").forEach(function(e) {
  e.onmouseover = function() {
    apply("Mitocondria", "Las mitocondrias son orgánulos celulares encargados de suministrar la mayor parte de la energía necesaria para la actividad celular.​ Actúan como centrales energéticas de la célula y sintetizan ATP a expensas de los carburantes metabólicos.");
  }
});

document.querySelector(".vesicula_golgi").onmouseover = function(){
  apply("Vesicula de Golgi", "Muchas vesículas se crean en el aparato de Golgi, pero también en el retículo endoplasmático rugoso (RER), o se forman a partir de partes de la membrana plasmática. Las vesículas de secreción se denominan GERL, que significa una porción del retículo endoplásmico cerca del aparato de Golgi y carente de ribosomas.");
}

document.querySelector(".membrana_plasmatica").onmouseover = function(){
  apply("Membrana Plasmática", "La membrana plasmática, membrana celular, membrana citoplasmática o plasmalema, es una bicapa lipídica que delimita toda la célula. Es una estructura formada por dos láminas de fosfolípidos, glucolípidos y proteínas que rodean, limitan la forma y contribuyen a mantener el equilibrio entre el interior (medio intracelular) y el exterior (medio extracelular) de las células. Regula la entrada y salida de muchas sustancias entre el citoplasma y el medio extracelular.​ Es similar a las membranas que delimitan los orgánulos de células eucariotas.");
}

document.querySelectorAll(".citoplasma").forEach(function(e) {
  e.onmouseover = function() {
    apply("Citoplasma", "Parte de la célula que rodea el núcleo y que está limitada por la membrana exterior.");
  }
});
