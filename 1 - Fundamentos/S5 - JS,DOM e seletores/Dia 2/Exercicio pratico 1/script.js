document.getElementById('primeiroFilho').nextElementSibling

let pai = document.getElementById('elementoOndeVoceEsta').parentElement
pai.style.color = 'green'

let filhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild
filhoDoFilho.innerText = 'Filho do filho'

document.getElementById('pai').firstElementChild
document.getElementById('elementoOndeVoceEsta').previousElementSibling
document.getElementById('elementoOndeVoceEsta').nextSibling
document.getElementById('elementoOndeVoceEsta').nextElementSibling
document.getElementById('pai').lastElementChild.previousElementSibling