<?php

$usuarios = [
        [
            'email' => 'admin@escuela.com',
            'password' => '123456',
            'rol' => 'admin',
            'nombre' => 'Jorge'
        ],
        [
            'email' => 'ivan@gmail.com',
            'password' => '123456',
            'rol' => 'alumno',
            'nombre' => 'Victor'
        ]
    ];

$materias = [
    ['id' => 1, 'nombre' => 'Matemáticas'],
    ['id' => 2, 'nombre' => 'Historia'],
    ['id' => 3, 'nombre' => 'Ciencias']
];

$asignaciones = [
    'ivan@gmail.com' => [1,3]
];

?>