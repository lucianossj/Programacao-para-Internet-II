var body = document.querySelector("body");
body.onload=function(){
    setInterval(loadJson,5000);
    
}

function loadJson(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        trataJson(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "motores.json", true);
  xhttp.send();
}

function trataJson(jsonObject){
    var str = "";
    for(var indice in jsonObject){
        if(indice %3 == 1){
            str+= "<dl class='central'>";
        } else {
            str+="<dl>";
        }
        str+="<dd>";
        str+="<figure>";
        str+="<img src='"+jsonObject[indice].imagem+
                "' alt='"+jsonObject[indice].nome+"' />";
        str+="</figure>";
        str+="</dd>";
        str+="<dt>";
        str+="<a href='#'>"+jsonObject[indice].nome+"</a>";
        str+="</dt>";
        str+="<dd>"+jsonObject[indice].descricao+"</dd>";
        str+="<dd>Uso:"+ jsonObject[indice].uso+"</dd>";
        str+="</dl>";
        if(indice %3 == 2){
            str+= "<div class='clear'></div>";
        } 
    }
    document.querySelector("main").innerHTML = str;
}