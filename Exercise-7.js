function urutkanAbjad(str) {
    var char = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    var char_arr = []
    var temp = ''
    for(let i=0; i<char.length; i++){
        if(char[i]==' '){
            char_arr.push(temp)
            temp = ''
        }else{
            temp += char[i]
        }
    }
    char_arr.push(temp)
    var str_arr = []
    for(let i=0; i<str.length; i++){
        str_arr.push(str[i])
    }
    var index = []
    for(let i=0; i<str.length; i++){
        for(let j=0; j<char_arr.length; j++){
            if(str[i]==char_arr[j]){
                index.push(j)
                break
            }
        }
    }
    for(let i=0; i<index.length; i++){
        for(let j=0; j<index.length-1; j++){
            if(index[j]>index[j+1]){
                var temp = index[j]
                index[j] = index[j+1]
                index[j+1] = temp

                var temp1 = str_arr[j]
                str_arr[j] = str_arr[j+1]
                str_arr[j+1] = temp1

            }
        }
    }
    var result = ''
    for(let i=0; i<str_arr.length; i++){
        result += str_arr[i]
    }
    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'