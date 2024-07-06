database connections


<?php
$db = new mysqli("localhost", "root", "", "db_photofolio");

if($db->connect_error){
    die("Connction Failed" . $db->connect_error );
}

if(!session_id()) session_start();

?>
