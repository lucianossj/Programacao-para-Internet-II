<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once 'ProdutoController.php';
require './vendor/autoload.php';

$app = new \Slim\App;

$app->group('/produtos', function(){
    $this->get('','ProdutoController:listar');
    $this->post('','ProdutoController:inserir');

    $this->get('/{id:[0-9]+}','ProdutoController:buscar');
    $this->put('/{id:[0-9]+}','ProdutoController:atualizar');
    $this->delete('/{id:[0-9]+}','ProdutoController:deletar');
    
});

$app->run();
?>