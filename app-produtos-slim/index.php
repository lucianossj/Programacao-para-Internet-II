<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;
$app->get('/produtos', function (Request $request, Response $response, array $args) {
    $array_produtos = [];
    $array_produtos[] = new Produto(1, "produto1", 3.5);
    $array_produtos[] = new Produto(2, "produto2", 5.5);
    
    //$response->getBody()->write(json_encode("Lista de Produtos!"));
    $response = $response->withJson($array_produtos)->withHeader('Content-type', 'application');
    

    return $response;
});
$app->get('/produtos/{id}', function (Request $request, Response $response, array $args) {
    $name = $args['id'];
    $response->getBody()->write("Id do produto: ".$id);

    return $response;
});
$app->run();
?>