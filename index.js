readlineSync = require('readline-sync');

//Variáveis do Sistema
let dataEvento = new Date('26/11/2022')
let qtdCadastrados = 0;
let limiteCadastrados = 3;
let nomeParticipante = "";
let nomePalestrante = "";
let listaDeParticipantes = [];
let listaDePalestrantes = ['Helena', 'Chico', 'Mario'];

data = validaDataEvento()

if (data > 0){
    console.log();
    console.log("-----CADASTRO DE PARTICIPANTES DO EVENTO ---------");
    console.log();
    while (limiteCadastrados > 0) {
        if (qtdCadastrados >= 1){
            console.log("-----CADASTRO DE PARTICIPANTES DO EVENTO ---------");
            console.log();
            console.log("Limite restante: " + limiteCadastrados);
            idade = readlineSync.question("Digite a idade do proximo participante? ");
            if (idade >= 18){
                cadastrar();
            }else{
                if (typeof idade  === 'string'){
                    console.log("É necessário que a idade seja um número!");
                    console.log();
                }else{
                    console.log("Não é permitido cadastrar participantes menores que 18 anos!");
                }
            }
        }else{
            idade = readlineSync.question("Digite a idade do participante? ");
            if (idade >= 18){
                cadastrar();
            }else{
                console.log("Não é permitido cadastrar participantes menores que 18 anos!");
                console.log();
            }
        }
        
    }
    console.log("Limite excedido para cadastrar!");
}else{
    console.log("Não pode cadastrar");
}

function validaDataEvento(){
    const agora = Date.now();
    const hoje = new Date(agora);
    const dataEvento = '2022-11-26';
    const difMinuto   = new Date(dataEvento) - new Date(hoje);
    const difDia = difMinuto / (1000 * 60 * 60 * 24);
    return Math.round(difDia, 1);
}

function cadastrar() {
    qtdCadastrados = qtdCadastrados + 1;
    limiteCadastrados = limiteCadastrados - 1;
    var nome = readlineSync.question("Digite o nome do participante?  ");
    listaDeParticipantes.push(nome);
    console.log("Palestrantes: Helena, Chico, Mario");
    nomePalestrante = readlineSync.question("Digite qual Palestrante: ");
    console.log("Participante: " + nome);
    console.log("Palestrante: "+ nomePalestrante);
    console.log("Foi cadastrado com sucesso!");
    console.log("Cadastrado nº: " + qtdCadastrados);
    console.log("Limite restante: " + limiteCadastrados);
    console.log("Participantes do Evento: " + listaDeParticipantes);

}
