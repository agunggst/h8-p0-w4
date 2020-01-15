function split(str, divider){
    var temp = ''
    var result = []
    for(let i=0; i<str.length; i++){
        if(str[i]==divider){
            result.push(temp)
            temp = ''
        }else{
            temp += str[i]
        }
    }
    result.push(temp)
    return result
}

function ubahHuruf(kata) {
    var char='a b c d e f g h i j k l m n o p q r s t u v w x y z a'
    var char_arr = split(char, ' ')
    var result = ''
    for(let i=0; i<kata.length; i++){
        result += char_arr[char_arr.indexOf(kata[i])+1]
    }
    return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu