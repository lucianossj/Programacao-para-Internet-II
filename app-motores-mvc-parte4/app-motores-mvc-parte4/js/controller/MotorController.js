class MotorController{
    constructor(){
        this.service = new MotorHttpService();
        this.view = new TabelaMotoresView("#tabelamotores");

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
            self.view.montarTabela(listaMotores);              
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
}