import axios from 'axios';
import { SET_USER } from '../types';
const url = process.env.REACT_APP_URL;

export const signUpUser = (value) => async (dispatch) => {
  const response = await axios.post(`${url}/user/signup`, value)
  dispatch({ type: SET_USER, payload: response.data })
}

export const signInUser = (value) => async (dispatch) => {
  const response = await axios.post(`${url}/user/signin`, value)
  dispatch({ type: SET_USER, payload: response.data })
}

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/user/check`)
    dispatch({ type: SET_USER, payload: response.data })
  } catch (err) {
    console.log(err);
  }
}

export const logoutUser = () => async (dispatch) => {
  await axios(`${url}/user/logout`)
  dispatch({ type: SET_USER, payload: null })
}
