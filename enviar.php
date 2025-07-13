<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $destino = "hugofagner11@gmail.com";
    $assunto = "Novo formulário de venda de provedor";
    $mensagem = "Formulário de Venda de Provedor enviado pelo site:\n\n";
    foreach($_POST as $campo => $valor) {
        $mensagem .= ucfirst($campo) . ": " . htmlspecialchars($valor) . "\n";
    }
    $headers = "From: site@seudominio.com\r\nReply-To: site@seudominio.com\r\n";

    if(mail($destino, $assunto, $mensagem, $headers)){
        echo "<h2 style='color:#2563eb;font-family:sans-serif;margin-top:2rem;text-align:center;'>Formulário enviado com sucesso!<br>Sua mensagem foi recebida e entraremos em contato em breve.</h2>";
    } else {
        echo "<h2 style='color:red;font-family:sans-serif;margin-top:2rem;text-align:center;'>Erro ao enviar o formulário.<br>Tente novamente ou envie para o e-mail hugofagner11@gmail.com.</h2>";
    }
}
?>
