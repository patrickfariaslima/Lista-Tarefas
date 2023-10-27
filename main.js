const prompt = require('prompt-sync')();

let tarefas = []; // define a lista que vai receber as tarefas adicionadas;

function adicionarTarefa() {
    const tarefa = prompt('Digite uma tarefa a ser adicionada na lista: '); // solicita a tarefa através de prompt pro usuário. 
    const tarefaCapitalizada = tarefa.charAt(0).toUpperCase()+tarefa.slice(1).toLowerCase(); // função que irá padronizar as entradas, evitando que tenhamos tarefas com entradas de letras em formato diferente (maiúsculo ou minúsculo);
    if (tarefas.includes(tarefaCapitalizada)) {
        console.log('\nEssa tarefa já existe na lista.'); // verifica se a tarefa já existe na lista e evita duas tarefas iguais;
    } else if (tarefaCapitalizada) {
        tarefas.push(tarefaCapitalizada); //caso a entrada de tarefa passar por todas as validações, a tarefa será inclusa na lista tarefas;
        console.log('\nA tarefa foi adicionada à lista com sucesso!'); // mensagem de confirmação da entrada de tarefa;
    } else {
        console.log('\nO texto digitado não é válido.'); // não aceita entradas em branco;
    }
}

function editarTarefa() {
    if (verificarTarefasVazia()) { // invoca a função verificar Tarefas Vazia. Se a lista de Tarefas estiver vazia (retorno for true), impede que siga com a função a seguir. 
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja editar: ')) - 1; //solicita a entrada do número da tarefa de acordo com o que está na lista. Esse número será descrescido de 1 para que entre na contagem do index de arrays (que começa em 0);
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) { // validação se após a entrada o index é maior ou igual a zero E valida se a entrada é menor que o tamanho atual da lista de tarefas (evita a entrada de um número maior que a lista atual);
        console.log("");
        const tarefaEditada = prompt('Digite a nova descrição da tarefa: '); //solicita a nova entrada de descrição da tarefa que será editada/substituída.
        const tarefaEditadaCapitalizada = tarefaEditada.charAt(0).toUpperCase() + tarefaEditada.slice(1).toLowerCase(); //valida a entrada da nova tarefa, padronizando as letras;
        if(!tarefas.includes(tarefaEditadaCapitalizada)){ //valida se a nova entrada não existe já na lista de tarefas.
            tarefas [indexDaTarefa]= tarefaEditadaCapitalizada; // se não existir, adiciona;
            console.log('\nTarefa editada com sucesso!');
        } else {
        console.log("\nTarefa já existe na lista. Edição não realizada.");// se a nova entrada já existir, impede a edição.
        }
    } else{
        console.log("\n Tarefa não encontrada, verifique o número da tarefa que deseja editar."); // se o imput de id da tarefa não for encontrado, pede para checar e impede edição;
    }
}

function removerTarefa() {
    if(verificarTarefasVazia()){ // invoca a função verificar Tarefas Vazia. Se a lista de Tarefas estiver vazia (retorno for true), impede que siga com a função a seguir. 
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que deseja remover: ')) - 1; // solicita a ID da tarefa que será removida;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) { //valida para que a primeira tarefa também possa ser removida, e evita que o index indicado seja maior que o tamanho da lista;
        tarefas.splice(indexDaTarefa, 1); //remove apenas a tarefa indica;
        console.log('\nTarefa removida com sucesso!');
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado.");
    }
}

function listarTarefas() {
    if (tarefas.length > 0) { //verifica se a lista possui tarefas;
        console.log('\nA lista de tarefas atual é:');
        tarefas.forEach((tarefa, index) => { //através de foreach, percorre a array e retorna um novo index(index +1) e a tarefa daquela posição;
            console.log(`${index + 1}. ${tarefa}`);
        });
    } else {
        console.log('\nA lista de tarefas está vazia no momento, que tal adicionar uma tarefa?'); //retorno caso a lista esteja vazia;
    }
}

function obterId (){
    if(verificarTarefasVazia()){// invoca a função verificar Tarefas Vazia. Se a lista de Tarefas estiver vazia (retorno for true), impede que siga com a função a seguir. 
        return;
    }
    const indexDaTarefa = parseInt(prompt('Digite o número da tarefa que você quer ver: ')) - 1; //solicita o id da tarefa que deseja obter;
    if (indexDaTarefa >= 0 && indexDaTarefa < tarefas.length) { //valida para que a tarefa obtida possa também ser a tarefa na posição 0 e que o tamanho passado não seja maior que a lista atual.
        console.log('A tarefa solicitada é:');
        console.log(`${tarefas[indexDaTarefa]}`); //retorna apenas a tarefa do index indicado;
    } else {
        console.log("\nTarefa não encontrada, verifique o número da tarefa digitado."); //retorno caso não identifique o id informado no prompt.
    }
}

function reiniciarPrograma() {
    console.log('\nReiniciando o programa...'); //informa que irá reiniciar o programa;
    tarefas = []; // redefine a variável tarefas para [] (sem tarefas);
    console.log(''); 
    console.log('Bem Vinda(o) a ToDo List do Grupo 2!'); // reinicia o programa tal qual inicia, com as boas vindas, adicionar tarefa e em seguida chamando o menu;
    adicionarTarefa();
    menu();
}

function sair() { //invoca uma função que irá encerrar a aplicação;
  process.exit(0);
}

function verificarTarefasVazia(){ // um reaproveitamento de códigos para evitar que toda função tenha linhas que verificam se a lista está vazia, e se não estiver, lista as tarefas atuais.
    if (tarefas.length === 0) {
        console.log("\nNenhuma tarefa disponível na lista de Tarefas. Que tal adicionar uma tarefa?");
        return true;
    }
    listarTarefas();
    console.log("");
    return false;
}

function menu() { // função de menu
  while (true) {
      console.log("\nEscolha uma opção:");
      console.log("1. Adicionar Tarefa");
      console.log("2. Editar Tarefa");
      console.log("3. Remover Tarefa");
      console.log("4. Listar Tarefas");
      console.log("5. Obter Tarefa por ID");
      console.log("6. Reiniciar programa");
      console.log("7. Sair");
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
              obterId();
              break;
          case 6:
              reiniciarPrograma();
              break;
          case 7:
              console.log("Projeto desenvolvido por:");
              console.log("Bruno Lopes, Christiane Barbosa, João Marcos, Marília Oliveira e Patrick Farias");
              console.log('\nFinalizando a aplicação.');
              sair();
              break;
          default:
              console.log('\nOpção Inválida. Digite o número de uma das opções da lista.');
      }
  }
}
console.log('')
console.log('Bem Vinda(o) a To Do List do Grupo 2!')
console.log('');
adicionarTarefa();
menu();
