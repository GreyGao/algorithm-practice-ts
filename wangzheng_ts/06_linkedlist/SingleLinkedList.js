"use strict";
/**
 * 1)单链表的插入、删除、查找操作；
 * 2)链表支持任意类型数据
 */
exports.__esModule = true;
exports.SingleNode = exports.SingleLinkedList = void 0;
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList(node) {
        this.head = new SingleNode(null, node);
    }
    SingleLinkedList.prototype.insertByIndex = function (value, index) {
        var i = 0;
        var n = this.head;
        while (i < index && n.next !== null) {
            i++;
            n = n.next;
        }
        var node = new SingleNode(value, n.next);
        n.next = node;
    };
    SingleLinkedList.prototype.insertToHead = function (value) {
        var node = new SingleNode(value, this.head.next);
        this.head.next = node;
    };
    SingleLinkedList.prototype.insertToTail = function (value) {
        var node = new SingleNode(value, null);
        var n = this.head;
        while (n.next !== null) {
            n = n.next;
        }
        n.next = node;
    };
    SingleLinkedList.prototype.findByValue = function (value) {
        if (value === null || value === undefined)
            return null;
        var n = this.head.next;
        while (n !== null) {
            if (n.value === value)
                return n;
            n = n.next;
        }
        ;
        return null;
    };
    SingleLinkedList.prototype.findByIndex = function (index) {
        if (index < 0)
            return null;
        var i = 0;
        var n = this.head;
        while (i < index) {
            if (n.next === null)
                return null;
            i++;
            n = n.next;
        }
        return n.next;
    };
    SingleLinkedList.prototype.remove = function (value) {
        if (value === null || value === undefined)
            return false;
        var n = this.head;
        while (n.next !== null) {
            if (n.next.value === value) {
                n.next = n.next.next;
                return true;
            }
            n = n.next;
        }
        return false;
    };
    SingleLinkedList.prototype.removeByIndex = function (index) {
        if (index < 0)
            return false;
        var i = 0;
        var n = this.head;
        while (n.next !== null && i < index) {
            i++;
            n = n.next;
        }
        if (n.next === null)
            return false;
        n.next = n.next.next;
        return true;
    };
    SingleLinkedList.prototype.toString = function (type) {
        var n = this.head.next;
        var string = 'head -> ';
        while (n !== null) {
            string += n.value + " -> ";
            n = n.next;
        }
        string += 'null';
        console.log("------toString " + (type ? type : '') + "-------");
        console.log(string);
    };
    SingleLinkedList.prototype.toStringByNode = function (node) {
        var n = node;
        var string = '';
        while (n !== null) {
            string += n.value + " -> ";
            n = n.next;
        }
        string += 'null';
        console.log('------log-------');
        console.log(string);
    };
    return SingleLinkedList;
}());
exports.SingleLinkedList = SingleLinkedList;
/**
 * 链表节点
 */
var SingleNode = /** @class */ (function () {
    function SingleNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return SingleNode;
}());
exports.SingleNode = SingleNode;
// const singleList = new SingleLinkedList<string>();
// singleList.insertToTail('first');
// singleList.insertToTail('third');
// singleList.insertByIndex('second', 1);
// singleList.insertToTail('trash');
// singleList.insertToTail('end');
// singleList.insertToHead('🔥');
// console.log(singleList.findByValue('trash'));
// singleList.toStringByNode(singleList.findByValue(''));
// singleList.toString();
// console.log(singleList.findByIndex(6));
// singleList.removeByIndex(4);
// singleList.remove('first');
// singleList.toString();
