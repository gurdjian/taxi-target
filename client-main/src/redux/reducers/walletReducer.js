import { SET_WALLET } from "../types"

const walletReducer = (state = 0, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_WALLET:
      return payload

    default:
      return state;
  }
}

export default walletReducer
