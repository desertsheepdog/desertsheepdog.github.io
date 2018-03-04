<?php
    if(isset($_POST['submit'])) {
        $to = 'dgoodyke87@gmail.com';
        $subject = 'Serenity Laser Sculpting Question';
        $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
        $message = 'Email: ' . $_POST['email'] . "\r\n\r\n";
        $message = 'Message: ' . $_POST['message'];
        $headers = "Content-Type: text/html; charset=UTF-8\r\n";
        mail($to, $subject, $message, $headers);
    }
?>
