import { combineReducers } from 'redux';
import _ from 'lodash';
import types from './types';

const INITIAL_STATE_SLOTS = [
  { hour: 9, am: true },
  { hour: 10, am: true },
  { hour: 11, am: true },
  { hour: 12, am: false },
  { hour: 1, am: false },
  { hour: 2, am: false },
  { hour: 3, am: false },
  { hour: 4, am: false },
  { hour: 5, am: false }
]

const INITIAL_STATE_SELECTEDSLOT = {
  name: '',
  phone: '',
  hour: '',
  am: null
};

const reservationHelper = (state, action) => {
  const newState = [];
  state.map(slot => {
    if(action.payload.hour === slot.hour) {
      newState.push(Object.assign({}, action.payload, { reserved: true }));
    } else {
      newState.push(slot);
    }
  })
  return newState;
}

const slots = (state = INITIAL_STATE_SLOTS, action) => {
  switch(action.type) {
    case types.ADD:
      return reservationHelper(state, action)
    default: 
      return state;
  }
};

const selectedSlot = (state = INITIAL_STATE_SELECTEDSLOT, action) => {
  switch(action.type) {
    case types.SELECT:
    case types.UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  slots,
  selectedSlot
});