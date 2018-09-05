<?php

include_once 'Produto.class.php';

//$produto = new Produto(0, "Teste2", "150");
$id = 2;
function buscarPorId ($id){

    $conexao = "mysql:host=localhost;dbname=app-produtos";
    $usuario = "root";
    $senha = "";

    $pdo = new PDO($conexao, $usuario, $senha);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
    $pdo->setAttribute(PDO::ATTR_STRINGIFY_FETCHES,false);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);

    $q = "SELECT * FROM produtos WHERE id=:id";
    $comando = $pdo->prepare($q);
    $comando->bindParam(":id", $id);
    $comando->execute();
    $obj = $comando->fetch(PDO::FETCH_OBJ);

    var_dump($obj->nome);
    //var_dump($obj->preco);
    //echo($obj->nome);
    

}

buscarPorId($id);

?>