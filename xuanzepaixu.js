//选择排序
var arr = [4, 1, 6, 9, 3, 2, 8, 7];

function compare(a, b) { //比较之后得出是否需要交换。
    if (a > b) return true;
    else return false;
}

function exchange(arr, a, b) { //将数组中a, b位置里的值进行交换。
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

function sort(arr) { 
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;  //先默认最大的索引为0，然后我们通过一圈循环，就能找到最大的数的索引，然后将最大的数放到最后。同样的第二圈循环就不用看数组的最后一位了，又能找出一个最大的数，然后我们将它放到倒数第二位。如此循环，选择排序就完成了。
        for (var j = 0; j < arr.length -i; j++) {  //注意，这里就不需要再减1了，因为没有用到j+1了。老师的视频里犯了这个错误
            if (compare(arr[j], arr[maxIndex])) {
                maxIndex = j;
            }
            num ++;
        }
        exchange(arr, maxIndex, arr.length - 1 -i)
    }

    console.log(num);


}

sort(arr)
console.log(arr);
