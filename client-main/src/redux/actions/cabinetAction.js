import axios from "axios";
import { GET_DEPOSITS } from "../types";
const url = 'http://localhost:3001';

export const getDepositsUser = (id) => async (dispatch) => {
  const response = await axios.post(`${url}/deposits`, { id })
  dispatch({ type: GET_DEPOSITS, payload: response.data })
}