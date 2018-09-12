<?php
    include_once 'Produto.class.php';
    
    function inserir(Produto $produto)
    {
        $conexao = "mysql:host=localhost;dbname=app-produtos";
        $usuario = "root";
        $senha = "";
        $pdo = new PDO($conexao, $usuario, $senha);

        $q = "INSERT INTO produtos(nome,preco) 
              VALUES (:nome,:preco)";
        $comando = $pdo->prepare($q);
        $comando->bindParam(":nome", $produto->nome);
        $comando->bindParam(":preco", $produto->preco);
        $comando->execute();
        var_dump($pdo->lastInsertId());
    }

    inserir(new Produto(0,"livro2",40));

?>