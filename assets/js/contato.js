function validacao(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("tel").value;
    var mensagem = document.getElementById("mensagem").value;
    var filtro = /^([a-zA-zà-úÀ-Ú]|\s+)+$/;

    if(nome == "" || sobrenome == "" || email == "" || telefone == "" || mensagem == ""){
        alert('Preencha todos os campos');
    }
    else if(!filtro.test(document.getElementById("nome").value)){
    alert('Nome inválidos')
    document.getElementById("nome").value = "";
    }
    else if(!filtro.test(sobrenome)){
        alert('Sobrenome invalidos')
        document.getElementById("sobrenome").value = "";
    }
    else if(email.indexOf("@") == -1 && email.indexOf("@") > 1 || email.indexOf(".") == -1){
        alert('Preencha com um email valido');
        document.getElementById("email").value = "";
     }
    else if(telefone.length != 11){
        alert('Apenas 11 digitos')
        document.getElementById("tel").value = "";
    }
    else /*if(nome != "" && sobrenome != "" && email != "" && telefone != "" && mensagem != "")*/{
        sucesso();
    }
    
}
function sucesso(){
    alert("Dados enviados com SUCESSO!!")
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("mensagem").value = "";
}

function numero(){
    evt = window.event;
    var tecla = evt.keyCode;
    if(tecla >= 47 && tecla<=57){
    }
    else{
        evt.preventDefault();
        alert('Apenas numeros')
    }
}