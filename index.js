const $button = document.querySelector("button");

const monitoraClick = () => {
    document.write('Botão sofreu CLICK')
}

$button.addEventListener("click", monitoraClick)