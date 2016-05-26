function show(arr,num) {
    var size = 1;
    var resultNum = 0;
    var resultArr = [];
    function change(arr,size,str) {
        arr.forEach(function(value,index,arr) {
            var arr1 = arr.concat();                    // arr.concat()
            var strClone = str;
            strClone += arr1.splice(index,1);
            if(size == num) {
                for(var i = 0; i < arr1.length; i++) {
                    resultArr.push(strClone + arr1[i]);
                }
                resultNum += arr1.length;
            } else {
                change(arr1,size + 1,strClone);
            }
        });

    }
    change(arr,size + 1,'');
    resultArr.push(resultNum);
    return resultArr;
}


function unique(arr) {
    arr.forEach(function(value,index,arr) {
        arr[index] = value.split('').sort().join();
    });
    var obj = {};
    var result = [];
    arr.forEach(function(value) {
        if(!obj[value]) {
            obj[value] = 1;
            result.push(value);
        }
    });
    return result;
}

var m = function f(num) {
    if(num <= 1) {
        return 1;
    }
    return num * f(num - 1);
}