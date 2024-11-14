// store/userActions.js
import axios from "axios";
import {
  FETCH_SUMMARY_REQUEST,
  FETCH_SUMMARY_SUCCESS,
  FETCH_SUMMARY_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

// Action types

// Action creators
export const fetchSummaryRequest = () => ({
  type: FETCH_SUMMARY_REQUEST,
});
export const fetchSummarySuccess = (res: any) => ({
  type: FETCH_SUMMARY_SUCCESS,
  payload: res,
});
export const fetchSummaryFailure = (error: any) => ({
  type: FETCH_SUMMARY_FAILURE,
  payload: error,
});

export const setSearchbarData = (data: any) => ({
  type: SET_SEARCHBAR_DATA,
  payload: data,
});
