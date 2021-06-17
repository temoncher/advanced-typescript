interface Something {
  foo: string;
  bar: string;
}

interface SomethingElse {
  foo: string;
  bar: string;
}

const something: Something = {
  foo: 'first',
  bar: 'first',
};

fetch('fefefe').then(async (data) => data.json())
  /** SUPER-unsafe type assertion */
  .then((res: Something) => {
    res;
  });

const somethingElse: SomethingElse = something;

type DeliveryOrder = {
  id: string;
  customerName: string;
  amount: number;
};

type PickUpOrder = {
  id: string;
  customerName: string;
  amount: number;
};

const createPickupOrder = (): PickUpOrder => ({
  id: 'id',
  customerName: 'Artem',
  amount: 12,
});

const deliverOrder = (order: DeliveryOrder) => {
  // ..
};

const order: PickUpOrder = createPickupOrder();

deliverOrder(order);

export {};
