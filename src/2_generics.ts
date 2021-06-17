class Queue {
  private data: any[] = [];

  push(item: any) { this.data.push(item); }

  pop() { return this.data.shift(); }
}

// const numberQueue = new Queue()
// numberQueue.push(12)

// const stringQueue = new Queue()
// stringQueue.push('fqfqfqffq')

/** A class definition with a generic parameter */
class QueueT<T> {
  private data: T[] = [];

  push(item: T) { this.data.push(item); }

  pop(): T | undefined { return this.data.shift(); }
}

const numberQueue = new QueueT<number>();

numberQueue.push(12);
numberQueue.push('qfefq');

const stringQueue = new QueueT<string | number>();

stringQueue.push('fqfqfqffq');
stringQueue.push(121);

// number[]
const some: number[] = [12, 343, 555];

export {};
