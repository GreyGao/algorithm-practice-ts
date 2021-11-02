import { SingleLinkedList, SingleNode } from '../06_linkedlist/SingleLinkedList'

/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第 n 个结点
 * 5) 求链表的中间结点
 */

class LinkedList<T> extends SingleLinkedList<T> {
  /**
   * 反转链表
   * 1. 暂存当前节点的next
   * 2. 将已反转的部分保存至当前节点的next
   * 3. 连同当前节点一起保存在已反转链表
   * 4. 将当前循环的节点指向temp（最初的下一个节点继续遍历）
   */
  public reverse() {
    let curr = this.head.next;
    let prev = null;
    while (curr !== null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head.next = prev;
  }

  /** 
   * 环验证
   * 快慢指针
   */
  public hasCircle(): boolean {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) return true;
    }
    return false;
  }

  /**
   * 删除倒数第n个节点
   * 先反转链表
   * 再正序删除第n个节点
   * 再反转
   */
  public removeByReverseIndex(index: number): boolean {
    if (this.hasCircle() || index < 0) return false;
    this.reverse();
    let i = 0;
    let curr = this.head;
    while (i < index && curr.next !== null) {
      curr = curr.next;
      i++;
    }
    if (curr.next === null) {
      this.reverse();
      return false;
    };
    curr.next = curr.next.next;
    this.reverse();
    return true;
  }

  public getMidPoint(): SingleNode<T> | null {
    let fast = this.head;
    let slow = this.head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

function mergeLinkedList(listA: SingleNode<any>, listB: SingleNode<any>): SingleNode<any> {
  if (!listA) return listB;
  if (!listB) return listA;
  let returnHead;
  let a = listA;
  let b = listB;
  if (a.value <= b.value) {
    returnHead = a;
    a = a.next;
  } else {
    returnHead = b;
    b = b.next;
  }

  let curr = returnHead;

  while (a !== null && b !== null) {
    if (a.value <= b.value) {
      curr.next = a;
      a = a.next;
    } else {
      curr.next = b;
      b = b.next;
    }
    curr = curr.next;
  }
  if (a === null) {
    curr.next = b;
  } else {
    curr.next = a;
  }

  return returnHead;
}

const singleList = new LinkedList<string>();
singleList.insertToTail('first');
singleList.insertToTail('third');
singleList.insertByIndex('second', 1);
singleList.insertToTail('end');
singleList.insertToHead('🔥');
singleList.toString();

singleList.reverse();
singleList.toString('reverse:');

// const endNode = singleList.findByValue('end');
// const firstNode = singleList.findByIndex(0);
// endNode.next = firstNode;
console.log('hasCircle:', singleList.hasCircle());

const midPoint = singleList.getMidPoint();
console.log('midPoint:', midPoint.value);

// singleList.removeByReverseIndex(4);
// singleList.toString();


/** 合并链表 */
const merge1 = new LinkedList<number>();
merge1.insertToTail(1);
merge1.insertToTail(2);
merge1.insertToTail(3);
merge1.insertToTail(4);
merge1.insertToTail(5);
merge1.toString();

const merge2 = new LinkedList<number>();
merge2.insertToTail(2);
merge2.insertToTail(4);
merge2.insertToTail(5);
merge2.insertToTail(6);
merge2.insertToTail(7);
merge2.toString();

const node = mergeLinkedList(merge1.findByIndex(0), merge2.findByIndex(0));
const merge3 = new LinkedList(node);
merge3.toString('merge list:');