(document).ready( function(){ //Função para realizar  Jquery quando todos os elementos estiveram carregados
      
      //.click
      $('#evento1').click( function(){
        alert('Elemento foi clicado');
      });
      
      //.dbclick
      $('#evento2').dbclick( function(){
        alert('Elemento foi clicado duas vezes');
      });
      //.mousedown
      $('#evento3').mousedown( function(){
        alert('O elemento foi solto');
      });
      //.mouseover
      $('#evento4').mouseover( function(){
          alert('O mouse está sobre o elemtno');
      });
      //.mouseout
      $('#evento5').mouseout( function(){
          alert('O mouse está sobre o elemento');
      });
    });
Código da tabela 

<table>
  <thead>
    <th>Nome</th>
    <th>Ação</th>
    <th>Exemplo</th>
  </thead>
  <tr>
    <td>.click()</td>
    <td>Acionado com clique do mouse.</td>
    <td id="evento1">Exemplo</td>
  </tr>
  <tr>
    <td>.dbclick()</td>
    <td>Acionado no clique duplo do mouse.</td>
    <td id="evento1">Exemplo</td>
  </tr>
  <tr>
    <td>.mousedown()</td>
    <td>Acionado no clique do mouse (soltando ou não o botão)</td>
    <td id="evento3">Exemplo</td>
  </tr>
  <tr>
    <td>.mouseover()</td>
    <td>Acionado quando o curso do mouse sobrepõe o elemento da página.</td>
    <td id="evento4">Exemplo</td>
  </tr>
  <tr>
    <td>.mouseout()</td>
    <td>Acionado quando o cursor do mouse sai da área de um elemnto da página.</td>
    <td id="evento5">Exemplo</td>
  </tr>
  </table>