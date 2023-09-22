var timerId = null;//Variavel que armazena a chamada da função timeout

function iniciaJogo(){
	 //alert("Jogo iniciado"); //Teste pra ver se o jogo foi iniciado
   var url = window.location.search;
   //alert(url);
   var nivel_jogo = url.replace("?" , "");

   //alert(nivel_jogo);
   var tempos_segundos = 0;

   //Tempo das dficuldades do jogo

   //Fácil 120 segundos
    if (nivel_jogo == 1) {
      tempos_segundos = 120;
    }


   //Normal 60 segundos
     
     if (nivel_jogo == 2) {
    	tempos_segundos = 60;
    }

   //Difícil 30 segundos
   if (nivel_jogo == 3) {
    	tempos_segundos = 30;
    }
    //Iserindo segundos no span 
    document.getElementById('cronometro').innerHTML = tempos_segundos;

    //quantidade de balões
   var qtde_baloes = 80;

   cria_baloes(qtde_baloes);

   //imprimir qtde baloes inteiros
   document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
   document.getElementById('baloes_estourados').innerHTML = 0;

   contagem_tempo(tempos_segundos + 1)//Contando o tempo segundos 
}

function contagem_tempo(segundos){

	segundos = segundos - 1;//Para a contagem diminuir a cada segundo
	document.getElementById('cronometro').innerHTML = segundos;
	timerId = setTimeout("contagem_tempo("+segundos+")",1000);

	if (segundos  <= 0 ) {
		clearTimeout(timerId);//para a execução da função do setTimeout
		game_over();
		return false;
	}
}

function game_over(){
	remove_eventos_baloes();
	alert("Fim de jogo , você não conseguiu estourar todos os balões a tempo");

	
     
}situacao_jogo:
   function cria_baloes(qtde_baloes){

   	for(var i = 1; i <= qtde_baloes; i++){
      
      var balao = document.createElement("img");

      balao.src = "imagens/balao_azul_pequeno.png";
      document.getElementById('cenario').appendChild(balao);
      balao.style.margin = '10px';//abrindo um espaço entre os balões
      balao.id = 'b'+i;//Aqui fica a númeração dos balões (b1,b2,b3,b4......)
      balao.onclick = function(){ estourar(this);};
   	}
   }

//função estourar
   function estourar(e){

   	var id_balao = e.id;//Criando uma variavel para armazenar 
   
   document.getElementById(id_balao).setAttribute("onclick","");
   //Substituindo a imagem do balão normal para balão estourado
   document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
   //alert(id_balao); alert(balão clicado) para testes

pontuacao(-1);//Diminuir a pontuação a cada balão estourado
   }

   function pontuacao(acao){
     var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
     var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;
     
     baloes_inteiros = parseInt(baloes_inteiros);
     baloes_estourados = parseInt(baloes_estourados);

     baloes_inteiros = baloes_inteiros + acao;//Aqui soma os balões inteiros
     baloes_estourados = baloes_estourados - acao;//Aqui conta os balões estourados
     
   document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
   document.getElementById('baloes_estourados').innerHTML = baloes_estourados;
    
    situacao_jogo(baloes_inteiros,baloes_estourados);
   }

   function situacao_jogo(baloes_inteiros,baloes_estourados){
   	if (baloes_inteiros == 0) {//Se os balões inteiros for igual a zero

   		alert('Parabéns , você conseguiu estourar todos os balões a tempo');
   		parar_jogo();
   	}
   }

   function parar_jogo(){
   	 clearTimeout(timerId);
   }

   function remove_eventos_baloes() {
    var i = 1; //contado para recuperar balões por id
    
    //percorre o lementos de acordo com o id e só irá sair do laço quando não houver correspondência com elemento
    while(document.getElementById('b'+i)) {
        //retira o evento onclick do elemnto
        document.getElementById('b'+i).onclick = '';
        i++; //faz a iteração da variávei i
    }
}



/*url.replace é um elemento que substitui um caracter pelo outro  
exemplo:

url.replace("antes" , "depois");

innerHTML : Um elemento que mostra um valor do javascript dentro do html    

exemplo:
document.getElementById('nome da id do html').innerHTML = nome da varivavel do JS;


document.createElement Ele cria um elemento de html ou seja uma tag 

exemplo:

document.createElement('nome da tag');



appendChild(): É um elemento que adiciona elementos embaixo de uma tag escolhida no processo ou seja
ela não preenche a tag escolhidas e pode repetir a variavel  usando o for



setTimeout: Está função do JS  tem dois componentes o nome da função e o número de segundos

exemplo:
setTimeout(nome da função,número de segundos(1...));
*/