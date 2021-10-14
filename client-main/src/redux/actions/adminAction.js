import axios from "axios";
import { GET_ALL_ADVERTISEMENT, GET_ALL_PICTURE } from "../types";
const url = 'http://localhost:3001';

export const getAllAdvertisement= () => async (dispatch) => {
  const response = await axios.post(`${url}/admin/advertisement`);
  dispatch({ type: GET_ALL_ADVERTISEMENT, payload: response.data })
}