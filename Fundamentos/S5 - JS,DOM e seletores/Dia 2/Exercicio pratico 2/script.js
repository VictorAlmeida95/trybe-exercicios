let pai = document.querySelector('#paiDoPai').firstElementChild
let irmaoOnde = document.createElement('section')
pai.appendChild(irmaoOnde)
// criar teste pro section

let onde = document.querySelector('#primeiroFilho').nextElementSibling
let filhoOnde = document.createElement('section')
onde.appendChild(filhoOnde)

let neto = document.querySelector('#elementoOndeVoceEsta').firstElementChild
let bisneto = document.createElement('section')
neto.appendChild(bisneto)

let ondeBisneto = document.querySelector('#primeiroFilhoDoFilho').firstElementChild
ondeBisneto.parentElement.parentElement.nextElementSibling