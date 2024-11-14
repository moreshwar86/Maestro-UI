import axios from "axios";
import {
  fetchQueryFailure,
  fetchQueryRequest,
  fetchQuerySuccess,
  fetchSuggestionsFailure,
  fetchSuggestionsRequest,
  fetchSuggestionsSuccess,
} from "./actions";
import { API_URL } from "../../constants/url_constants";
import fetchQueryResponse from "../mockResponses/fetchQuery.json";
import fetchSuggestionsResponse from "../mockResponses/fetchSuggestions.json";
// Thunk action to fetch user data
export const fetchQuery = (request: any) => {
  return async (dispatch: any) => {
    dispatch(fetchQueryRequest());
    try {
      //const response = await axios.post(API_URL.fetchQuery, { request });
      //dispatch(fetchQuerySuccess(response.data));
      setTimeout(() => {
        dispatch(fetchQuerySuccess(fetchQueryResponse.data));
      }, 4000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchQueryFailure(error.message));
      } else {
        dispatch(fetchQueryFailure("An unknown error occurred"));
      }
    }
  };
};

export const fetchSuggestions = () => {
  return async (dispatch: any) => {
    dispatch(fetchSuggestionsRequest());
    try {
      //const response = await axios.get(API_URL.fetchSuggestions, {});
      //dispatch(fetchSuggestionsSuccess(response.data));

      dispatch(fetchSuggestionsSuccess(fetchSuggestionsResponse.data));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchSuggestionsFailure(error.message));
      } else {
        dispatch(fetchSuggestionsFailure("An unknown error occurred"));
      }
    }
  };
};
