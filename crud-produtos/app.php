<?php
    include_once 'Produto.class.php';

    $produtos = [];



    function listar()
    {
        return $GLOBALS['produtos'];
    }

    function buscarPorId($id)
    {
        foreach($GLOBALS['produtos'] as $i => $produto) 
        {
            if($produto->id === $id)
                return $produto;    
        }
    }

    function inserir(Produto $produto)
    {
        $GLOBALS['produtos'][] = $produto;
    }
        
    function deletar($id)
    {
        foreach($GLOBALS['produtos'] as $i => $produto) 
        {
            if($produto->id === $id)
                array_splice($GLOBALS['produtos'],$i,1);    
        }
    }

    function atualizar($id,Produto $produtoAlterado)
    {
        foreach($GLOBALS['produtos'] as $i => $produto) 
        {
            if($produto->id === $id)
            {
                $produto->nome = $produtoAlterado->nome;    
                $produto->preco = $produtoAlterado->preco;
            }
        }
        
    }
    
    inserir(new Produto(1,"livro",30));
    inserir(new Produto(2,"caderno",10));
    inserir(new Produto(3,"teste",30));
    inserir(new Produto(4,"teste2",10));
    
    deletar(3);

    print_r(buscarPorId(2));
    print_r("<br />");
    
    $produto = buscarPorId(4);
    $produto->nome="lapis";
    atualizar(4,$produto);
    print_r(listar());

?>
