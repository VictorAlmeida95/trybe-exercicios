function pessoas(nomes){
    let resultado = []
    for (let index in nomes){
        if (nomes[index].length > resultado.length) {
            resultado = nomes[index]
        }
    }
    return resultado
}

console.log(pessoas(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));