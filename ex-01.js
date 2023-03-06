var fs = require('fs'); 
console.log("Primeiro comando");
//fs.readFile('./arquivo.txt', callback);
fs.readFile('./arquivo.txt', (err,data) =>{
    if (err) return console.error(err);
    console.log(String(data))
})
function callback(err, conteudo){
	if (err) return console.error(err);
    console.log(String(conteudo));
}
console.log("Segundo comando");
console.log("Terceiro comando");
