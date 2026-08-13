<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

include "database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo "PHP IS WORKING!";
    echo "<br><br>";
    echo "No order has been submitted yet.";
    echo "<br>";
    echo "<a href='contact.html'>Go back to the order form</a>";

    exit;
}

$name = $_POST["name"];
$email = $_POST["email"];
$product = $_POST["product"];
$message = $_POST["message"];

$sql = "INSERT INTO orders (name, email, product, message)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("SQL error: " . $conn->error);
}

$stmt->bind_param(
    "ssss",
    $name,
    $email,
    $product,
    $message
);

if ($stmt->execute()) {

    echo "<h1>✨ Order Submitted Successfully! ✨</h1>";

    echo "<p>Thank you, <strong>" .
         htmlspecialchars($name) .
         "</strong>!</p>";

    echo "<p>Your order for <strong>" .
         htmlspecialchars($product) .
         "</strong> has been received.</p>";

    echo "<p>We will contact you through <strong>" .
         htmlspecialchars($email) .
         "</strong>.</p>";

    echo "<br>";

    echo "<a href='index.html'>Back to Home</a>";

} else {

    echo "Error inserting order: " . $stmt->error;
}

$stmt->close();
$conn->close();

?>