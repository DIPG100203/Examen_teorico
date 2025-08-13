<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require 'data.php';

$headers = getallheaders();
$authorization = $headers['Authorization'] ?? '';

$rol = '';
$email = '';

if ($authorization) {
    list($tokenEmail, $timestamp) = explode(':', base64_decode($authorization));
    $email = $tokenEmail;

    foreach($usuarios as $u){
        if ($u['email']===$email) {
            $rol = $u['rol'];
            break;
        }
    }
}

if ($rol !== 'admin') {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$alumnoEmail = $input['emailAlumno'] ?? '';
$idMateria = $input['idMateria'] ?? 0;

if (!$alumnoEmail || !$idMateria) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Materia asignada correctamente']);

?>