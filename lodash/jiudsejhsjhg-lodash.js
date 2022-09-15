var jiudsejhsjhg = function () {

function chunk(array, size = 1) {
    var temp = new Array(Math.ceil(array.length / size)) //判断是不是数组，然后取整除于size
    var a = 0  //用于计数是否达到size
    for (var i = 0; i < array.length; i++) {  //遍历数组的长度
    temp[a] ? temp[a] : temp[a] = []   //判断是是否有数组，没有就创建新的数组
    temp[a].push(array[i])   //  将值push到temp中
    if (temp[a].length == size) {  //对比新数组的长度是否等等size
        a++  //a达到size的长度会重新循环将数组执行完
    }
    }
    return temp  //返回创建的新数组
}


function compact(array) {
    var indx = 0  //新数组的下标
    var ary = []  //创建一个空数组存储
  //需求一数组为空返回【】
  if (array == null) {
      return ary
    }
    for (var val of array) {  //遍历fo具有数字索引的属性  in会遍历所有的索引
        if (val) {
            ary[indx++] = val
        }
    }

 return ary
}

function concat(array , ...val) {
    var result = array
    for (var i = 0; i < val.length;i++) {
        if (!Array.isArray(val[i])) {
            result.push(val[i])
        } else {
            for (var j = 0; j < val[i].length; j++) {
                result.push(val[i][j])
            }
        }
    }
    return result
}

function drop(array, n = 1) {
    for (var i = 0; i < n && array.length !== 0; i++) {
        array.shift()
    }
    return array
}

function drop(array, n = 1) {
      a = []   //
     for (var i = n; i < array.length; i++) {
      a.push(array[i])  //n的默认值是1 ，那么push时从下标1开始
     }
     return a
}




return {
    chunk,
    compact,
    concat,
    drop,
    
}

}()
