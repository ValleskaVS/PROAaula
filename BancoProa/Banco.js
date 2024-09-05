let saldo = 1000;
const senhaCorreta = '3589';

let extrato = []; // Para armazenar o histórico de transações

function exibirMensagem(mensagem) {
    document.getElementById('container').innerHTML = `<p>${mensagem}</p>`;
}

function criarFormulario(operacao) {
    const container = document.getElementById('container');
    container.innerHTML = `
        <label for="senha">Senha:</label>
        <input type="password" id="senha" placeholder="Digite sua senha">
        <br><br>
        ${operacao === 'realizarTransferencia' ? `
        <label for="contaDestino">Número da Conta de Destino:</label>
        <input type="text" id="contaDestino" placeholder="Digite o número da conta">
        <br><br>
        ` : ''}
        ${operacao !== 'mostrarSaldo' && operacao !== 'verificarExtrato' ? `
        <label for="valor">Valor:</label>
        <input type="number" id="valor" placeholder="Digite o valor" step="0.01">
        <br><br>
        ` : ''}
        <button type="button" onclick="inicio('${operacao}')">Confirmar</button>
    `;
}

function mostrarCampoSenha(operacao) {
    criarFormulario(operacao);
}

function solicitarSenha() {
    const senhaInput = document.getElementById('senha');
    if (!senhaInput) {
        exibirMensagem('Campo de senha não encontrado.');
        return false;
    }
    const senha = senhaInput.value;
    if (senha !== senhaCorreta) {
        exibirMensagem('Senha incorreta. Tente novamente.');
        return false;
    }
    return true;
}

function inicio(operacao) {
    if (!solicitarSenha()) return;

    switch (operacao) {
        case 'mostrarSaldo':
            exibirMensagem(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
            break;
        case 'realizarSaque':
            realizarSaque();
            break;
        case 'realizarDeposito':
            realizarDeposito();
            break;
        case 'realizarTransferencia':
            realizarTransferencia();
            break;
        case 'verificarExtrato':
            verificarExtrato();
            break;
        default:
            exibirMensagem('Operação inválida.');
            break;
    }
}

function realizarSaque() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        exibirMensagem('Operação não autorizada: valor inválido.');
    } else if (valor > saldo) {
        exibirMensagem('Operação não autorizada: saldo insuficiente.');
    } else {
        saldo -= valor;
        extrato.push({ tipo: 'Saque', valor });
        exibirMensagem(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
}

function realizarDeposito() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        exibirMensagem('Operação não autorizada: valor inválido.');
    } else {
        saldo += valor;
        extrato.push({ tipo: 'Depósito', valor });
        exibirMensagem(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
}

function realizarTransferencia() {
    const contaDestino = document.getElementById('contaDestino').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (!/^\d+$/.test(contaDestino)) {
        exibirMensagem('Operação não autorizada: número da conta inválido.');
    } else if (isNaN(valor) || valor <= 0) {
        exibirMensagem('Operação não autorizada: valor inválido.');
    } else if (valor > saldo) {
        exibirMensagem('Operação não autorizada: saldo insuficiente.');
    } else {
        saldo -= valor;
        extrato.push({ tipo: 'Transferência', valor });
        exibirMensagem(`Transferência de R$ ${valor.toFixed(2)} realizada com sucesso para a conta ${contaDestino}. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
}

function verificarExtrato() {
    if (extrato.length === 0) {
        exibirMensagem('Nenhuma operação realizada ainda.');
        return;
    }

    let extratoTexto = '<h3>Extrato</h3><ul>';
    extrato.forEach(item => {
        extratoTexto += `<li>${item.tipo}: R$ ${item.valor.toFixed(2)}</li>`;
    });
    extratoTexto += '</ul>';
    exibirMensagem(extratoTexto);
}

function sair() {
    exibirMensagem('Obrigado por utilizar os serviços do melhor banco das galaxias. Até mais!');
}


function iniciarSistema() {
    const nome = document.getElementById('usuarioo').value;
    const senha = document.getElementById('senhaa').value;
    const senhaCorreta = '3589';
    
    // Verificar a senha e redirecionar
    if (senha === senhaCorreta) {
        if (nome) {
            alert(`Olá ${nome}, é um prazer ter você por aqui!`);
        }
        window.location.href = 'banco2.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}

// Função para mostrar ou esconder a senha
function mostrarSenha() {
    const senhaInput = document.getElementById('senhaa');
    const tipo = senhaInput.type === 'password' ? 'text' : 'password';
    senhaInput.type = tipo;
    const toggleButton = document.getElementById('mostrarSenha');
    toggleButton.textContent = tipo === 'password' ? 'Mostrar Senha' : 'Esconder Senha';
}

// Adiciona um listener ao botão de mostrar/esconder senha
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'mostrarSenha';
    toggleButton.textContent = 'Mostrar Senha';
    toggleButton.type = 'button';
    toggleButton.onclick = mostrarSenha;
    
    // Adiciona o botão ao DOM, abaixo do campo de senha
    const senhaField = document.getElementById('senhaa');
    senhaField.parentNode.insertBefore(toggleButton, senhaField.nextSibling);
});
