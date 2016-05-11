<?php

if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $to = 'sunalex@sunalex.ru'; //TODO
        $subject = 'Запрос на участие в переговорных поединках';
        $message = 'Имя: '.$name. ', Телефон: '.$phone;

        $headers = 'Content-type: text/html; charset=UTF-8\r\n';

        mail($to, $subject, $message, $headers);
}

?>