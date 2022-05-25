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

				if(nome != this.value){
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