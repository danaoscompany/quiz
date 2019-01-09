<?php
$email = $_GET["email"];
$password = $_GET["password"];
include 'db.php';
$results = $c->query("SELECT * FROM users WHERE email='" . $email . "' AND password='" . $password . "'");
if ($results && $results->num_rows > 0) {
    session_start();
    $_SESSION["dnquiz_user_id"] = $results->fetch_assoc()["id"];
    $_SESSION["dnquiz_email"] = $email;
    $_SESSION["dnquiz_password"] = $password;
    echo 0;
} else {
    echo -1;
}