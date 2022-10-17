
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
    }

//Fim da Seleção de Item







