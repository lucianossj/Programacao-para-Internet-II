<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;
$app->get('/hello', function (Request $request, Response $response, array $args) {
    $response->getBody()->write("Hello World!");

    return $response;
});
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello ".$name);

    return $response;
});
$app->run();
?>