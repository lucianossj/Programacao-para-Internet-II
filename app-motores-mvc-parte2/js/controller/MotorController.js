class MotorController{
    constructor(){

    }

    salvarMotor(event){
        event.preventDefault();
        console.log("Trata formulario");
    
        var motor = new Motor();
        motor.nome = document.querySelector("#nome").value;
        motor.imagem = document.querySelector("#imagem").value;
        motor.descricao = document.querySelector("#descricao").value;
        motor.uso = document.querySelector("#uso").value;
        
        console.log(motor);
        this.enviarMotor(motor);
    }

    carregarMotores(event) {
        this.buscarMotores();
    }

    enviarMotor(motor){
        const self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                //Tratar as ações após a comunicação com o servidor
                self.limparFormulario();
                self.carregarMotores();
            }
        };
        xhttp.open("POST", "http://localhost:8080/api/motores", true);
        xhttp.setRequestHeader("Content-Type","application/json")
        xhttp.send(JSON.stringify(motor));
    }
    
    limparFormulario(){
        document.querySelector("#nome").value="";
        document.querySelector("#imagem").value="";
        document.querySelector("#descricao").value="";
        document.querySelector("#uso").value="";    
    }
    
    
    
    buscarMotores() {
        const self = this;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                self.montarTabela(JSON.parse(this.responseText));            
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/motores", true);
        xhttp.send();
    }
    
    montarTabela(motores){
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
}