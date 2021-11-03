import { SingleNode } from '../06_linkedlist/SingleLinkedList'

/** 
 * 1) 数组实现有容量队列
 * 2) 链表实现有容量队列
 */

class ArrayQueue<T> {
  private list: T[];

  private head: number = 0;

  private tail: number = 0;

  public size: number = 0;

  constructor(capacity: number) {
    this.list = Array(capacity);
    this.size = capacity;
  }

  public enqueue(item: T): boolean {
    if (this.tail === this.size) {
      // 满了
      if (this.head === 0) {
        console.log('full', item);
        return false;
      }
      // 数据搬移
      for (let i = this.head; i < this.size; i++) {
        console.log('move', this.list[i]);
        this.list[i - this.head] = this.list[i];
        this.list[i] = undefined;
      }
      this.tail -= this.head;
      this.head = 0;
    }
    this.list[this.tail] = item;
    this.tail++;
    // console.log(this.list);
    return true;
  }

  public dequeue(): T | null {
    if (this.head === this.tail) return null;
    const v = this.list[this.head];
    this.list[this.head] = undefined;
    this.head++;
    return v;
  }

  public toString(type?: string) {
    console.log(`------toString ${type ? type : ''}-------`);
    console.log(`[${this.list.join(', ')}]`)
  }
}

class LinkedQueue<T> {
  private head: SingleNode<T> | null;
  private tail: SingleNode<T> | null;
  private size: number;
  private length: number;

  constructor(capacity: number) {
    this.size = capacity;
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  public enqueue(item: T) {
    if (this.size === this.length) return false;
    const n = new SingleNode(item);
    if (this.head === null || this.tail === null) {
      this.head = n;
      this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  public dequeue(): T | null {
    if (this.length === 0 || this.head === null) return null;
    const n = this.head;
    this.head = this.head.next;
    this.length--;
    return n.value;
  }

  public toString(type?: string) {
    let n = this.head;
    let string = ''
    while (n !== null) {
      string += `${n.value} -> `;
      n = n.next
    }
    // console.log(`------toString ${type ? type : ''}-------`);
    console.log(`<${string}null>`);
  }
}

/** 测试 */
const queue = new LinkedQueue<number>(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.toString();
queue.dequeue();
queue.dequeue();
// queue.dequeue();
// queue.dequeue();
queue.toString();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.toString();