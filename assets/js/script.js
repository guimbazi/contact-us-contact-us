const btn = document.querySelector("#enviar");
btn.addEventListener("click", function(e) {
    e.preventDefault();
    // PEGANDO VALOR DO CAMPO NOME    
    const name = document.querySelector("#nome").value;
    // PEGANDO VALOR DO CAMPO EMAIL    
    const email = document.querySelector("#email").value;
    // PEGANDO VALOR DO CAMPO TELEFONE    
    const telefone = document.querySelector("#telefone").value;
    // PEGANDO VALOR DO CAMPO ASSUNTO    
    const assunto = document.querySelector("#assunto").value;
    // PEGANDO VALOR DO CAMPO MENSAGEM    
    const mensagem = document.querySelector("#mensagem").value;
    
    // CRIANDO UM OBJETO COM OS DADOS DO PEGOS DO INPUT (FEITO COM OBJETO COM OBJETIVO DE TREINAR)
    const novoEmail = {
        nome: name,
        email: email,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem
    }
    // VERIFICAÇÃO DOS CAMPOS SELECIONADOS COMO OBRIGATÓRIO
    if ((novoEmail.nome == "")||(novoEmail.email =="")||(novoEmail.assunto == "")||(novoEmail.mensagem == "") ) {
        // CONDIÇÃO QUE SERÁ EXIBIDA CASO UMA DAS ÁREAS OBRIGATÓRIOS ESTEJAM VAZIAS
        alert('Os casmpos com (*), são obrigatórios.');
    }else {
        // CONDIÇÃO A SER EXIBIDA CASO TODAS AS VERIFICAÇÕES SEJAM SATISFATÓRIAS
        alert(`Olá ${novoEmail.nome}, sua mensagem foi enviada com sucesso. Assim que possível retornaremos o contato.`)

        /*CASO DESEJE QUE O RESULTADO DO ENVIO SEJA EXIBIDO, HABILITE A LINHA ABAIXO
        E HABILITE A DIV "PREVIEW" NO FINAL DA PAGINA INDEX.HTML
        document.querySelector('#preview').innerHTML = `Nome: ${novoEmail.nome} </br> E-mail: ${novoEmail.email} </br> Telefon: ${novoEmail.telefone} </br> Assunto: ${novoEmail.assunto} </br> Mensagem: ${novoEmail.mensagem}`;
        */
    }
    
    
})
