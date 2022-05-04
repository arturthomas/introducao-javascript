var tabela = document.querySelector("table");
//addEventListener é evento responsável por escutar o clique do botão
tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    
    //setTimeout espera o tempo determinado para excutadar a função desejada
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);//tempo de espera da função setTimeout
    
});