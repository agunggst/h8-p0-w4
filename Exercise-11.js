function shoppingTime(memberId, money) {
    if(!memberId){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }
    var sale = {}
    sale['Sepatu Stacattu'] = 1500000
    sale['Baju Zoro'] = 500000
    sale['Baju H&N'] = 250000
    sale['Sweater Uniklooh'] = 175000
    sale['Casing Handphone'] = 50000
    
    var obj = {}
    obj['memberId'] = memberId
    obj['money'] = money
    
    var key = Object.keys(sale)
    
    var i=0
    var listPurchased = []
    while(i<key.length && money>15000){
        if(money>=sale[key[i]]){
            money -= sale[key[i]]
            listPurchased.push(key[i])
        }
        i++
    }
    obj['listPurchased'] = listPurchased
    obj['changeMoney'] = money
    
    return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja