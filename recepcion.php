<?php
    $_nombre = $_POST['nom'];
    $_correo = $_POST['correu'];
    $_comunicado = $_POST['comunicado'];
    $_politica = $_POST['condiciones'];

    $_destino = 'jafet.armadans.sedano@gmail.com';
    $_asunto = 'Formulario de contacto del Portfolio Personal';
    $_cuerpo = " - Nombre: $_nombre\n
- Correo del usuario: $_correo\n
- Comunicado: $_comunicado\n
- Acepta las condiciones: $_politica";

    $_remite = "From: portfoliopersonal";

    // Tiene que ir en este orden exacto. $_remite seria el correo general que enviaria al departamento de destino de nuestra web $_destino
    mail($_destino, $_asunto, $_cuerpo, $_remite);

    // Redirigimos al usuario del envio del formulario
    header("Location: index.html");
    exit();
?>