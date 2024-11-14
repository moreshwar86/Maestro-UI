// store/userActions.js
import axios from "axios";
import {
  FETCH_TODOLIST_REQUEST,
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

// Action types

// Action creators
export const fetchTodoListRequest = () => ({
  type: FETCH_TODOLIST_REQUEST,
});
export const fetchTodoListSuccess = (res: any) => ({
  type: FETCH_TODOLIST_SUCCESS,
  payload: res,
});
export const fetchTodoListFailure = (error: any) => ({
  type: FETCH_TODOLIST_FAILURE,
  payload: error,
});

export const setSearchbarData = (data: any) => ({
  type: SET_SEARCHBAR_DATA,
  payload: data,
});
