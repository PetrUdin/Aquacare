<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$to = "fileer@gmail.com";
$subject ='Заявка на заказ';
$message = "Заявка была отправлена пользоваталем $name с почты $email и телефоном $phone";
$headers = "From: $name $email" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Загрузка...';
} else {
	echo 'Возникла ошибка';
}

