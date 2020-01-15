function find_unique(arr){
    var result = []
    for(let i=0; i<arr.length; i++){
        var state = true
        for(let j=0; j<result.length; j++){
            if(arr[i]==result[j]){
                state = false
                break
            }
        }
        if(state==true){
            result.push(arr[i])
        }
    }
    return result
}

function cariModus(arr) {
    var unique_arr = find_unique(arr)
    if(unique_arr.length==1){return -1}
    var count = []
    for(let i=0; i<unique_arr.length; i++){
        var sum = 0
        for(let j=0; j<arr.length; j++){
            if(unique_arr[i]==arr[j]){
                sum += 1
            }
        }
        count.push(sum)
    }
    for(let i=0; i<count.length; i++){
        for(let j=0; j<count.length-1; j++){
            if(count[j]<count[j+1]){
                var temp = count[j]
                count[j] = count[j+1]
                count[j+1] = temp

                var temp1 = unique_arr[j]
                unique_arr[j] = unique_arr[j+1]
                unique_arr[j+1] = temp1
            }
        }
    }
    if(count[0]==1){return -1}
    return unique_arr[0]
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1