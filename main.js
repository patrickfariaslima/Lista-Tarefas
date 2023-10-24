// instalar o prompt no projeto: No terminal, executar o comando: npm i prompt-sync
/*Lógica de Programação - Projeto final
O que?
Desenvolver, utilizando os conceitos envolvidos ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

Requisitos
Dentre as funcionalidades, espere-se que seja possível:

Adicionar uma tarefa
Editar uma tarefa salva
Remover uma tarefa salva
Listar todas as tarefas salvas
Obter uma tarefa, através de um parâmetro (id)
Observações
Não há persistência das tarefas no banco de dados. Para isso, você pode usar um array para armazenar a lista de tarefas cadastradas.*/
let prompt = require('prompt-sync')();

let tarefas = [];

adicionarTarefa();
function adicionarTarefa() {
    let tarefa = prompt('Digite uma tarefa a ser adicionada na lista: ');
    if (tarefa) {
        tarefas.push(tarefa);
        console.log('\nA tarefa foi adicionada à lista com sucesso!');
    } else {
        console.log('\nO texto digitado não é válido.')
    }
}

function editarTarefa() {
    if (tarefas.length === 0) {
        console.log("\nNenhuma tarefa disponível para edição. Que tal adicionar uma tarefa?");
        return;
    }
    listarTarefas();
    console.log("");
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja editar: ')) - 1;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) {
        console.log("");
        const tarefaEditada = prompt('Digite a nova descrição da tarefa: ');
        tarefas[indexDaTarefa] = tarefaEditada;
        console.log('\nTarefa editada com sucesso!');
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function removerTarefa() {
    if (tarefas.length === 0) {
        console.log("\nNenhuma tarefa disponível para remoção. Que tal adicionar uma tarefa?");
        return;
    }
    listarTarefas();
    console.log("");
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja remover: ')) - 1;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) {
        tarefas.splice(indexDaTarefa, 1);
        console.log('\nTarefa removida com sucesso!');
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function listarTarefas() {
    if (tarefas.length > 0) {
        console.log('\nA lista de tarefas atual é:');
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    } else {
        console.log('\nA lista de tarefas está vazia no momento, que tal adicionar uma tarefa?');
    }
}

function reiniciarPrograma() {
    tarefas = [];
    console.log('\nReiniciando o programa...');
}

function sair() {
    process.exit(0);
}

function menu() {
    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1. Adicionar Tarefa");
        console.log("2. Editar Tarefa");
        console.log("3. Remover Tarefa");
        console.log("4. Listar Tarefas");
        console.log("5. Reiniciar programa");
        console.log("6. Sair");
        console.log("");
        const opcao = parseInt(prompt('Digite o número de uma das opções acima: '));
        switch (opcao) {
            case 1:
                adicionarTarefa();
                break;
            case 2:
                editarTarefa();
                break;
            case 3:
                removerTarefa();
                break;
            case 4:
                listarTarefas();
                break;
            case 5:
                reiniciarPrograma();
                break;
            case 6:
                console.log('\nFinalizando a aplicação.');
                sair();
                break;
            default:
                console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
        }
    }
}

menu();
