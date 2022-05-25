//Lógica de remoção, pego todos os pacientes da tabela, e quando eu clicar no tr, 
//desse paciente, eu quero removê-lo

//interar pelo array para pegar individual
//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
		//console.log("Fui clicado com duplo click");
//		this.remove();
		 //this -> em quem que o evento está atrelado, o paciente que foi clicado
//	});

//});

//PORÉM vou delegar a responsabilidade de ficar escutando os eventos para o pai
//que no caso é a tag table(a tabela)


var tabela = document.querySelector("table"); //dá para colocar também tbody pq com o pai como table, eu consigo remover a linha que está escrito o nome de cada coluna e nao faz sentido poder apagar, apenas as linhas abaixo que contem os dados!

tabela.addEventListener("dblclick", function(event){
    //quando o pai for clicado, eu pergunto qual dos filhos foi clicado. O event é a propriedade que responde o cara que foi clicado(QUAL FILHO)
	console.log(event.target);//A tabela é o dono do evento mas o event.target é quem recebeu o evento em si
	//event.target.remove(); mas nao quero eliminar apenas o td, e sim todo o tr
	//entao tenho que pegar o pai de quem foi clicado, subir um nível
	//var alvoEvento = event.target;
	//var paiDoEvento = alvoEvento.parentNode; //TR 
	//paiDoEvento.remove();


	//vou fazer usando menos linhas e variáveis
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		 event.target.parentNode.remove();
	}, 500)
	//pedir p/ o JS segurar e aplicar o css antes de remover 0,5 segundo(500 milesegundos)


});