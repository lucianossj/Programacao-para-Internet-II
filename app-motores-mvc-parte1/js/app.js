var formcadastro = document.querySelector("#formcadastro");
formcadastro.onsubmit = function(event){
    event.preventDefault();
    console.log("Trata formulario");

    var motor = new Motor();
    motor.nome = document.querySelector("#nome").value;
    motor.imagem = document.querySelector("#imagem").value;
    motor.descricao = document.querySelector("#descricao").value;
    motor.uso = document.querySelector("#uso").value;
    
    console.log(motor);
    enviarMotor(motor);
}

function enviarMotor(motor){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            //Tratar as ações após a comunicação com o servidor
            limparFormulario();
            carregarMotores();
        }
    };
    xhttp.open("POST", "http://localhost:8080/api/motores", true);
    xhttp.setRequestHeader("Content-Type","application/json")
    xhttp.send(JSON.stringify(motor));
}

function limparFormulario(){
    document.querySelector("#nome").value="";
    document.querySelector("#imagem").value="";
    document.querySelector("#descricao").value="";
    document.querySelector("#uso").value="";    
}

var body = document.querySelector("body");
body.onload = function () {
    carregarMotores();
}

function carregarMotores() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            montarTabela(JSON.parse(this.responseText));            
        }
    };
    xhttp.open("GET", "http://localhost:8080/api/motores", true);
    xhttp.send();
}

function montarTabela(motores){
    var str="";
    str+= "<table>";
    str+= "<tr>";
    str+= "<th>Nome</th>";
    str+= "<th>Imagem</th>";
    str+= "<th>Descrição</th>";
    str+= "<th>Uso</th>";
    str+= "</tr>";

    //for(var i=0; i<motores.length; i++)
    for(var i in motores){
        str+="<tr>";
        str+="<td>"+motores[i].nome+"</td>";
        str+="<td>"+motores[i].imagem+"</td>";
        str+="<td>"+motores[i].descricao+"</td>";
        str+="<td>"+motores[i].uso+"</td>";
        str+="</tr>";
    } 
    str+= "</table>";

    var tabelamotores = document.querySelector("#tabelamotores");
    tabelamotores.innerHTML = str;
}