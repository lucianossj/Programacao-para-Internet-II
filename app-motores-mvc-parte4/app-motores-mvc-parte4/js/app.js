
let controller = new MotorController();

let formcadastro = document.querySelector("#formcadastro");
formcadastro.addEventListener("submit",controller.salvarMotor.bind(controller));

window.addEventListener("load",controller.carregarMotores.bind(controller));

