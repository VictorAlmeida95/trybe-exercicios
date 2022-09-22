// Escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNum = 0;

for (let index = 2; index <= 50; index += 1) {
  let primo = true;
  for (let index2 = 2; index2 < index; index2 += 1) {
    if (index % index2 === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorNum = index;
  }
}

console.log(maiorNum);