var titulo = document.querySelector(".titulo"); // pega uma elementa da pagina e joga dentro da variavel
titulo.textContent = "Diovana Fisioterapia"//altera o valor que está dentro da variavel selecionada
var pacientes = document.querySelectorAll(".paciente");//estou puscando apenas o id do conteudo da tag td do html
for (var i = 0; i < pacientes.length; i++) { //o length é numero da posição do meu array de pacientes
    
    var paciente = pacientes[i]//variavel que numera cada paciente da lista
    
    var tdPeso = paciente.querySelector(".info-peso");//ler o valor de peso
    var peso = tdPeso.textContent; //coloca o valor do Tdpeso na var peso

    var tdAltura = paciente.querySelector(".info-altura");//ler o valor da altura
    var altura = tdAltura.textContent;//coloca o valor do TdAltura na var altura

    var tdImc = paciente.querySelector(".info-imc");//ler o valor do imc    
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc =peso /(altura * altura);
    return imc.toFixed(2);
 }