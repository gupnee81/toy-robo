import { CONSTANTS } from '../constants';
const { PLACE, MOVE, FACE_LEFT, FACE_RIGHT, REPORT, CLEAR } = CONSTANTS;

export const place = (xAxis: number, yAxis: number, facingDirection: string) => {
  return {
    type: PLACE,
    xAxis,
    yAxis,
    facingDirection
  };
};

export const move = () => {
  return {
    type: MOVE
  };
};

export const faceLeft = () => {
  return {
    type: FACE_LEFT,
  };
};

export const faceRight = () => {
  return {
    type: FACE_RIGHT,
  };
};

export const report = () => {
  return {
    type: REPORT
  };
};

export const clear = () => {
  return {
    type: CLEAR,
  };
};
