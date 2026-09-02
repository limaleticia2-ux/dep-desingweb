var nome = "Leticia"
let nasc = 2008
const viva = confirm ("clique aqui se estiver vivo")
let altura;

function calcIdade(ano = 2026){
    let idade = ano - nasc;
    console.log(`idade dentro da funcao:, ${idade}`);
    let menor;
    if(idade < 18){
        menor = true
    }
    else {
        menor = false
    }

    return idade;
}
retorno = calcIdade()
a= retorno[0]
b= retorno[1]

if(retorno[1]){
    alert(`idade: ${retorno[0]}, voce é menor de idade`)
}else{
    alert(`idade: ${retorno[0]}, voce é maior de idade`)
}

alert(`idade fora da funcao: ${calcIdade()}`);
/*console.log(`idade fora da função: ${idade}`);
*/
if(vivo){
    altura = prompt ("Digite sua altura");
}
 