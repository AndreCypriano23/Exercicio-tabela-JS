var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

	console.log("Buscando pacientes...");

	 var xhr = new XMLHttpRequest(); //Objeto do JS responsável por fazer requisições HTTP
	 //vou configuar esse objeto do jeito que eu quiser

	 xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	 xhr.addEventListener("load", function(){

	 	var erroAjax = document.querySelector("#erro-ajax");

	 	if(xhr.status == 200){

	 		erroAjax.classList.add("invisivel");

		 	//console.log(xhr.responseText);
		 	var resposta = xhr.responseText;
		 	console.log(resposta);
		 	console.log(typeof resposta);//qual o tipo da resposta

		 	var pacientes = JSON.parse(resposta);//tranformar json p/ objetos js
		 	console.log(pacientes);
		 	 console.log(typeof pacientes);


		 	 pacientes.forEach( function(paciente) {
		 	 	 adicionaPacienteNaTabela(paciente);
		 	 });
	 	}else{
	 		console.log(xhr.status);
	 		console.log(xhr.responseText);
	 	
	 		erroAjax.classList.remove("invisivel");
	 	}

	 

	


	 });//Quando a resposta estiver carregada vc executa a função e pega todos os dados

	 xhr.send();


});