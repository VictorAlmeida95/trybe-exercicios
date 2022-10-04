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
    }
    else if (valor === 'Azul claro'){
        let body = document.querySelector('body')
        body.style.backgroundColor = '#6fbbd3'
    }
    else if (valor === 'Lilás'){
        let body = document.querySelector('body')
        body.style.backgroundColor = '#b19cd9'
    }
    else {
        let body = document.querySelector('body')
        body.style.backgroundColor = 'white'
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
    }
    else if (valor === 'Azul claro'){
        let body = document.querySelector('body')
        body.style.color = '#6fbbd3'
    }
    else if (valor === 'Lilás'){
        let body = document.querySelector('body')
        body.style.color = '#b19cd9'
    }
    else {
        let body = document.querySelector('body')
        body.style.color = 'white'
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
    }
    else if (valor === 'Grande'){
        let body = document.querySelector('body')
        body.style.fontSize = 'large'
    }
    else {
        let body = document.querySelector('body')
        body.style.fontSize = 'small'
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
    }
    else if (valor === 'Grande'){
        let body = document.querySelector('body')
        body.style.lineHeight = '43px'
    }
    else {
        let body = document.querySelector('body')
        body.style.lineHeight = '23px'
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
    }
    else {
        let body = document.querySelector('body')
        body.style.fontFamily = 'georgia'
    }
}