<?php
	include_once 'Produto.class.php';
	

	$produtos = [];
   	inserir(new Produto(1,"livro",30));
   	inserir(new Produto(2,"caderno",10));
   	inserir(new Produto(3,"teste",30));
	inserir(new Produto(4,"teste2",10));
	
	$request_method=$_SERVER["REQUEST_METHOD"];
	switch($request_method)
	{
		case 'GET':
			// Se tem id, busca o produto por id
			if(!empty($_GET["id"]))
			{
				$id=intval($_GET["id"]);
				$produto = buscarPorId($id);
				$produto_json = json_encode($produto);
				header('Content-Type:application/json');
				echo($produto_json);
			}
			//senão, retorna todos os produtos
			else
			{
				$produto_json = json_encode($produtos);
				header('Content-Type:application/json');
				echo($produto_json);			
			}
			break;
		case 'POST':
			// inserir produto

			$content = file_get_contents("php://input");
			$var = json_decode($content);
			
			inserir($var);

			$produto_json = json_encode($var);

			header("HTTP/1.1 201 Created");
			header('Content-Type:application/json');

			echo($var);

			break;
		case 'PUT':
			// Update Product
			
			break;
		case 'DELETE':
			// Delete Product
			break;
		default:
			// Invalid Request Method
			header("HTTP/1.0 405 Method Not Allowed");
			break;
	}
	
	//Não é mais utilizado, pois podemos usar diretamente o array de produtos.
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

	function inserir (Produto $produto){
		
		$conexao = "mysql:host=localhost; dbname=app-produtos";
		$usuario = "root";
		$senha = "";
		
		$pdo = new PDO($conexao, $usuario, $senha);

		$q = "INSERT INTO produtos (nome, preco) VALUES (:nome, :preco)";
		
		$comando = $pdo->prepare($q);

		$comando->bindParam(":nome", $produto->nome);
		$comando->bindParam(":preco", $produto->preco);
		
		$comando->execute();
		
		var_dump($pdo->lastInsertId());
		
	}
		
	?>