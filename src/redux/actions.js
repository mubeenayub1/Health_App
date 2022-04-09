export const SET_NAME = 'SET_NAME';
export const SET_AGE = 'SET_AGE';
export const SET_GENDER = 'SET_GENDER';
export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_TARGET_WEIGHT = 'SET_TARGET_WEIGHT';

export const setName = name => dispatch => {
  dispatch({
    type: SET_NAME,
    payload: name,
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_AGE,
    payload: age,
  });
};
export const setGender = gender => dispatch => {
  dispatch({
    type: SET_GENDER,
    payload: gender,
  });
};
export const setHeight = height => dispatch => {
  dispatch({
    type: SET_HEIGHT,
    payload: height,
  });
};
export const setWeight = weight => dispatch => {
  dispatch({
    type: SET_WEIGHT,
    payload: weight,
  });
};
export const setTargetWeight = targetweight => dispatch => {
  dispatch({
    type: SET_TARGET_WEIGHT,
    payload: targetweight,
  });
};
