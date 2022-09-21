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

function difference(array, ...values) {
    let result = []
    values = values.flat()
    for (let i = 0; i < array.length; i++) {
        if (!(values.includes(array[i]))) {
            result.push(array[i])
        }
    }
    return result
}


function fill(array, val) {

        for (var i = 0; i < array.length; i++) {
            array[i] = val  //遍历数组后将array的i替换成val
        }
        return array
}

function flatten(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            result.push(array[i])
        } else {
            for (var j = 0; j < array[i].length; j++) {
                result.push(array[i][j])
            }
        }
    }
    return result
}


function flattenDeep(array) {
     var result = []
     for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenDeep(array[i])
        } else {
            result.push(array[i])
        }
   }
     flattenDeep(array)
       return result
}


function flattenDeepth(array, val = 1) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && val > 0) {
            result = result.concat(flattenDeepth(array[i], val - 1))
        } else {
            result.push(array[i])
        }
    }
    return result
}


function every(ary,predicate) {
    for (var i = 0; i < ary.length; i++) {
        if (!find(predicate(ary[i], i, ary))) {
            return false
        }
    }
    return  true //遍历完所有都没有找到false那就是ture
}


function some(ary,predicate) {
    for (var i = 0; i < ary.length; i++) {
        if (find(predicate(ary[i], i, ary))) {
            return true
        }
    }
    return false
}




// var ary = [11,17,2,7,19,3,14,5]   求数组的最大值
function reduce(ary , reduce ,initialValue) {
    var max = initialValue
    for (var i = 0 ; i < ary.length ;i++) {
        if (ary[i] > max) {
            max = reduce(max,ary[i] ,i, ary)
        }
    }
    return max
}


function size(collection) {
    if (Array.isArray(collection)) {  //是数组就返回其长度
        return collection.length
    } else if (typeof collection == 'string') {  //等于字符串那就返回字符串得长度
        return collection.length
    } else if (typeof collection == 'object') {  //返回属性得个数
        var count = 0
        for (var key in collection) {
            count++
        }
        return count
    }
}


function find(ary , predicate) {
    for (var i = 0; i < ary.length; i++) {
        if (predicate(ary[i], i, ary)) {
           return ary[i]  //找到相同的元素，并返回该元素
       }
    }
}


function findIndex(ary ,predicate){
    for (var i = 0; i < ary.length; i++) {
        if (predicate(ary[i], i, ary)) {
            return i
        }
    }
}




function bind(f , fixedArgs) {
    return function (...args) {
        return f(fixedArgs , ...args)
    }
}



function max(array) {
    if (array.length == 0) {
        return undefined
    }
    var max = 0
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
  return  max

}



function min(array) {
    if (array.length == 0) {
        return undefined
    }
    var min = Infinity
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}



return {
    chunk,
    compact,
    concat,
    drop,
    difference,
    fill,
    flatten,
    flattenDeep,
    flattenDeepth,
    find,
    every,
    some,
    reduce,
    size,
    findIndex,
    bind,
    max,
    min,



}

}()
