type Delete = {
  type: 'delete';
};

type Add = {
  type: 'add';
  payload: string;
};

type State = string;
type Action = Delete | Add;

const reduce = (state: State, action: Action): State => {
  switch (action.type) {
    case 'delete':
      action;

      return '';
    case 'add':
      action;

      return state + action.payload;
    default:
      action;

      return state;
  }
};

const validate = (message): never => {
  // 1
  if (message === 'error1') {
    throw new Error('Its an error 1');
  }

  throw new Error('Its unknown error');
  // ...
};

const endlessLoop = (): never => {
  while (true) {
    // do stuff
  }
};

// 'delivered' 'in delivery' 'preparing' 'awaiting transaction'....
type Order = {
  phase: OrderPhase;
};

enum OrderPhase {
  DELIVERED = 'delivered',
  IN_DELIVERY = 'in ...',
}

const fff = (order: Order) => {
  if (order.phase === OrderPhase.DELIVERED) {
    // do delivery
    return;
  }

  order.phase;
};

type Doodo = `${number} haha`;

const dodo: Doodo = '12 haha';

export {};
