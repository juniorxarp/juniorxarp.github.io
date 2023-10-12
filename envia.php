<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $telefone = addcslashes($_POST['telefone']);
    $msn = addcslashes($_POST['msn']);

    $para = "xicorrj@hotmail.com"
    $assunto = "Contato Portfólio"

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Mensagem: ".$msn;

    $cabeca = "from: xicorrj@hotmail.com"."\n"."Reply-to; ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail ok");
    }else{
        echo("Houve um erro ");
    }
?>