const saudar = (nome) => {
    const horaAtual = new Date().getHours()

    const responder = (saudacao) => console.log(saudacao, nome)

    if (horaAtual <=12) return responder("Bom dia")
    if (horaAtual <=18) return responder("Boa tarde")
    return responder("Boa noite")
}

saudar("Daniel")