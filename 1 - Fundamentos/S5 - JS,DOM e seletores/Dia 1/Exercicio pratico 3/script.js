let header = document.querySelector('#header-container')
header.style.backgroundColor = '#68CA79'

let urgente = document.querySelector('.emergency-tasks') 
urgente.style.backgroundColor = '#CA6868'

let corSep1 = document.querySelectorAll('.emergency-tasks h3')
for (let index = 0; index < corSep1.length; index += 1){
    corSep1[index].style.backgroundColor = '#FF00FF'
}

let nUrgente = document.querySelector('.no-emergency-tasks')
nUrgente.style.backgroundColor = '#958E2B'

let corSep2 = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < corSep2.length; index += 1){
    corSep2[index].style.backgroundColor = 'black'
}

let footer = document.querySelector('#footer-container')
footer.style.backgroundColor = '#0D3905'