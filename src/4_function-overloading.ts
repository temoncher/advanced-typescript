interface Animal {
  legs: number;
  name?: string;
  getVoice: () => void;
}

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

const createFish = (): Fish => ({
  legs: 0,
  getVoice() {

  },
});

const createCat = (name: string): Cat => ({
  legs: 4,
  name,
  getVoice() {
    console.log('Meow');
  },
});

function createAnimal(): Fish;
function createAnimal(name: string): Cat;
function createAnimal(name?: string): Cat | Fish {
  if (name) {
    return createCat(name);
  }

  return createFish();
}

class AnimalOverloadable {
  getVoice(): number;
  getVoice(message: string): string;
  getVoice(message?: string): string | number {
    if (message) {
      return message;
    }

    return 42;
  }
}

const cat = createAnimal('Barsik');
const fish = createAnimal();

export {};
