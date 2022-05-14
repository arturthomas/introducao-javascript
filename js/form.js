//fica escutando um evento de um determinada classe. "cliente" é a ação que será escutada ou executado
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();//preventDefault() impede que o evento padrão ocorra
    
    var form = document.querySelector("#form-adiciona");

    //pegando o valor dentro da propriedade html e salvando na variavel
    var paciente = obtemPacienteDoFormulario(form);

    //criar um variavel para criar um elemento html utilizando a função createEtelement
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){ //length é o tamanho da string
        exibeMensagensDeErro(erros);
        return;//o return vasio força sair da função e não execulta a o restante do codigo
    }
    adicionaPacienteNaTabela(paciente)

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form){
    var paciente={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function montaTr(paciente){
    var pacienteTr= document.createElement("tr");//cria um elemento do tipo <tr></tr>
    pacienteTr.classList.add("paciente");//adicionando uma classe no HTML

    //montando o elemento do HTML td e colocando como filho do elemento tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//funcão para montar o elemento td do HTML
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent= dado;
    td.classList.add(classe);
    return td;

}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
//sdljfslkdjfsdjflskjdf\/
function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
