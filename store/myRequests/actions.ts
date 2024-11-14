// store/userActions.js
import axios from "axios";
import {
  FETCH_MY_REQUESTS_REQUEST,
  FETCH_MY_REQUESTS_SUCCESS,
  FETCH_MY_REQUESTS_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

// Action types

// Action creators
export const fetchMyRequestsRequest = () => ({
  type: FETCH_MY_REQUESTS_REQUEST,
});
export const fetchMyRequestsSuccess = (res: any) => ({
  type: FETCH_MY_REQUESTS_SUCCESS,
  payload: res,
});
export const fetchMyRequestsFailure = (error: any) => ({
  type: FETCH_MY_REQUESTS_FAILURE,
  payload: error,
});

export const setSearchbarData = (data: any) => ({
  type: SET_SEARCHBAR_DATA,
  payload: data,
});
