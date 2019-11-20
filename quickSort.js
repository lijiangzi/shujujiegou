var arr = [5,2,8,6,4,10,3,7,9,1];

//简单快速排序
// function quickSort (arr) {
//     if (arr == null || arr.length == 0) return [];
//     //第一步选班长，
//     var leader = arr[0];

//     //第二步，小的站班长左边，大的站右边。
//     var left = [];
//     var right = [];
//     for (var i = 1; i < arr.length; i ++) {
//         if (arr[i] < leader) left.push(arr[i]);
//         else right.push(arr[i])
//     }
//     left = quickSort(left);
//     right = quickSort(right);
//     left.push(leader)
//     return left.concat(right)

// }
// console.log(quickSort(arr));

function quickSort2(arr, begin, end) { //指定排序的范围。一开始自然是整个数组。注意是[begin, end)左闭右开区间。即取不到arr[end]。补充：不管是数学也好物理也好计算机科学也好我们默认传左闭右开区间。
        if (begin >= end - 1) return; //比如 [2, 3)其实数组只有一位了，也就没什么好排序的了。
        var left = begin; //左指针
        var right = end;  //右指针
    
        //我们使用do while循环。do while的特点是do语句至少执行一次，如果while条件成立，则do语句再执行
        do {
            //左指针往后移
            do left++; while (left < right && arr[left] < arr[begin]); //自然的左指针不能和右指针相遇。并且数组左指针所指的数肯定是要比右指针指的数小
    
            //与此同时，右指针也得往前移
            do right--; while (right > left && arr[right] > arr[begin]);
    
            //并且要进行交换
            if (left < right) swap(arr, left, right)
    
        } while (left < right);
    
        //当left < right不成立的时候，第一次排序也就完成了，我们需要把leader和左指针数字互换一下。
        var swapPoint = left == right ? right - 1 : right;
        swap(arr, begin, swapPoint)  //第一次排序完成，swapPoint的值的左边全部是比它小的，它的右边全部是比他大的。
    
        //再对左右两边进行快排。
        quickSort2(arr, begin, swapPoint);
        quickSort2(arr, swapPoint+1, end)
    }
    
    function swap(arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    function quickSort(arr) {
        quickSort2(arr, 0, arr.length); //默认自然的是研究整个数组范围。注意是arr.length，不是length-1，左闭右开区间。
    }
    
    quickSort(arr);
    console.log(arr);