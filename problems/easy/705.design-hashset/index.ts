// TODO: https://leetcode.com/problems/design-hashset/

class MyHashSet {
  hash: { [key: number]: boolean } = {};

  constructor() {}

  add(key: number): void {
    this.hash[key] = true;
  }

  remove(key: number): void {
    if (this.hash[key]) {
      delete this.hash[key];
    }
  }

  contains(key: number): boolean {
    return !!this.hash[key];
  }
}

const myHashSet = new MyHashSet();
myHashSet.add(1); // set = [1]
myHashSet.add(2); // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2); // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2); // set = [1]
myHashSet.contains(2); // return False, (already removed)
