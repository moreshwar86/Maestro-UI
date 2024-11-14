import axios from "axios";
import {
  fetchSummaryFailure,
  fetchSummaryRequest,
  fetchSummarySuccess,
} from "./actions";
import { API_URL } from "../../constants/url_constants";
import fetchSummaryResponse from "../mockResponses/fetchSummary.json";
// Thunk action to fetch user data
export const fetchSummaryDetails = () => {
  return async (dispatch: any) => {
    dispatch(fetchSummaryRequest());
    try {
      //const response = await axios.get(API_URL.fetchSummaryDetails);
      //dispatch(fetchSummarySuccess(response.data));
      dispatch(fetchSummarySuccess(fetchSummaryResponse.data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchSummaryFailure(error.message));
      } else {
        dispatch(fetchSummaryFailure("An unknown error occurred"));
      }
    }
  };
};
