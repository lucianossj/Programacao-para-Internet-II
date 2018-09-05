<?php

//Produto $produto = new Produto();

include_once 'Produto.class.php';

$produto = new Produto(0, "Teste2", "150");

function inserir ($produto){

    $conexao = "mysql:host=localhost; dbname=app-produtos";
    $usuario = "root";
    $senha = "";

    $pdo = new PDO($conexao, $usuario, $senha);

    $comando = $pdo->prepare("INSERT INTO produtos (nome, preco) VALUES (:nome, :preco)");

    $comando->bindParam(":nome", $produto->nome);
    $comando->bindParam(":preco", $produto->preco);

    $comando->execute();

    var_dump($pdo->lastInsertId());

}

inserir($produto);

?>