<?php
    include_once 'Produto.class.php';

    $produtos = [];
    
    function listar()
    {
        return $GLOBALS['produtos'];        
    }

    function inserir(Produto $produto)
    {
        array_push($GLOBALS['produtos'], $produto);  
    }

    function deletar($id)
    {

    }

    function atualizar($id, Produto $produto)
    {

    }

    function buscarPorId($id)
    {
        
    }

    inserir(new Produto(1,"livro",30));

    print_r(listar());

?>