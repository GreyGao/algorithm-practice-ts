"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var SingleLinkedList_1 = require("../06_linkedlist/SingleLinkedList");
/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第 n 个结点
 * 5) 求链表的中间结点
 */
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 反转链表
     * 1. 暂存当前节点的next
     * 2. 将已反转的部分保存至当前节点的next
     * 3. 连同当前节点一起保存在已反转链表
     * 4. 将当前循环的节点指向temp（最初的下一个节点继续遍历）
     */
    LinkedList.prototype.reverse = function () {
        var curr = this.head.next;
        var prev = null;
        while (curr !== null) {
            var temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head.next = prev;
    };
    /**
     * 环验证
     * 快慢指针
     */
    LinkedList.prototype.hasCircle = function () {
        var fast = this.head;
        var slow = this.head;
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow)
                return true;
        }
        return false;
    };
    /**
     * 删除倒数第n个节点
     * 先反转链表
     * 再正序删除第n个节点
     * 再反转
     */
    LinkedList.prototype.removeByReverseIndex = function (index) {
        if (this.hasCircle() || index < 0)
            return false;
        this.reverse();
        var i = 0;
        var curr = this.head;
        while (i < index && curr.next !== null) {
            curr = curr.next;
            i++;
        }
        if (curr.next === null) {
            this.reverse();
            return false;
        }
        ;
        curr.next = curr.next.next;
        this.reverse();
        return true;
    };
    LinkedList.prototype.getMidPoint = function () {
        var fast = this.head;
        var slow = this.head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };
    return LinkedList;
}(SingleLinkedList_1.SingleLinkedList));
function mergeLinkedList(listA, listB) {
    if (!listA)
        return listB;
    if (!listB)
        return listA;
    var returnHead;
    var a = listA;
    var b = listB;
    if (a.value <= b.value) {
        returnHead = a;
        a = a.next;
    }
    else {
        returnHead = b;
        b = b.next;
    }
    var curr = returnHead;
    while (a !== null && b !== null) {
        if (a.value <= b.value) {
            curr.next = a;
            a = a.next;
        }
        else {
            curr.next = b;
            b = b.next;
        }
        curr = curr.next;
    }
    if (a === null) {
        curr.next = b;
    }
    else {
        curr.next = a;
    }
    return returnHead;
}
var singleList = new LinkedList();
singleList.insertToTail('first');
singleList.insertToTail('third');
singleList.insertByIndex('second', 1);
singleList.insertToTail('end');
singleList.insertToHead('🔥');
singleList.toString();
singleList.reverse();
singleList.toString();
// const endNode = singleList.findByValue('end');
// const firstNode = singleList.findByIndex(0);
// endNode.next = firstNode;
// console.log('hasCircle:', singleList.hasCircle());
// const midPoint = singleList.getMidPoint();
// console.log('midPoint:', midPoint);
// singleList.removeByReverseIndex(4);
// singleList.toString();
/** 合并链表 */
var merge1 = new LinkedList();
merge1.insertToTail(1);
merge1.insertToTail(2);
merge1.insertToTail(3);
merge1.insertToTail(4);
merge1.insertToTail(5);
merge1.toString();
var merge2 = new LinkedList();
merge2.insertToTail(2);
merge2.insertToTail(4);
merge2.insertToTail(5);
merge2.insertToTail(6);
merge2.insertToTail(7);
merge2.toString();
var node = mergeLinkedList(merge1.findByIndex(0), merge2.findByIndex(0));
var merge3 = new LinkedList(node);
merge3.toString();
