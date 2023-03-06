function exibePrimeiraMensagem (mensagem, callback) {
	console.log(mensagem);
	callback();
}
function exibeSegundaMensagem(){
	console.log('Essa é a segunda mensagem do novo exemplo');
} 
exibePrimeiraMensagem ('Essa é a primeira mensagem do novo exemplo', exibeSegundaMensagem);