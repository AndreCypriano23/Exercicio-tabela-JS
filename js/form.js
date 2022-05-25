var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

	event.preventDefault(); //previne o comportamento padrão. Ou seja, não recarregue a página ainda, só de um console.log, por ex
	console.log("Oi eu sou o botão e fui clicado."); 

	//salvar os dados do meu formulário e acrescentar na tabela
	var form = document.querySelector("#form-adiciona");
	//console.log(form.altura);
	//consigo acessar cada input pelo "name" deles
	//console.log(form.altura.value);
	//Pego o valor do campo, IMPORTANTE
    

    var paciente = obtemPacienteDoFormulario(form);
    //console.log(paciente);


    var erros = validaPaciente(paciente);
    //console.log(erros);
	if(erros.length > 0){
	
		exibeMensagensdeErro(erros);


		return; //ele para aqui e não chega nas linhas seguintes (tabela)
	}


    var pacienteTr = montaTr(paciente);
	console.log(pacienteTr);


	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	//limpar os campos.
	form.reset();

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

	

	function exibeMensagensdeErro(erros){

		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML = ""; //controlar o HTML interno. Toda vez que eu for exibir a mensagem de erro eu vou apagar as anteriores e printar as novas

		erros.forEach(function(erro){//para cada item do meu array:
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});

	}



    //Função que vai receber os forms e vai retornar os pacientes

    function obtemPacienteDoFormulario(form){

		//Objetos em JS 
		var paciente = {
			//passando as propriedades do objeto
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc : calculaImc(form.peso.value, form.altura.value)
		}
		//ao invés de eu retornar várias variáveis com os valores eu retorno apenas
		//um objeto com as características
		return paciente;
    }




    function montaTr(paciente){
    	//vai retorar uma tr criada
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");//insere a classe paciente

		//além das tr, é necessário criar 5 tds para preencher		

		//função append child, vc coloca como filho da tr cada uma das tds, pq o td é filho do tr
		//colocando um elemento dentro do outro:
		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
		pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
		pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


		return pacienteTr;

    }


    function montaTd(dado, classe){
    	var td = document.createElement("td");
    	td.textContent = dado;
    	td.classList.add(classe);

    	return td;
    }

    function validaPaciente(paciente){

    	var erros = [];

    	if(paciente.nome.length == 0){
    		erros.push("O Nome não pode ser em branco!");
    	}

    	if(!validaPeso(paciente.peso)){
    
    		erros.push("Peso é inválido!");//A função push coloca alguma coisa para dentro do array
    	}

    	if(!validaAltura(paciente.altura)){

    		erros.push("A minha altura é inválida");
    	}

    	if(paciente.gordura.length == 0){
    		erros.push("A gordura não pode ser em branco");
    	}

    	if(paciente.peso.length == 0){
    		erros.push("O Peso não pode ser em branco");
    	}

    	if(paciente.altura.length == 0){
    		erros.push("A altura não pode ser em branco");
    	}

   
    	return erros;
    }

 