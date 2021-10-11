const { SET_POSITION } = require('../types/allTypes');

const positionReducer = (state = [55.75, 37.57], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_POSITION:
      return payload;

    default:
      return state;
  }
};

export default positionReducer;
