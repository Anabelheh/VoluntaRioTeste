<?php
define('host','127.0.0.1');
define('USUARIO', 'VoluntaRio');
define('senha', 'senhadositeVoluntaRio');
define('DB', 'login');

$conexao = mysqli_connect(admin, USUARIO, senha, DB) or die ('não foi possivel conectar');
?>


