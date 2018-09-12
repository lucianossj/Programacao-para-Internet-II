<?php
    include_once 'Produto.class.php';
    
    function buscarPorId($id)
    {
        $conexao = "mysql:host=localhost;dbname=app_produtos";
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
        echo($obj->preco);
    }

    buscarPorId(2);
?>