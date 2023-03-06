
console.clear()
setTimeout(() => {console.log('1')}, 1);
console.log('2')

function criaPessoa(nome) {
    return {nome}
}

const pessoa = criaPessoa
console.log(pessoa)

const pessoa2 = criaPessoa()
console.log(pessoa2)

console.log(pessoa('Flávio'))
