/**
 * 1)单链表的插入、删除、查找操作；
 * 2)链表支持任意类型数据
 */

export class SingleLinkedList<T> {
  /** 哨兵头节点 */
 readonly head: SingleNode<T>;
  constructor(node?: SingleNode<T>) {
    this.head = new SingleNode<T>(null, node);
  }

  public insertByIndex(value: T, index: number) {
    let i = 0;
    let n = this.head;
    while (i < index && n.next !== null) {
      i++;
      n = n.next;
    }
    const node = new SingleNode(value, n.next);
    n.next = node;
  }

  public insertToHead(value: T) {
    const node = new SingleNode(value, this.head.next);
    this.head.next = node;
  }

  public insertToTail(value: T) {
    const node = new SingleNode(value, null);
    let n = this.head;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = node;
  }

  public findByValue(value: T): SingleNode<T> | null {
    if (value === null || value === undefined) return null;
    let n = this.head.next;
    while (n !== null) {
      if (n.value === value) return n;
      n = n.next;
    };
    return null;
  }

  public findByIndex(index: number): SingleNode<T> | null {
    if (index < 0) return null;
    let i = 0;
    let n = this.head;

    while (i < index) {
      if (n.next === null) return null;
      i++;
      n = n.next;
    }

    return n.next;
  }

  public remove(value: T): boolean {
    if (value === null || value === undefined) return false;
    let n = this.head;
    while (n.next !== null) {
      if (n.next.value === value) {
        n.next = n.next.next;
        return true;
      }
      n = n.next;
    }
    return false;
  }

  public removeByIndex(index: number): boolean {
    if (index < 0) return false;
    let i = 0;
    let n = this.head;

    while (n.next !== null && i < index) {
      i++;
      n = n.next;
    }
    if (n.next === null) return false;
    n.next = n.next.next;
    return true;
  }

  public toString(type?: string) {
    let n = this.head.next;
    let string = 'head -> '
    while (n !== null) {
      string += `${n.value} -> `;
      n = n.next
    }
    string += 'null';
    console.log(`------toString ${type ? type : ''}-------`);
    console.log(string);
  }

  public toStringByNode(node: SingleNode<T>) {
    let n = node;
    let string = ''
    while (n !== null) {
      string += `${n.value} -> `;
      n = n.next
    }
    string += 'null';
    console.log('------log-------');
    console.log(string);
  }
}

/**
 * 链表节点
 */
export class SingleNode<T> {
  public value: T;
  public next: SingleNode<T> | null;

  constructor(value: T, next: SingleNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

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