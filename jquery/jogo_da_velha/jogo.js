var rodada = 1;//Criando uma variavel que vai controlar os pontos dos jogadores
var matriz_jogo = Array(3);//Criando uma array de 3 posições
var deu_velha = true;

matriz_jogo['a'] = Array(3);//lado a com array de 3 posições
matriz_jogo['b'] = Array(3);//lado b com array de 3 posições
matriz_jogo['c'] = Array(3);//lado c com array de 3 posições

//Criando a mtraiz bidimensional que vai controlar o jogo ap partir da marcação de pontos denominada
matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;
$(document).ready( function(){

/*alert('jogo carregado');//EXEMPLO  para avisar de que o jogo está carregado!*/

$('#btn_iniciar_jogo').click( function(){

   //alert('iniciar jogo');//Aviso que o jogo foi iniciado 


//validar a digitação dos apelidos do jogadores


//Se o nome do jogador 1 estiver vazio 
if ($('#entrada_apelido_jogador_1').val() == '') {

	alert('Apelido do jogador 1 não foi preenchido');
	return false;
}

//Se o nome do jogador 2 estiver vazio
if ($('#entrada_apelido_jogador_2').val() == '') {

	alert('Apelido do jogador 2 não foi preenchido');
	return false;
}

if ($('#entrada_apelido_jogador_1').val() == "" && $('#entrada_apelido_jogador_2').val() == "") {

	alert('Ambos os jogadores estão sem apelidos');
}

//alert($('#entrada_apelido_jogador_1').val());
//alert($('#entrada_apelido_jogador_2').val());



//exibir os apelidos (usando a função html)
$('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
$('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());

//controla a visualização das divs com o id="palco_jogo"

$('#pagina_inicial').hide();//Esconde os itens iniciais da página
$('#palco_jogo').show();//Mostra o "palco_jogo" que estava escondido



});

//Usando a classe jogada para fazer um evento 
$('.jogada').click( function(){

//alert('teste'); <-apenas para testar se o evento esta dando certo (use isso em projetos futuros)
 var id_campo_clicado = this.id;//o this se refere a função click 
 $('#'+id_campo_clicado).off();//Parando o evento onde uma jogada já foi feita
 jogada(id_campo_clicado);//Usando o método jogada com a variavel
 //alert(id_campo_clicado);O alerta mostrará cada classe do campo do jogo de velha clicado(foi usado para testar os campos)

});


//metodo para a jogada para passar como parâmetro o id_campo_clicado com this.id
//ou seja o this.id é o parametro this.id = id 
function jogada(id){

var icone = '';//Aqui sera aramazena a imagem que vai ser atribuida ao jogador com a cor correspondente
var ponto = 0;//O ponto que vai definir o resultado

/*Os dois jogadores vai possui um tipo de número o jogador 1 possui o número impar e o
jogador 2 possui o número par e vamos executar o if para pegar o resto de cada divisão*/

//Se rodada node(resto) de 2 for igual a 1
if ((rodada % 2) == 1) {
	//alert('É a vez do jogador 1');
	icone ='url("imagens/marcacao_1.png")';//Pegando a imagem com url'("")';
	ponto = -1;
}
//senão
else{
	//alert('É a vez do jogador 2');
	icone = 'url("imagens/marcacao_2.png")';//Pegando a imagem com url'("")';
	ponto = 1;
}


rodada++;//rodada ganha incremento

$('#'+id).css('background-image',icone);//usando a função css com backgound-image e a imagem definida do jogador

  var linha_coluna = id.split('-');//trocando o caracter traço(-) por o id

   matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;//Pegando a posição da jogada e marcando a posição correta do array(veja com o console.log)

   //console.log(matriz_jogo); //<- Use o console.log para ver os array serem preenchidos
   

   verfica_combinacao();//Chamando a função 
}


function verfica_combinacao(){
   
   //verifica na horizontal
   var pontos = 0;
   for(var i = 1; i <= 3; i++){
   	pontos = pontos + matriz_jogo['a'][i];
   }

   ganhador(pontos);//Chamando o método com o parâmetro
   
   pontos = 0;

   for(var i = 1; i <= 3; i++){
   	pontos = pontos + matriz_jogo['b'][i];
   }
   ganhador(pontos);

   pontos = 0;

   for(var i = 1; i <= 3; i++){
   	pontos = pontos + matriz_jogo['c'][i];
   }
    ganhador(pontos);
    
    //verifica na vertical
    for(var l = 1; l <=3; l++){

    	pontos = 0;//Zerando os pontos para a verificação

    	//Abaixo somará os pontos na vertical se estiverem marcados
    	pontos += matriz_jogo['a'][l];
    	pontos += matriz_jogo['b'][l];
    	pontos += matriz_jogo['c'][l];
    }

    	ganhador(pontos);//Se estiver com 3 pontos somados mostrará o vencedor

    	//Verificar nas diagonais
    	pontos = 0;
    	pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
    	ganhador(pontos);
        
        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);

        if(rodada > 9 && deu_velha == true){
        	alert('xiiii ,deu velha');
        	$('.jogada').off();
        }

    

}

function ganhador(pontos){
	//Se o jogador 1 tiver -3 pontos
	if (pontos == -3) {
		var jogada_1 = $('#entrada_apelido_jogador_1').val();//Pegando o nome do jogador para a variavel
		alert(jogada_1 + ' é o vencedor');//Mostrando o vencedor
		$('.jogada').off();//Desativando o evento click
		deu_velha = false;
    
    //Se o jogador 2 tiver 3 pontos
	}
	else if (pontos == 3) {
		var jogada_2 = $('#entrada_apelido_jogador_2').val();//Pegando o nome do jogador para a variavel
		alert(jogada_2 + ' é o vencedor');//Mostrando o vencedor
		$('.jogada').off();//Desativando o evento click
        deu_velha = false;
	}
	

}

function mostrarmenus(pontos){

	if (pontos == -3 || pontos == 3 ) {
$('#Reiniciar_nomes').show();
		$('#Reiniciar').show();
		$('#aviso').show();
}
}
});
/*Função val():É uma função que recupera o value digitado no input(no entanto apesar de ser
um ótimo recurso ele só funciona dentro da tag input do html)


função html():é uma função que pega o valor inserido do html e não possui limitações 
como o val() 

função css


função split

função off()*/