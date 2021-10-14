import { GET_ADS } from "../types";

const adminReducer = (state= [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ADS:
      return payload

    default:
      return state;
  }
}

export default adminReducer
