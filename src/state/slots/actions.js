import types from './types';

const add = data => {
  return {
    type: types.ADD,
    payload: data
  }
};

const select = data => {
  return {
    type: types.SELECT,
    payload: data
  }
}

const update = data => {
  return {
    type: types.UPDATE,
    payload: data
  }
}

export { add, select, update };