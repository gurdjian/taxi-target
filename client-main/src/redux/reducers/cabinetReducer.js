import { GET_DEPOSITS } from "../types"

const cabinetReducer = (state = 0, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DEPOSITS:
      return payload

    default:
      return state;
  }
}

export default cabinetReducer