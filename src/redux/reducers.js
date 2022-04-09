import {
  SET_NAME,
  SET_AGE,
  SET_GENDER,
  SET_HEIGHT,
  SET_WEIGHT,
  SET_TARGET_WEIGHT,
} from './actions';

const initialState = {
  name: '',
  age: '',
  gender: '',
  height: '',
  weight: '',
  targetweight: '',
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {...state, name: action.payload};
    case SET_GENDER:
      return {...state, gender: action.payload};
    case SET_AGE:
      return {...state, age: action.payload};
    case SET_HEIGHT:
      return {...state, height: action.payload};
    case SET_WEIGHT:
      return {...state, weight: action.payload};
    case SET_TARGET_WEIGHT:
      return {...state, targetweight: action.payload};
    default:
      return state;
  }
};
