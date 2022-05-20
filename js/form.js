var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){

	event.preventDefault(); //previne o comportamento padrão. Ou seja, não recarregue a página ainda, só de um console.log, por ex
	console.log("Oi eu sou o botão e fui clicado."); 

	//salvar os dados do meu formulário e acrescentar na tabela

	var form = document.querySelector("#form-adiciona");
	console.log(form.altura);//consigo acessar cada input pelo "name" deles
	console.log(form.altura.value);//Pego o valor do campo, IMPORTANTE

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;

	//Criando uma nova linha no meu html (tr)
	var pacienteTr = document.createElement("tr");

	//além das tr, é necessário criar 5 tds para preencher

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso,altura);

	//função append child, vc coloca como filho da tr cada uma das tds, pq o td é filho do tr
	//colocando um elemento dentro do outro:

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);


	console.log(pacienteTr);
	//colocando na tabela:

	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

});