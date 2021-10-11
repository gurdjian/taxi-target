const { SET_RANGES } = require('../types/allTypes');

const rangeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_RANGES:
      return payload;

    default:
      return state;
  }
};

export default rangeReducer;
