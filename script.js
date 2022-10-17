let button = document.querySelector(".botao-finalizar");
button.disabled = true;
let prato;
let bebida;
let sobremesa;

//Início da Seleção de Item

function selecionarPrato(item){
  const verificado = item.querySelector(".verificado");
  const verificadoSelecionadoAntes = document.querySelector (".prato-principal .verificado-verde");
  const botaoSelecionadoAntes = document.querySelector(".prato-principal .item-selecionado");
    if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove('item-selecionado');
        verificadoSelecionadoAntes.classList.remove('verificado-verde');
    }
        item.classList.add("item-selecionado");
        verificado.classList.add("verificado-verde");

        prato = item.querySelector(".prato").innerHTML;
        habilitar()
    }


 function selecionarBebida(item){
  const verificado = item.querySelector(".verificado");
  const verificadoSelecionadoAntes = document.querySelector (".bebida .verificado-verde");
  const botaoSelecionadoAntes = document.querySelector(".bebida .item-selecionado");
    if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove('item-selecionado');
        verificadoSelecionadoAntes.classList.remove('verificado-verde');
    }
        item.classList.add("item-selecionado");
        verificado.classList.add("verificado-verde");

        bebida = item.querySelector(".prato").innerHTML;
        habilitar()
    }


function selecionarSobremesa(item){
  const verificado = item.querySelector(".verificado");
  const verificadoSelecionadoAntes = document.querySelector (".sobremesa .verificado-verde");	
  const botaoSelecionadoAntes = document.querySelector(".sobremesa .item-selecionado");
    if (botaoSelecionadoAntes !== null){
	    botaoSelecionadoAntes.classList.remove('item-selecionado');
        verificadoSelecionadoAntes.classList.remove('verificado-verde');
    }
	    item.classList.toggle("item-selecionado");
        verificado.classList.add("verificado-verde");

        sobremesa = item.querySelector(".prato").innerHTML;
        habilitar()
    }

//Fim da Seleção de Item

function whatsapp(){
    let mensagem= ""
    
    window.open("https://wa.me/5512988323020?text=" +mensagem);
    }

    
function habilitar(){
    if (prato !== undefined && bebida!==undefined && sobremesa!==undefined){
        const botaoHabilitado = document.querySelector(".botao-finalizar")
        botaoHabilitado.classList.add("finalizar-habilitado")
        botaoHabilitado.innerHTML="Fechar pedido";
        button.disabled = false;
    }
    }





