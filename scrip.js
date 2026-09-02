var nome = "Leticia"
let nasc = 2008
const viva = confirm ("clique aqui se estiver vivo")
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da funcao:, ${idade}`);
    return idade;
}
alert(`idade fora da funcao: ${calcIdade()}`);
/*console.log(`idade fora da função: ${idade}`);
*/
if(vivo){
    altura = prompt ("Digite sua altura");
}
 