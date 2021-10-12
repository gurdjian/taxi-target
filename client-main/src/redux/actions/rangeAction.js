import axios from "axios"
import { SET_ALL_RANGE } from "../types";
const url = process.env.REACT_APP_URL;

export const getAllRange = () => async(dispatch) => {
  const response = await axios.get(`${url}/karta`)
  console.log(response.data);
  dispatch({type:SET_ALL_RANGE, payload: response.data})
}
