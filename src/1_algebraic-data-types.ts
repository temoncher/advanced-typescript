/** Discriminated unions */
interface Square {
  size: number;
}

interface Rectangle {
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

let circle: Shape = {
  size: 13,
};

circle = {
  width: 12,
  height: 13,
};

/** Intersection types */

interface Boxer {
  canPunchYouInTheFace: boolean;
}

interface Boxer {
  qfeqf: 'qfeqf';
}

interface KarateGuy {
  canKickYou: boolean;
}

type KickBoxer = Boxer & KarateGuy;

const boxer: Boxer = {

};

export {};
