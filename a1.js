const saudacao = (nome) => console.log('olá ' + nome );
const processaEntradaUsuario = (callback) => {
    const nome = prompt("Digite seu nome:");
    callback(nome)

}

processaEntradaUsuario(saudacao);