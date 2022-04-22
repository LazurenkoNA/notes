// TODO: https://leetcode.com/problems/implement-stack-using-queues

class MyStack {
  stack: number[] = [];

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    return this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  empty(): boolean {
    return !this.stack.length;
  }
}

const obj2 = new MyStack();
obj2.push(2);
const param_2 = obj2.pop();
const param_3 = obj2.top();
const param_4 = obj2.empty();
