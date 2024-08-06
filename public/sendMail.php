<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Подключаем файлы PHPMailer
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'] ;
$email = $_POST['email'];
$message = $_POST['message'];


// Формирование самого письма
$title = "Новая заявка с сайта prosystem.spb.ru";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

// Создаем экземпляр PHPMailer
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->SetLanguage('ru', 'phpmailer/language/');
$mail->SMTPOptions = array(
        'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);  

try {
    // Настройки SMTP
    $mail->isSMTP();                                // Отправка через SMTP
    $mail->Host       = 'mail.prosystem.spb.ru';    // SMTP сервер
    $mail->SMTPAuth   = true;                       // Включить аутентификацию SMTP
    $mail->Username   = 'avp';                      // SMTP логин
    $mail->Password   = '54321Pro';              // SMTP пароль
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Включить TLS шифрование
    $mail->Port       = 25;                         // TCP порт для подключения

    // Получатель
    $mail->setFrom('avp@prosystem.spb.ru', 'Pro System');         // Отправитель
    $mail->addAddress('avp@prosystem.spb.ru');      // Получатель

    // Содержимое письма
$mail->isHTML(true);                                // Установить формат электронной почты в HTML
    $mail->Subject = $title;
    $mail->Body    = $body;
    $mail->AltBody = 'Новая заявка от $name, e-mail $email с текстом: $text';

    $mail->send();
    echo 'Письмо отправлено. <a href="/">назад</a>';
} catch (Exception $e) {
    echo "Письмо не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
}
