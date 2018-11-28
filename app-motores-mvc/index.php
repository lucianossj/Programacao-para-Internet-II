<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

include_once 'MotorController.php';
require './vendor/autoload.php';

$app = new \Slim\App;

$app->group('/api/motores', function(){
    $this->get('','MotorController:listar');
    $this->post('','MotorController:inserir');

    $this->get('/{id:[0-9]+}','MotorController:buscar');
    $this->put('/{id:[0-9]+}','MotorController:atualizar');
    $this->delete('/{id:[0-9]+}','MotorController:deletar');
    
});
$app->run();
?>