import { combineReducers } from 'redux';
import types from './types';

const INITIAL_STATE_SLOTS = {
  am: {
    9: {},
    10: {},
    11: {}
  },
  pm: {
    12: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {}
  }
};

const INITIAL_STATE_SELECTEDSLOT = {
  name: '',
  phone: '',
  hour: '',
  am: null
};

const reservationHelper = (state, action) => {
  const newState = Object.assign({}, state);
  return action.payload.am ? 
    { ...newState,
      am: {
        ...newState.am,
        [action.payload.hour]: {
          name: action.payload.name,
          phone: action.payload.phone,
          reserved: true
        }
      }
    }
    :
    { ...newState,
      pm: {
        ...newState.pm,
        [action.payload.hour]: {
          name: action.payload.name,
          phone: action.payload.phone,
          reserved: true
        }
      }
    }
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