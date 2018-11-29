class MotorHttpService{
    constructor(){}    
    
    
    enviarMotor(motor, ok, error){
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                ok();
            }
            else if(this.status !== 201){
                error(this.status);
            }

        };
        xhttp.open("POST", "http://localhost:8080/api/motores", true);
        xhttp.setRequestHeader("Content-Type","application/json")
        xhttp.send(JSON.stringify(motor));
    }

    buscarMotores(ok,error) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ok(JSON.parse(this.responseText));          
            }
            else if(this.status !== 200){
                error(this.status);
            }
        };
        xhttp.open("GET", "http://localhost:8080/api/motores", true);
        xhttp.send();
    }
}