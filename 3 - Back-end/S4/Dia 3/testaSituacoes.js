const calculaSituacao = require('./calculaSituacao');

console.log('Quando a média for menor que 7, retorna "reprovação":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Erro 0413 🚨');
}

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Erro 0413 🚨');
}

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Erro 0413 🚨');
}
