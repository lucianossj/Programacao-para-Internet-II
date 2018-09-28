<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';
require_once 'Produto.php';
require_once 'ProdutoDAO.php';

$app = new \Slim\App;
$app->get('/produtos', function (Request $request, Response $response, array $args) {
    $dao = new ProdutoDAO;
    $array_produtos = $dao->listar();

    $response = $response->withJson($array_produtos);
    $response = $response->withHeader('Content-type', 'application/json');

    return $response;
});
$app->get('/produtos/{id}', function (Request $request, Response $response, array $args) {
    $id = (int) $args['id'];

    $dao = new ProdutoDAO;
    $produto = $dao->buscarPorId($id);

    $response = $response->withJson($produto);
    $response = $response->withHeader('Content-type', 'application/json');
    
    return $response;
});

$app->post('/produtos', function(Request $request, Response $response, array $args) {
    $var = $request->getParsedBody();
    $produto = new Produto(0,$var['nome'],$var['preco']);

    $dao = new ProdutoDAO;
    $produto = $dao->inserir($produto);

    $response = $response->withJson($produto);
    $response = $response->withHeader('Content-type', 'application/json');
    $response = $response->withStatus(201);

    return $response;
});

$app->put('/produtos/{id}', function (Request $request, Response $response, array $args) {
    $id = (int) $args['id'];
    $var = $request->getParsedBody();
    $produto = new Produto($id,$var['nome'],$var['preco']);

    $dao = new ProdutoDAO;
    $dao->atualizar($produto);

    $response = $response->withJson($produto);
    $response = $response->withHeader('Content-type', 'application/json');
    
    return $response;
});

$app->delete('/produtos/{id}', function (Request $request, Response $response, array $args) {
    $id = (int) $args['id'];

    $dao = new ProdutoDAO;
    $produto = $dao->buscarPorId($id);
    $dao->deletar($id);

    $response = $response->withJson($produto);
    $response = $response->withHeader('Content-type', 'application/json');
    
    return $response;
});

$app->run();

?>