function abs(num){
    if(num<0){
        return num*-1
    }
    return num
}

function checkAB(num) {
    var num_arr = []
    for(let i=0; i<num.length; i++){
        num_arr.push(num[i])
    }
    var index = {a:[],b:[]}
    for(let i=0; i<num_arr.length; i++){
        if(num_arr[i]=='a'){
            index['a'].push(i)
        }else if(num_arr[i]=='b'){
            index['b'].push(i)
        }
    }
    for(let i=0; i<index.a.length; i++){
        for(var j=0; j<index.b.length; j++){
            if(abs(index.a[i]-index.b[j])==4){
                return true
            }
        }
    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false