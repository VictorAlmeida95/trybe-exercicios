function pnz (a){
    if (a > 1){
        return 'positive'
    }
    else if (a < 0){
        return 'negative'
    }
    else{
        return 'zero'
    }
}

console.log(pnz(2))