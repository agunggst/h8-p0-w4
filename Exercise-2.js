function fpb(angka1, angka2) {
    var factor = {}
    var factor1 = []
    for(let i=0; i<angka1; i++){
        if(angka1%i==0){
            factor1.push(i)
        }
    }
    var factor2 = []
    for(let i=0; i<angka2; i++){
        if(angka2%i==0){
            factor2.push(i)
        }
    }
    factor['angka1'] = factor1
    factor['angka2'] = factor2
    
    for(let i=0; i<factor['angka1'].length; i++){
        for(let j=0; j<factor['angka2'].length; j++){
            if(factor['angka1'][i]==factor['angka2'][j]){
                var result = factor['angka1'][i]
            }
        }
    }
    return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1