var random;
var palpite = document.getElementById("tentativa").value;
var tentativas = 0;
var maxtentativas = 10;
var palpites = [];
var regra = /^[0-9]+$/;

function iniciajogo(){
    palpite = document.getElementById("tentativa").value;
    if(!palpite){
        alert("Você não digitou a sua tentativa");
    }
        else if(palpite < 1 || palpite > 100){
        alert("O número digitado está fora dos limites.");
     } 
        else if(!palpite.match(regra)){
            alert("Valor incorreto digitado");
        }
         else{
          random();
          adivinha();
    }
}

function random(){
    random = Math.floor((Math.random() * 100) +1);
    console.log(random);
}

function adivinha(){
    console.log(palpite);

    if(random == palpite){        
        function acertou() {
            alert("O seu palpite está correto! Você acertou em: " + tentativas);
        }
    } else if(palpite < random){
        palpites.push(palpite);
        alert("O seu palpite é muito baixo\n" + "Suas tentativas anteriores: "+ JSON.stringify(palpites));
    
        tentativas++;
        if(tentativas >= maxtentativas){
            var con;
            con = confirm("Você excedeu o número de tentativas. Deseja tentar novamente?");
            if(con == true){
                tentativas = 0;
            }
        }
    }else{
        palpites.push(palpite);
        alert("O seu palpite é muito alto\n" + "Suas tentativas anteriores: "+ JSON.stringify(palpites));
    
        tentativas++;
        if(tentativas >= maxtentativas){
            var con;
            con = confirm("Você excedeu o número de tentativas. Deseja tentar novamente?");
            if(con == true){
                tentativas = 0;
            }
        }
    }
}
