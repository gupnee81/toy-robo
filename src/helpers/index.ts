import { CONSTANTS } from '../constants';

const { NORTH, SOUTH, EAST, WEST } = CONSTANTS;

/**
 * Calculate X axis.
 * @param  {Number} xAxis
 * @param  {String} facingDirection
 * @return {Number}
 */

export const calculateX = (xAxis: number, facingDirection: string): number => {
  if (facingDirection === EAST) {
    return xAxis + 1;
  }
  if (facingDirection === WEST) {
    return xAxis - 1;
  }

  return xAxis;
};

/**
 * Calculate Y axis.
 * @param  {Number} yAxis
 * @param  {String} facingDirection
 * @return {Number}
 */
export const calculateY = (yAxis: number, facingDirection: string): number => {
  if (facingDirection === NORTH) {
    return yAxis + 1;
  }
  if (facingDirection === SOUTH) {
    return yAxis - 1;
  }

  return yAxis;
};

/**
 * Validate command.
 * @param  {String} commandString
 * @return {Boolean}
 */
export const validateCommand = (commandString: string): boolean => {
  let isValid = false;

  const placeCommandRegExp = /PLACE [0-9][,][0-9][,](NORTH|SOUTH|EAST|WEST)/;
  const moveRegExp = /MOVE/;
  const leftRegExp = /LEFT/;
  const rightRegExp = /RIGHT/;
  const clearRegExp = /CLEAR/;
  const reportRegExp = /REPORT/;

  const regExpArray = [placeCommandRegExp, moveRegExp, leftRegExp, rightRegExp, clearRegExp, reportRegExp];

  isValid = regExpArray.map((regExp) => {
    return regExp.test(commandString);
  }).includes(true);

  return isValid;
};

/**
 * Rotate left.
 * @param  {String} facingDirection
 * @return {String}
 */
export const determineDirectionAfterLeft = (facingDirection: string): string => {
  switch (facingDirection) {
    case NORTH:
      return WEST;

    case SOUTH:
      return EAST;

    case EAST:
      return NORTH;

    case WEST:
      return SOUTH;

    default:
      return '';
  }
};

/**
 * Rotate right.
 * @param  {String} facingDirection
 * @return {String}
 */
export const determineDirectionAfterRight = (facingDirection: string): string => {
  switch (facingDirection) {
    case NORTH:
      return EAST;

    case SOUTH:
      return WEST;

    case EAST:
      return SOUTH;

    case WEST:
      return NORTH;

    default:
    return '';
  }
};
