import { GET_ALL_ADVERTISEMENT } from "../types";

const allAdsReducer = (state= [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_ADVERTISEMENT:
      return payload

    default:
      return state;
  }
}

export default allAdsReducer
