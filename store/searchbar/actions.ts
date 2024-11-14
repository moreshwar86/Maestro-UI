// store/userActions.js
import axios from "axios";
import {
  FETCH_QUERY_REQUEST,
  FETCH_QUERY_SUCCESS,
  FETCH_QUERY_FAILURE,
  FETCH_SUGGESTIONS_REQUEST,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE,
  HIDE_RIGHT_SIDEBAR,
} from "./types";

// Action types

// Action creators
export const fetchQueryRequest = () => ({
  type: FETCH_QUERY_REQUEST,
});
export const fetchQuerySuccess = (res: any) => ({
  type: FETCH_QUERY_SUCCESS,
  payload: res,
});
export const fetchQueryFailure = (error: any) => ({
  type: FETCH_QUERY_FAILURE,
  payload: error,
});

export const fetchSuggestionsRequest = () => ({
  type: FETCH_SUGGESTIONS_REQUEST,
});
export const fetchSuggestionsSuccess = (res: any) => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  payload: res,
});
export const fetchSuggestionsFailure = (error: any) => ({
  type: FETCH_SUGGESTIONS_FAILURE,
  payload: error,
});

export const hideRightSidebar = (data: any) => ({
  type: HIDE_RIGHT_SIDEBAR,
  payload: data,
});
