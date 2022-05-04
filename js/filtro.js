var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    //addEventListener é evento responsável por escutar a digitação ou seja o evento de input
    
    console.log(this.value);//aqui estou pegando meu atributo value do meu campo de input
    
    var pacientes = document.querySelectorAll(".paciente");//querySelectorAll permite retorna um array de pacientes
    if (this.value.length > 0){//se o campo do meu input for maior que 0 entrar no for.
        //propriedade length serve para ver o tamanho da string ou numero

        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            //pegando um paciente de uma posição do array e colocando na variavel paciente

            var tdNome = paciente.querySelector(".info-nome");//buscando o paciente dentro da calsse info-nome

            var nome = tdNome.textContent;//extraindo o conteudo de texto que está na classe info-nome, que neste caso está salvo na variavel tdNome

            //verificar se o nome do paciente é diferente do valor digitado
            if (nome != this.value){
                //se o nome é diferente adiciona a classe inisivel para sumir os demais paciente
                paciente.classList.add("invisivel");
            } else {//se o nome NÃO for diferente remove a classe invisivel
                paciente.classList.remove("invisivel");
            }
        }

    } else {//o valor do meu input for menor que 0 faço o for baixo
        //percorro todo meu array de paciente e removo a classe inivisvel
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});