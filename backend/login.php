<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}


require 'data.php';

$input = json_decode(file_get_contents('php://input'), true);

$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

$userfound = null;
foreach ($usuarios as $user){
    if ($user['email']===$email && $user['password']===$password) {
        $userfound = $user;
        break;
    }
}

if ($userfound) {
    $token = base64_encode($email . ':' . $userfound['rol']);
    echo json_encode([
        'success' => true,
        'token' => $token,
        'rol' => $userfound['rol'],
        'nombre' => $userfound['nombre']
    ]);
}
else {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Correo o contraseña incorrectos']);
}

?>