const { SET_STATUS } = require('../types/allTypes');

const statusReducer = (state = 'stop', action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_STATUS:
      return payload;

    default:
      return state;
  }
};

export default statusReducer;
