import axios from "axios";
import { GET_DEPOSITS, SET_WALLET } from "../types";
const url = 'http://localhost:3001';

export const getWalletAction = () => async (dispatch) => {
  const response = await axios.post(`${url}/deposits/wallet`);
  dispatch({ type: SET_WALLET, payload: response.data })
}

export const getDepositsUser = () => async (dispatch) => {
  const response = await axios.post(`${url}/deposits`);
  dispatch({ type: GET_DEPOSITS, payload: response.data })
}
