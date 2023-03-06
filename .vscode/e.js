
function newButton(name, callBack) {
    const $body = document.querySelector("body");
    const $button = document.createElement('button');
    $button.textContent = name;
    callBack($button) {
        console.log('funcionou')
    $button.style.cssText = `
font-size: 40px;
`;
    }
    $body.insertAdjacentElement('beforeend', $button);
    //return $button
}

newButton('Login', (coiso) => {
    
});
newButton('Signup', (coiso) => {
    console.log('funcionou')
    coiso.style.cssText = `
font-size: 10px;
color: red;
`;
});
