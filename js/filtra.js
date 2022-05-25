var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	console.log(this.value);//Ou poderia ser: campoFiltro.value;

	//quero só mostrar quem for igual
	var pacientes = document.querySelectorAll(".paciente");//retorna meus pacientes

		if(this.value.length > 0){

			for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");// dentro do .paciente procurei um td que tem a classe info-nome
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value, "i");//expressao regular que vou usar para filtrar cada caractere. No parametro eu quero primeiro buscar o meu this.value e no segundo como que eu quero que ela busque.


				if(!expressao.test(nome)){//testar se no meu nome vai ter pelo menos um pedacinho da minha expressão, retorna boolean
					paciente.classList.add("invisivel");
				}else{
					paciente.classList.remove("invisivel");
				}
			}

		}else{

			for(var i = 0; i < pacientes.length; i++){
				var paciente = pacientes[i];
				paciente.classList.remove("invisivel"); 
			}
		}


		



});