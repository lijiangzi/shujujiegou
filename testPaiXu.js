//冒泡排序
var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function compare(a, b) { //比较之后得出是否需要交换。
    if (b < a) return true;
    else return false;
}

function exchange(arr, a, b) { //将数组中a, b位置里的值进行交换。
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

function sort(arr) { //这个sort可以是冒泡排序也可以是选择排序也可以是其他排序。我们所谓的排序算法，不同的算法的区别就在这里，compare和exchange是一样的
    var num  = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) { //因为有j+1，所以是小于arr.length - 1。然后我们知道，第一次比较最大的数就在倒数第一位了，因此第二次比较的就不要再比较最后一位了，同样的第三次比较就不用比较后两位了，所以要减去一个i
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
            num ++;

        }
    }
    console.log(num);


}

sort(arr)
console.log(arr);
