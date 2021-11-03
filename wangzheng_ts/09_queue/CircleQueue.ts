/** 
 * 1) 基于数组实现一个循环队列
 */

class CircleArrayQueue<T> {
  private list: T[];

  private head: number = 0;

  private tail: number = 0;

  public size: number = 0;

  constructor(capacity: number) {
    this.list = Array(capacity);
    this.size = capacity;
  }

  public enqueue(item: T): boolean {
    if ((this.tail + 1) % this.size === this.head) {
      console.log('full');
      return false;
    }
    this.list[this.tail] = item;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }

  public dequeue(): T | null {
    const node = this.list[this.head];
    if (node === undefined) return null;
    this.list[this.head] = undefined;
    this.head = (this.head + 1) % this.size;
    return node;
  }

  public toString(type?: string) {
    // console.log(`------toString ${type ? type : ''}-------`);
    console.log('----head:----', this.head, '----tail:----', this.tail);
    console.log(`[${this.list.join(', ')}]`)
  }
}

/** 测试 */
const queue = new CircleArrayQueue<number>(4);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.toString();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.toString();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.toString();