// request 1

let corpo = document.querySelector('body')
let h1 = document.createElement('h1')
corpo.appendChild(h1)
h1.innerText = 'Exercício - JavaScript DOM'

// request 2
let main = document.createElement('main')
main.className = 'main-content'
corpo.appendChild(main)

// request 3
let fMain = document.querySelector('.main-content')
let sectionC = document.createElement('section')
sectionC.className = 'center-content'
fMain.appendChild(sectionC)

// request 4
let fSection = document.querySelector('.center-content')
let p = document.createElement('p')
p.innerText = 'Ordo Realitas'
fSection.appendChild(p)

// request 5
let sectionL = document.createElement('section')
sectionL.className = 'left-content'
fMain.appendChild(sectionL)

// request 6
let sectionR = document.createElement('section')
sectionR.className = 'right-content'
fMain.appendChild(sectionR)

// request 7
let imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
sectionL.appendChild(imagem)

// request 8
let lista = document.createElement('ul')
sectionR.appendChild(lista)
for (let index = 1; index <= 10; index += 1){
    let numeros = index
    let itensLista = document.createElement('li')
    itensLista.innerText = numeros
    lista.appendChild(itensLista)
}

// request 9
let h3 = document.createElement('h3')
fMain.appendChild(h3)
let h3A = document.createElement('h3')
fMain.appendChild(h3A)
let h3a = document.createElement('h3')
fMain.appendChild(h3a)

// request 9
h1.className = 'title'

// request 10
h3.className = 'description'
h3A.className = 'description'
h3a.className = 'description'

// request 11
fMain.removeChild(sectionL)

// request 12
sectionR.style.marginRight = 'auto'

// request 13
sectionC.style.backgroundColor = 'green'

// request 14
let ui = document.querySelector('.right-content').firstElementChild
ui.lastChild.remove()
ui.lastChild.remove()

