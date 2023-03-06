

function exibeTudo (callback1, callback2) {
	callback1()
	callback2()
}

function msg1 () {
	console.log('mensagem 1')
	setTimeout( function(){
		console.log('Esse é o primeiro bloco de comandos após 5 segundos');
		}, 5000 );
}

function msg2 () {
	console.log('mensagem 2')
	
}

exibeTudo(msg1,msg2)


