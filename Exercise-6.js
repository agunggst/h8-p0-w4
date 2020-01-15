function digitPerkalianMinimum(angka) {
    var factor = []
    for(let i=0; i<=angka; i++){
        if(angka%i==0){
            factor.push(i)
        }
    }
    var result = ''
    for(let i=0; i<factor.length/2; i++){
        result = String(factor[i])+String(factor[factor.length-(1+i)])
    }
    return result.length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2