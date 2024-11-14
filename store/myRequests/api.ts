import axios from "axios";
import {
  fetchMyRequestsFailure,
  fetchMyRequestsRequest,
  fetchMyRequestsSuccess,
} from "./actions";
import { API_URL } from "../../constants/url_constants";
import fetchMyRequestsResponse from "../mockResponses/fetchMyRequests.json";
// Thunk action to fetch user data
export const fetchMyRequestsList = () => {
  return async (dispatch: any) => {
    dispatch(fetchMyRequestsRequest());
    try {
      //const response = await axios.get(API_URL.fetchMyRequests);
      //dispatch(fetchMyRequestsSuccess(response.data));
      dispatch(fetchMyRequestsSuccess(fetchMyRequestsResponse.data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchMyRequestsFailure(error.message));
      } else {
        dispatch(fetchMyRequestsFailure("An unknown error occurred"));
      }
    }
  };
};
