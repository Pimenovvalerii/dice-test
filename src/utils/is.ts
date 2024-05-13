export const isFunction = (fb: Function | undefined): fb is Function => {
  return typeof fb === 'function';
};
