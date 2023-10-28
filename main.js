const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];
const inputTelefoneContato = document.getElementById('telefone-contato');

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi cadastrado.`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(parseInt(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

inputTelefoneContato.addEventListener('keyup', function(e) {
    handlePhone(e);
})

function handlePhone (e) {
    let telefoneAFormatar = e.target;
    telefoneAFormatar.value = phoneMask(telefoneAFormatar.value);
}

function phoneMask (numero) {
    if(!numero){
        return "";
    } else {
        numero = numero.replace(/\D/g, '');
        numero = numero.replace(/(\d{2})(\d)/, "($1) $2");
        numero = numero.replace(/(\d)(\d{4})$/,"$1-$2");
        return numero;
    }
}