const check = (value1, value2) => {
    if (!value1 || !value2){
        throw new Error ('Os campos devem ser preenchidos!')
    }
    if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Informe dois números para realizar a soma'); 
    }
}

function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        check(value1,value2)
        result = Number(value1) + Number(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
    catch (error){
        return document.getElementById('result').innerHTML = `Erro: ${error.message}`;
    }
}

window.onload = () => {
const button = document.getElementById('button');
button.addEventListener('click', sum);
}