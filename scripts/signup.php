<?php
$email = $_GET["email"];
$password = $_GET["password"];
include 'db.php';
include 'mail.php';
$results = $c->query("SELECT * FROM users WHERE email='" . $email . "'");
if ($results && $results->num_rows > 0) {
    echo -1;
    return;
}
$userId = uniqid();
if ($c->query("INSERT INTO users (id, email, password) VALUES ('" . $userId . "', '" . $email . "', '" . $password . "')")) {
    $url = "http://localhost/quiz/scripts/confirm-email.php?id=" . $userId;
    sendMail("danaoscompany@gmail.com", $email, "Konfirmasi email Anda untuk akun iQuiz Anda", "<br/><img src='http://localhost/quiz/img/logo.png' width='80px' height='80px'><br/><br/><br/>Selamat datang!<br/>Konfirmasi email Anda dengan meng-klik URL berikut untuk menyelesaikan registrasi akun iQuiz Anda.<br/><a href='" . $url . "'>" . $url . "</a><br/>Jika Anda tidak mendaftar iQuiz sebelumnya, abaikan email ini.<br/>Tim iQuiz");
    echo 0;
} else {
    echo -2;
}