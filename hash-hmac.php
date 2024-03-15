<?php

	//print_r($_POST); die;
	
	const PRIVATE_KEY = "#PRIVATE.KEY$";
	$response = null;

	if(isset($_POST['data'])){
		$data 		= $_POST['data'];

		$md5		= hash_hmac('md5', $data, PRIVATE_KEY);
		$sha1		= hash_hmac('sha1', $data, PRIVATE_KEY);
		$sha256		= hash_hmac('sha256', $data, PRIVATE_KEY);
		$sha512		= hash_hmac('sha512', $data, PRIVATE_KEY);
		$whirlpool	= hash_hmac('whirlpool', $data, PRIVATE_KEY);
		
		$response = array(
						'md5' => $md5,
						'sha1' => $sha1,
						'sha256' => $sha256,
						'sha512' => $sha512,
						'whirlpool' => $whirlpool,
					);
	}

	header('Content-Type: application/json');
	echo(json_encode($response));