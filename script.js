

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

var tLido = document.getElementById("input-texto");
tLido.focus();

var textResultado = document.getElementById("msg");

function criptografia() {
	
	var lidoTexto = tLido.value;

	var novoTexto = [lidoTexto.lenght];


	var textocript ;

textocript=lidoTexto

textocript=textocript.replace(/[e\é]/g,'enter');
textocript=textocript.replace(/[i\í]/g,'imes');
textocript=textocript.replace(/a/g,'ai');
textocript=textocript.replace(/[o\ó]/g,'ober');
textocript=textocript.replace(/[u\ú]/g,'ufat');

/*
	for (var posicao=0; posicao<=lidoTexto.length; posicao++)
{
		if (lidoTexto[posicao]=="a")
				{
				 novoTexto[posicao]=lidoTexto[posicao].replace("a","ai");
				}
				 else if (lidoTexto[posicao]=="e")
				{
					novoTexto[posicao]=lidoTexto[posicao].replace("e","enter");
				}
				 else if (lidoTexto[posicao]=="i")
				{
					 novoTexto[posicao]=lidoTexto[posicao].replace("i","imes");
				}
				 else if (lidoTexto[posicao]=="o")
				{
					novoTexto[posicao]=lidoTexto[posicao].replace("o","ober");
				}
				 else if (lidoTexto[posicao]=="u")
				{
					novoTexto[posicao]=lidoTexto[posicao].replace("u","ufat");
				}
				else {
					 novoTexto[posicao]=lidoTexto[posicao];
					}

}
*/

//document.getElementById('msg').value=(novoTexto.join(''));
document.getElementById('msg').value=textocript;
}


function descriptografia() 
{
	var lidoTextoC = tLido.value;
	
	var descriptTexto ;



descriptTexto=lidoTextoC.replace(/ai/g,'a');
descriptTexto=descriptTexto.replace(/enter/g,'e');
descriptTexto=descriptTexto.replace(/imes/g,'i');
descriptTexto=descriptTexto.replace(/ober/g,'o');
descriptTexto=descriptTexto.replace(/ufat/g,'u');


document.getElementById('msg').value=(descriptTexto);

}


function copia()

{

var textocopiado = [textResultado.length];
textocopiado = textResultado.value;


document.getElementById("input-texto").value ='';
document.getElementById('input-texto').value =(textocopiado);
//document.getElementById('msg').value ='';


}



var botaoCriptor = document.getElementById("btn-cripto");
var botaoDeCriptor = document.getElementById("btn-descripto");

var botaoCopy = document.getElementById("btn-copy");

botaoCriptor.onclick = criptografia;

botaoDeCriptor.onclick = descriptografia;

botaoCopy.onclick = copia;

