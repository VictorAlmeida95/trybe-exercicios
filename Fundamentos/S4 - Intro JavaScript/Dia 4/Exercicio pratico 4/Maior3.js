function maior (a,b,c) {
    if (a > b && a > c){
        return a + ' é maior que ' + b + ' e ' + c
    }
    else if (b > a && b > c){
        return b + ' é maior que ' + a + ' e ' + c
    }
    else{
        return c + ' é maior que ' + a + ' e ' + b
    }
}

console.log(maior(3,7,14));