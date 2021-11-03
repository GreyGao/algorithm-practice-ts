import { ArrayStack, LinkedStack } from './Stack';
class BrowserStack {
  private backStack: LinkedStack<string>;
  private forwardStack: LinkedStack<string>;

  private curr: string | null;

  constructor() {
    this.backStack = new LinkedStack<string>();
    this.forwardStack = new LinkedStack<string>();
    this.curr = null;
  }

  public open(url: string) {
    if (this.curr) {
      this.backStack.push(this.curr);
    }
    this.curr = url;
    this.forwardStack = new LinkedStack<string>();
  }

  public goBack() {
    if (this.backStack.length === 0) return;
    const url = this.backStack.pop();
    this.forwardStack.push(this.curr);
    this.curr = url;
  }

  public goForward() {
    if (this.forwardStack.length === 0) return;
    const url = this.forwardStack.pop();
    this.backStack.push(this.curr);
    this.curr = url;
  }

  public toString(type?: string) {
    console.log('>>>>>> ' + (type ? type : ''));
    this.backStack.toString('backStack:');
    this.forwardStack.toString('forwardStack:');
    console.log('curr:', this.curr);
  }
}

/** 测试 */
const stack = new BrowserStack();
stack.open('http://baidu.com');
stack.open('http://163.com');
stack.open('http://qq.com');
stack.open('http://126.com');
stack.toString();
stack.goBack();
stack.goBack();
stack.goBack();
stack.toString('goBack:');
stack.open('http://99.com');
stack.toString('reOpen:');
stack.goForward();
stack.toString('goForward:');