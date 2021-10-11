const { UPDATE_IMG } = require('../types/allTypes');

const adsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_IMG:
      return payload;

    default:
      return state;
  }
};

export default adsReducer;
