const readline = require('readline-sync');

const name = readline.question('Digite seu nome: ');
console.log(`Seu nome é ${name}`);

// npm init -y criar o package.json
// npm install value instala uma biblioteca de dependencia EX readline-sync
// npm install -D value instala só pra desenvolvimento EX nodemon
