<?php

$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "pcr_whimsical_shop";

$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname
);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

echo "Database connection successful!";

?>