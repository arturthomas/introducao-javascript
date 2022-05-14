var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Buscando Pacientes...");
    var xhr= new XMLHttpRequest();
    
    //reponsável por APENAS ABRIR a requisição
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); 
    
    //adiciona um evento do tipo load no objeto xhr
    xhr.addEventListener("load",function(){
      var erroAjax= document.querySelector("#erro-ajax");

      if(xhr.status == 200){
          erroAjax.classList.add("invisivel");
          var resposta = xhr.responseText;
          var pacientes= JSON.parse(resposta);

          pacientes.forEach(function(paciente){
              adicionaPacienteNaTabela(paciente);              
          });
      }else{
          erroAjax.classList.remove("invisivel")
      }
    });

    //comando responsável por mandar buscar E abrir o xhr.open
    xhr.send();
});
//https://api-pacientes.herokuapp.com/pacientes