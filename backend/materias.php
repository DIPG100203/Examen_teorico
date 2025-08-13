<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST");

require 'data.php';

// Leer token y rol (simulado)
$headers = getallheaders();
$authorization = $headers['Authorization'] ?? '';

$rol = '';
$email = '';
if ($authorization) {
  list($tokenEmail, $timestamp) = explode(':', base64_decode($authorization));
  $email = $tokenEmail;
  foreach ($usuarios as $u) {
    if ($u['email'] === $email) {
      $rol = $u['rol'];
      break;
    }
  }
}

if (!$rol) {
  http_response_code(401);
  echo json_encode(['success' => false, 'message' => 'No autorizado']);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  if ($rol === 'admin') {

    echo json_encode($materias);
  } else {
    
    $ids = $asignaciones[$email] ?? [];
    $materiasAlumno = array_filter($materias, fn($m) => in_array($m['id'], $ids));
    echo json_encode(array_values($materiasAlumno));
  }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if ($rol !== 'admin') {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'No autorizado']);
    exit;
  }

  $input = json_decode(file_get_contents('php://input'), true);
  $nombreMateria = $input['nombre'] ?? '';

  if (!$nombreMateria) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nombre de materia requerido']);
    exit;
  }

  echo json_encode(['success' => true, 'message' => "Materia '$nombreMateria' creada"]);
} else {
  http_response_code(405);
  echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
