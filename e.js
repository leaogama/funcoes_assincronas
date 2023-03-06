
function newButton(name, callBack) {
    const $body = document.querySelector("body");
    const $button = document.createElement('button');
    $button.textContent = name;
    callBack($button)
    $body.insertAdjacentElement('beforeend', $button);
    return $button
}



newButton('Login', (coiso) => {
    console.log('funcionou')
    coiso.style.cssText = `
font-size: 40px;
`;

});
newButton('Signup', (coiso) => {
    console.log('funcionou');
    coiso.addEventListener('click', () => {
        console.log('OK')
    })
    coiso.style.cssText = `
font-size: 10px;
color: red;
`;
});
