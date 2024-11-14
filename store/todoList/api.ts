import axios from "axios";
import {
  fetchTodoListFailure,
  fetchTodoListRequest,
  fetchTodoListSuccess,
} from "./actions";
import { API_URL } from "../../constants/url_constants";
import fetchTodoListResponse from "../mockResponses/fetchTodoList.json";
// Thunk action to fetch user data
export const fetchTodoList = () => {
  return async (dispatch: any) => {
    dispatch(fetchTodoListRequest());
    try {
      //const response = await axios.get(API_URL.fetchTodoListDetails);
      //dispatch(fetchTodoListSuccess(response.data));
      dispatch(fetchTodoListSuccess(fetchTodoListResponse.data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchTodoListFailure(error.message));
      } else {
        dispatch(fetchTodoListFailure("An unknown error occurred"));
      }
    }
  };
};
