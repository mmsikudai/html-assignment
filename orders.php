<?php

include "database.php";

// Retrieve all orders from the database
$sql = "SELECT id, name, email, product, message FROM orders ORDER BY id DESC";

$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Orders - PCR Whimsical Shop</title>

    <link rel="stylesheet" href="style.css">

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

</head>

<body>

<nav class="navbar">

    <div class="nav-logo">
        PCR WHIMSICAL SHOP
    </div>

    <div class="nav-links">

        <a href="index.html">Home</a>

        <a href="tarot.html">Tarot Cards</a>

        <a href="incense.html">Incense</a>

        <a href="gallery.html">Gallery</a>

        <a href="contact.html">Order</a>

        <a href="orders.php">Orders</a>

    </div>

</nav>


<main>

    <h1>📋 Customer Orders</h1>

    <p class="page-intro">
        Orders stored in the PCR Whimsical Shop database.
    </p>


    <div class="orders-container">

        <?php

        if ($result && $result->num_rows > 0) {

            echo "<table class='orders-table'>";

            echo "<tr>";
            echo "<th>ID</th>";
            echo "<th>Name</th>";
            echo "<th>Email</th>";
            echo "<th>Product</th>";
            echo "<th>Message</th>";
            echo "</tr>";


            while ($row = $result->fetch_assoc()) {

                echo "<tr>";

                echo "<td>" . htmlspecialchars($row["id"]) . "</td>";

                echo "<td>" . htmlspecialchars($row["name"]) . "</td>";

                echo "<td>" . htmlspecialchars($row["email"]) . "</td>";

                echo "<td>" . htmlspecialchars($row["product"]) . "</td>";

                echo "<td>" . htmlspecialchars($row["message"]) . "</td>";

                echo "</tr>";
            }

            echo "</table>";

        } else {

            echo "<p class='no-orders'>";
            echo "No orders have been made yet.";
            echo "</p>";

        }

        ?>

    </div>

</main>


<footer>

    <p>
        © 2026 PCR Whimsical Shop | Made with ✨
    </p>

</footer>

</body>

</html>

<?php

$conn->close();

?>