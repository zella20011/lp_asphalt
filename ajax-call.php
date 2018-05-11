<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    //$to      = 'oleggalyanovskij@gmail.com';
    $to      = 'bis-idea2015@yandex.ru';
    $subject = 'Asphalt';
    $message = 'Имя : '.$name."\r\n".'Телефон : '.$phone."\r\n".'Email : '.$email."\r\n";
    $headers = 'From: '.'call@asphalt.com'.'' . "\r\n" .
        'Reply-To: '.$email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    
    echo json_encode(array('success'=>true));

?>