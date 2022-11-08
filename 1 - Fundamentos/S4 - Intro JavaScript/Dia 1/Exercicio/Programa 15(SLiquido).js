//Descobre o salario liquido.
//Altere o custo e a venda. :)

const bruto = 3000.20;

let inss = 0;
let ir = 0;

if(bruto <= 1556,94){
    inss = bruto * 0.08
}
else if(bruto <= 2594,92){
    inss = bruto * 0.06
}
else if(bruto <= 5189,82){
    inss = bruto * 0.11
}
else {
    inss = 570,88 
};

const salarioBase = (bruto - inss);

// IR

if(salarioBase <= 1903,98){
    ir = 0
}
else if(salarioBase <= 2826,65){
    ir = (salarioBase * 0.075) - 142,80
}
else if(salarioBase <= 3751,05){
    ir = (salarioBase * 0.15) - 354,80
}
else if(salarioBase <= 4664,68){
    ir = (salarioBase * 0.225) - 636,13
}
else {
    ir = (salarioBase * 0.275) - 869,36
}

let salario = salarioBase - ir

console.log(salario)