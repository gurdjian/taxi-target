import { SET_ALL_RANGE } from "../types";

const allRangeReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ALL_RANGE:
      return payload
    default:
      return state;
  }
}

export default allRangeReducer
