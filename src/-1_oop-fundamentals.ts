const some1 = {
  foo: 'sss',
};

const some2 = {
  foo: 'sss',
};

const some3 = {
  foo: 'sss',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const some4 = {
  foo: 'sss',
};

const some5 = {
  foo: 'sss',
};

/** Object constructor functional fashion */
const createFoo = (fooValue: string) => {
  const newFooValue = `${fooValue}foo`;

  return {
    foo: newFooValue,
  };
};
const createdFoo = createFoo('bar');

/** Object constructor functional fashion (using this context) */
function FooFunctional(fooValue: string) {
  const newFooValue = `${fooValue}foo`;

  this.foo = newFooValue;
}
const fooFunctional = new FooFunctional('bar');

/** Object constructor functional fashion (using this context) */
class Foo {
  foo: string;

  constructor(fooValue: string) {
    const newFooValue = `${fooValue}foo`;

    this.foo = newFooValue;
  }
}

const foo = new Foo('bar');

/** Interfaces */

interface Animal {
  legs: number;
  name?: string;
  getVoice: () => void;
}

const sassa: Animal = {
  legs: 13,
  name: 'efe',
  getVoice() {},
};

class Dog implements Animal {
  name: string;

  legs = 4;

  constructor(name) {
    this.name = name;
  }

  getVoice() {
    console.log('Bark');
  }
}

class Cat implements Animal {
  name: string;

  legs = 4;

  constructor(name) {
    this.name = name;
  }

  getVoice() {
    console.log('Meow');
  }
}

class Fish implements Animal {
  legs = 0;

  getVoice() {
  }
}

const patAnimal = (animal: Animal) => {
  animal.getVoice();
};

export {};
