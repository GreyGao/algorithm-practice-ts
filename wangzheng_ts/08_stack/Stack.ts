import { SingleLinkedList, SingleNode } from '../06_linkedlist/SingleLinkedList'
/** 
 * 1) 数组实现栈
 * 2) 链表实现栈
 */

/** 数组栈 */
export class ArrayStack<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  public get length() {
    return this.list.length;
  }

  public push(item: T) {
    this.list.push(item);
  }

  public pop(): T | undefined {
    if (this.length === 0) return undefined;
    return this.list.pop();
  }

  public toString(type?: string) {
    console.log(`------toString ${type ? type : ''}-------`);
    console.log(`[${this.list.join(', ')}]`)
  }
}

/** 链表栈 */
export class LinkedStack<T> {
  public length: number;

  private top: SingleNode<T> | null;

  constructor() {
    this.top = null;
    this.length = 0;
  }

  public push(value: T) {
    const newNode = new SingleNode(value, this.top);
    this.top = newNode;
    this.length += 1;
  }

  public pop(): T | undefined {
    if (this.top === null) return;
    const n = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return n.value;
  }

  public toString(type?: string) {
    let n = this.top;
    let string = ''
    while (n !== null) {
      string = `${n.value} <- ` + string;
      n = n.next
    }
    console.log(`------toString ${type ? type : ''}-------`);
    console.log(string);
  }
}

/** 测试 */
const stack = new LinkedStack<string>();
stack.push('http://baidu.com');
stack.push('http://163.com');
stack.push('http://qq.com');
stack.push('http://126.com');
stack.toString();
stack.pop();
stack.pop();
console.log('length:', stack.length);
stack.toString();