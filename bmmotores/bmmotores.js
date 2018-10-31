var body = document.querySelector("#produtos");
body.onload = iniciaAplicacao;

var contador = 0;
var objetoMotores;
var str;

function iniciaAplicacao(){
    console.log("Iniciando Aplicação ....");
    setInterval(loadJSON,5000);
}

function loadJSON(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(contador+"->"+this.responseText);

            objetoMotores = JSON.parse(this.responseText);
            
            str += "<dl> <dd> <figure> <img src="+objetoMotores[contador].imagem+" /> </figure> </dd> <dt> <a href='#'> "+ objetoMotores[contador].nome + "</a> </dt> </dl>";
            
            document.querySelector("main").innerHTML = str;

            contador++;
       }
    };

    xhttp.open("GET", "bmmotores.json", true);
    xhttp.send();
        
}

