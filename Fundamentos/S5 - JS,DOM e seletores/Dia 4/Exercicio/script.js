function criaSeletorBackground (){
    let selectPlace = document.getElementById('design-selection')
    let selectCreate = document.createElement('select')
    let p = document.createElement('p')
    p.innerText = 'Mude a cor do fundo'
    let optionCreate = document.createElement('option') 
    let option1Create = document.createElement('option')
    let option2Create = document.createElement('option')
    let option3Create = document.createElement('option')  
    optionCreate.innerText = 'Branco'
    option1Create.innerText = 'Preto'
    option2Create.innerText = 'Azul claro'
    option3Create.innerText = 'Lilás'

    selectPlace.appendChild(p)
    selectPlace.appendChild(selectCreate)
    selectCreate.appendChild(optionCreate)
    selectCreate.appendChild(option1Create)
    selectCreate.appendChild(option2Create)
    selectCreate.appendChild(option3Create)
}
criaSeletorBackground();

let escolha = document.querySelector('select')
escolha.onchange = function changeBackground (){
    let valor = escolha.value
    if (valor === 'Preto'){
        let body = document.querySelector('body')
        body.style.backgroundColor = 'black'
        localStorage.setItem('ColorBG', escolha.value)
    }
    else if (valor === 'Azul claro'){
        let body = document.querySelector('body')
        body.style.backgroundColor = '#6fbbd3'
        localStorage.setItem('ColorBG', escolha.value)
    }
    else if (valor === 'Lilás'){
        let body = document.querySelector('body')
        body.style.backgroundColor = '#b19cd9'
        localStorage.setItem('ColorBG', escolha.value)
    }
    else {
        let body = document.querySelector('body')
        body.style.backgroundColor = 'white'
        localStorage.setItem('ColorBG', 'Branco')
    }
}

// request 2

function criaSeletorLetras (){
    let selectPlace = document.getElementById('design-selection')
    let selectCreate = document.createElement('select')
    let p = document.createElement('p')
    p.innerText = 'Mude a cor das letras'
    let optionCreate = document.createElement('option') 
    let option1Create = document.createElement('option')
    let option2Create = document.createElement('option')
    let option3Create = document.createElement('option')  
    optionCreate.innerText = 'Branco'
    option1Create.innerText = 'Preto'
    option2Create.innerText = 'Azul claro'
    option3Create.innerText = 'Lilás'
    selectCreate.className = 'escolha2'

    selectPlace.appendChild(p)
    selectPlace.appendChild(selectCreate)
    selectCreate.appendChild(optionCreate)
    selectCreate.appendChild(option1Create)
    selectCreate.appendChild(option2Create)
    selectCreate.appendChild(option3Create)
}
criaSeletorLetras();

let escolha2 = document.querySelector('.escolha2')
escolha2.onchange = function changeColor (){
    let valor = escolha2.value
    if (valor === 'Preto'){
        let body = document.querySelector('body')
        body.style.color = 'black'
        localStorage.setItem('ColorF', escolha2.value)
    }
    else if (valor === 'Azul claro'){
        let body = document.querySelector('body')
        body.style.color = '#6fbbd3'
        localStorage.setItem('ColorF', escolha2.value)
    }
    else if (valor === 'Lilás'){
        let body = document.querySelector('body')
        body.style.color = '#b19cd9'
        localStorage.setItem('ColorF', escolha2.value)
    }
    else {
        let body = document.querySelector('body')
        body.style.color = 'white'
        localStorage.setItem('ColorF', escolha2.value)
    }
}

// request 3 

function criaSeletorTamanho (){
    let selectPlace = document.getElementById('design-selection')
    let selectCreate = document.createElement('select')
    let p = document.createElement('p')
    p.innerText = 'Mude o tamanho das letras'
    let optionCreate = document.createElement('option') 
    let option1Create = document.createElement('option')
    let option2Create = document.createElement('option')
    optionCreate.innerText = 'Pequena'
    option1Create.innerText = 'Média'
    option2Create.innerText = 'Grande'
    selectCreate.className = 'escolha3'

    selectPlace.appendChild(p)
    selectPlace.appendChild(selectCreate)
    selectCreate.appendChild(optionCreate)
    selectCreate.appendChild(option1Create)
    selectCreate.appendChild(option2Create)
}
criaSeletorTamanho();

let escolha3 = document.querySelector('.escolha3')
escolha3.onchange = function changeSize (){
    let valor = escolha3.value
    if (valor === 'Média'){
        let body = document.querySelector('body')
        body.style.fontSize = 'medium'
        localStorage.setItem('Size', escolha3.value)
    }
    else if (valor === 'Grande'){
        let body = document.querySelector('body')
        body.style.fontSize = 'large'
        localStorage.setItem('Size', escolha3.value)
    }
    else {
        let body = document.querySelector('body')
        body.style.fontSize = 'small'
        localStorage.setItem('Size', escolha3.value)
    }
}

// request 4 

function criaSeletorTamanhoEspaço (){
    let selectPlace = document.getElementById('design-selection')
    let selectCreate = document.createElement('select')
    let p = document.createElement('p')
    p.innerText = 'Mude o espaçamento das letras'
    let optionCreate = document.createElement('option') 
    let option1Create = document.createElement('option')
    let option2Create = document.createElement('option')
    optionCreate.innerText = 'Pequena'
    option1Create.innerText = 'Média'
    option2Create.innerText = 'Grande'
    selectCreate.className = 'escolha4'

    selectPlace.appendChild(p)
    selectPlace.appendChild(selectCreate)
    selectCreate.appendChild(optionCreate)
    selectCreate.appendChild(option1Create)
    selectCreate.appendChild(option2Create)
}
criaSeletorTamanhoEspaço();

let escolha4 = document.querySelector('.escolha4')
escolha4.onchange = function changeLineHeight (){
    let valor = escolha4.value
    if (valor === 'Média'){
        let body = document.querySelector('body')
        body.style.lineHeight = '33px'
        localStorage.setItem('lHeight', escolha4.value)
    }
    else if (valor === 'Grande'){
        let body = document.querySelector('body')
        body.style.lineHeight = '43px'
        localStorage.setItem('lHeight', escolha4.value)
    }
    else {
        let body = document.querySelector('body')
        body.style.lineHeight = '23px'
        localStorage.setItem('lHeight', escolha4.value)
    }
}

// request 5 

function criaSeletorFonte (){
    let selectPlace = document.getElementById('design-selection')
    let selectCreate = document.createElement('select')
    let p = document.createElement('p')
    p.innerText = 'Mude a fonte das letras'
    let optionCreate = document.createElement('option') 
    let option1Create = document.createElement('option')
    optionCreate.innerText = 'Arial'
    option1Create.innerText = 'Georgia'
    selectCreate.className = 'escolha5'

    selectPlace.appendChild(p)
    selectPlace.appendChild(selectCreate)
    selectCreate.appendChild(optionCreate)
    selectCreate.appendChild(option1Create)
}
criaSeletorFonte();

let escolha5 = document.querySelector('.escolha5')
escolha5.onchange = function changeFont (){
    let valor = escolha5.value
    if (valor === 'Arial'){
        let body = document.querySelector('body')
        body.style.fontFamily = 'arial'
        localStorage.setItem('font', escolha5.value)
    }
    else {
        let body = document.querySelector('body')
        body.style.fontFamily = 'georgia'
        localStorage.setItem('font', escolha5.value)
    }
}

// salvos BG

if(localStorage.getItem('ColorBG')=== 'Preto'){
    let body = document.querySelector('body')
    body.style.backgroundColor = 'black'
}

if(localStorage.getItem('ColorBG')=== 'Azul claro'){
    let body = document.querySelector('body')
    body.style.backgroundColor = '#6fbbd3'
}

if(localStorage.getItem('ColorBG')=== 'Lilás'){
    let body = document.querySelector('body')
    let preto = localStorage.setItem('ColorBG', escolha.value)
}

if(localStorage.getItem('ColorBG')=== 'Branco'){
    let body = document.querySelector('body')
    body.style.backgroundColor = 'white'
}

// Salvos Color

if (localStorage.getItem('ColorF') === 'Preto'){
    let body = document.querySelector('body')
    body.style.color = 'black'
}
else if (localStorage.getItem('ColorF') === 'Azul claro'){
    let body = document.querySelector('body')
    body.style.color = '#6fbbd3'
}
else if (localStorage.getItem('ColorF') === 'Lilás'){
    let body = document.querySelector('body')
    body.style.color = '#b19cd9'
}
else {
    let body = document.querySelector('body')
    body.style.color = 'white'
}

// salvos 3

if (localStorage.getItem('Size') === 'Média'){
    let body = document.querySelector('body')
    body.style.fontSize = 'medium'
}
else if (localStorage.getItem('Size') === 'Grande'){
    let body = document.querySelector('body')
    body.style.fontSize = 'large'
}
else {
    let body = document.querySelector('body')
    body.style.fontSize = 'small'
}

// salvos 4

if (localStorage.getItem('lHeight') === 'Média'){
    let body = document.querySelector('body')
    body.style.lineHeight = '33px'
}
else if (localStorage.getItem('lHeight') === 'Grande'){
    let body = document.querySelector('body')
    body.style.lineHeight = '43px'
}
else {
    let body = document.querySelector('body')
    body.style.lineHeight = '23px'
}

// salvos 5
if (localStorage.getItem('font') === 'Arial'){
    let body = document.querySelector('body')
    body.style.fontFamily = 'arial'
}
else {
    let body = document.querySelector('body')
    body.style.fontFamily = 'georgia'
}