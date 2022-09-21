//Descobre o lucro sobre 1000 vendas de produtos.
//Altere o custo e a venda. :)

const custo = 0
const venda = 0

let imposto = (custo*20) / 100
let custoTolal = custo + imposto
let lucro = venda - custoTolal;
let lucroP1k = '?'

if (custo < 0 || venda < 0){
    lucroP1k = 'Erro'   
}
else{lucroP1k = lucro * 1000}

console.log (lucroP1k)
