function angkaPrima(angka) {
    if(angka<2){return false}
    var state = true
    for(let i=1; i<angka; i++){
        if(i!==1 && i!==angka){
            if(angka%i==0){
                state = false
            }
        }
    }
    return state
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false