//创建链表
function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

//这个时候a,b,c,d还不是一个链表，得让他们的next指向下一个：
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

//然后我们获取每一个值：
console.log(node1.value);  //链表的第一个元素的值
console.log(node2.next.value); //链表的第二个元素的值
console.log(node3.next.next.value); //链表的第三个元素的值

// ...但是这样写会把我们逼疯。这个时候我们需要一个算法来解决操作链表的问题。
//循环遍历
function bianLink(root) { //传入一个根节点
    var temp = root;  //使用一个temp变量来寄存root

    //因为我们不知道root的长度，所以不能用for循环。for循环是已知数组的长度的才能用。那么对于不知道长度我们用while
    while (true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}

//递归遍历
function bianLink(root) {
    if (root == null) return;
    console.log(root.value);
    bianLink(root.next)
}

//链表逆置
function nizhi(root) {
    //注意，if是递归的出口
    if (root.next.next == null) { //代表当前节点是倒数第二个节点，那么让下一个即倒数第一个指向当前即倒数第二个节点
        root.next.next = root; //让最后一个节点指向自己（倒数第二个）

        return root.next //最后我们要返回的是最后一个节点，这样才返回的是一个与原链表完全逆置的链表
    } else {
        //进行递归
        var result = nizhi(root.next);

        root.next.next = root; //让自己的下一个的节点的next指向自己，
        root.next = null; //并且让自己的next等于null，主要是让第一个节点的next设置为null。否则第一个的next指向第二个，第二个 的next指向第一个，那么就陷入了死循环。
        return result;
    }

}

var result = nizhi(node1);

bianLink(result)