let button = document.querySelector(".botao-finalizar");
button.disabled = true;

//Início da Seleção de Item
let prato;
let bebida;
let sobremesa;
let preço_prato;
let preço_bebida;
let preço_sobremesa;

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
        preço_prato= item.querySelector(".preço").innerHTML;
        preço_prato=preço_prato.substring(2).replace(",",".")
        preço_prato= Number(preço_prato)
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
        preço_bebida= item.querySelector(".preço").innerHTML;
        preço_bebida=preço_bebida.substring(2).replace(",",".")
        preço_bebida= Number(preço_bebida)
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
        preço_sobremesa= item.querySelector(".preço").innerHTML; 
        preço_sobremesa= preço_sobremesa.substring(2).replace(",",".")
        preço_sobremesa= Number(preço_sobremesa)

        habilitar()
    }

//Fim da Seleção de Item



function whatsapp(){
    let preço_total = (preço_prato + preço_bebida + preço_sobremesa).toFixed(2) ;
    let mensagem =encodeURIComponent(`Olá, gostaria de fazer o pedido:\n 
    - Prato: ${prato} \n
    - Bebida: ${bebida} \n
    - Sobremesa: ${sobremesa} \n
    Total: R$ ${preço_total}`);
    
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






