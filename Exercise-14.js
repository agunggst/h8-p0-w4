function abs(num){
    if(num<0){return num*-1}
    return num
}

function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var resultobj_arr = []
    for(let i=0; i<arrPenumpang.length; i++){
        var obj_temp = {}
        obj_temp['penumpang'] = arrPenumpang[i][0]
        obj_temp['naikDari'] = arrPenumpang[i][1]
        obj_temp['tujuan'] = arrPenumpang[i][2]
        resultobj_arr.push(obj_temp)
    }
    for(let i=0; i<resultobj_arr.length; i++){
        for(let j=0; j<rute.length; j++){
            if(resultobj_arr[i].naikDari==rute[j]){
                var naik_idx = j
            }
            if(resultobj_arr[i].tujuan==rute[j]){
                var tujuan_idx = j
            }
        }
        var bayar = abs(tujuan_idx-naik_idx)*2000
        resultobj_arr[i]['bayar'] = bayar
    }
    return resultobj_arr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]