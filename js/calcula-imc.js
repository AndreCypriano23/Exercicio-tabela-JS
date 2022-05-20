//alert("Olá mundo");			
//console.log("Olá mundo");
//DOM é a representação do mundo HTML pro meu JS e pra ter acesso a esse cara
//nós usamos uma palavra chamada "document" digite ela no console do f12, veja //que a página toda é representada pelo document, é ele que representa
//console.log(document);
//o document é a página inteira, como faço para recuperar apenas um pedaço, 
//uma tag?
//console.log(document.querySelector("h1"));
//var titulo = document.querySelector("h1"); pegaando pega tag funciona mas nao é uma boa prática
//console.log(titulo);
//console.log(titulo.textContent);

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //Retorna um array de pacientes que tem essa classe
console.log(pacientes);

for(i=0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEValido = true;

	var alturaEValida = true;

	if (peso <= 0 || peso >= 1000){
		console.log("Peso inválido");
		pesoEValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); //adiciona uma nova classe ao meu objeto e pega o css dele, mais recomendável usar assim, se tiver que mudar a cor em vários lugares, é só alterar lá no CSS
	}

	if(altura <= 0 || altura >= 3.00){
		console.log("Altura inválida!");
		alturaEValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.style.backgroundColor = "orange"; //não recomendado mas funciona, é mais legal colocar uma classe para altura lá no css e aqui incluir a classe ao invés de setar o valor do atributo na mão
	}


	if(pesoEValido && alturaEValida){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
	

}

function calculaImc(peso, altura){
	var imc = 0;
	
	imc = peso / (altura*altura);

	return imc.toFixed(2);
}










titulo.addEventListener("click", mostraMensagem);
//função: 
function mostraMensagem(){
	console.log("Olá eu fui clicado");
}

//função anonima: 
titulo.addEventListener("click", function(){
	console.log("Olha só, posso chamar uma função anonima");
});



















