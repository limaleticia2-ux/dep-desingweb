let nome = prompt("Digite seu nome, ");
let nasc = Number(prompt("Digite seu ano de nascimento"));
let viva = confirm("Digite em ok se estiver viva. caso contrario cancelar")
let altura = Number(prompt("Digite sua altura"));
let sexo = prompt("Digite seu sexo ");
let peso =  Number(prompt("Digite seu peso"));
let imc = peso/altura;

console.log("nome", typeof{nome});
console.log("nasc", typeof{nasc});
console.log("viva", typeof{viva});
console.log("altura", typeof{altura});
console.log("sexo", typeof{sexo});
console.log("peso", typeof{peso});
console.log("imc", typeof{imc});

msg = ` nome ${nome}\nAno de nascimento: ${nasc}\nViva: ${viva}`
msg = msg +`\naltura: ${altura}\nsexo: ${sexo}\npeso: ${peso}`
msg = msg + `imc: ${imc.toFixed(2)}`;

alert(msg);