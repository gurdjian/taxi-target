import { SET_NEW_USER, SET_USER } from "../types"

const userReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      console.log(payload);
      return payload
    case SET_NEW_USER:
      return payload
    default:
      return state;
  }
}

export default userReducer
