class MotorController{
    constructor(){
        this.service = new MotorHttpService();

    }

    salvarMotor(event){
        event.preventDefault();
        console.log("Trata formulario");
    
        let motor = new Motor();
        motor.nome = document.querySelector("#nome").value;
        motor.imagem = document.querySelector("#imagem").value;
        motor.descricao = document.querySelector("#descricao").value;
        motor.uso = document.querySelector("#uso").value;
        
        const self = this;
        const ok = function(){
            self.limparFormulario();
            self.carregarMotores();
        }

        const erro = function(status){
            console.log(status);
        }

        this.service.enviarMotor(motor,ok,erro);

        /*this.service.enviaMotor(motor, 
            () => {
                self.limparFormulario();
                self.carregarMotores();
            },
            (status) => console.log(status)
        );*/

    }

    carregarMotores(event) {
        
        const self = this;
        const ok = function(listaMotores){
            self.montarTabela(listaMotores);              
        }
        const erro = function(status){
            console.log(status);
        }

        this.service.buscarMotores(ok,erro);
    }

    
    
    limparFormulario(){
        document.querySelector("#nome").value="";
        document.querySelector("#imagem").value="";
        document.querySelector("#descricao").value="";
        document.querySelector("#uso").value="";    
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