
let controller = new MotorController();

let formcadastro = document.querySelector("#formcadastro");
formcadastro.addEventListener("submit",controller.carregarMotores.bind(controller));

window.addEventListener("load",controller.buscarMotores.bind(controller));

