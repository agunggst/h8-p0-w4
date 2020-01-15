function changeMe(arr) {
    if(arr.length==0){
        return ""
    }
    var key = ['firstName', 'lastName', 'gender', 'age']
    var arr_obj = []
    for(let i=0; i<arr.length; i++){
        var obj = {}
        for(let j=0; j<key.length; j++){
            if(j==3 && (arr[i][j]==undefined || arr[i][j]>2019)){
                obj[key[j]] = "Invalid Birth Year"
            }else{
                if(j==3){
                    obj[key[j]]=2019-arr[i][j]
                }else{
                    obj[key[j]]=arr[i][j]
                }
            }
        }
        arr_obj.push(obj)
    }
    for(let i=0; i<arr_obj.length; i++){
        console.log(`${i+1}. ${arr_obj[i].firstName} ${arr_obj[i].lastName}:`)
        console.log(arr_obj[i])
    }
    return 0
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""