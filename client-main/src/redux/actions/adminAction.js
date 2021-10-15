import axios from "axios";
import { GET_ADS, GET_ALL_ADVERTISEMENT } from "../types";
const url = 'http://localhost:3001';

export const getAllAdvertisement = () => async (dispatch) => {
  const response = await axios.get(`${url}/admin/allads`);
  dispatch({ type: GET_ALL_ADVERTISEMENT, payload: response.data })
}

export const getAds = () => async (dispatch) => {
  const response = await axios.get(`${url}/admin/ads`);
  dispatch({ type: GET_ADS, payload: response.data })
}

export const updateRangeAction = (images, rangeId) => async (dispatch) => {
  await axios.post(`${url}/admin/update`, {images, rangeId});
  dispatch(getAllAdvertisement())
  dispatch(getAds())
}
