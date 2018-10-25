var body = document.querySelector("#produtos");
body.onload = iniciaAplicacao;

var contador = 0;

function iniciaAplicacao(){
    console.log("Iniciando Aplicação ....");
    setInterval(loadJSON,5000);
}

function loadJSON(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(contador+"->"+this.responseText);
            contador++;
       }
    };
    xhttp.open("GET", "bmmotores.json", true);
    xhttp.send();
        
}

