import {
  FETCH_QUERY_REQUEST,
  FETCH_QUERY_SUCCESS,
  FETCH_QUERY_FAILURE,
  FETCH_SUGGESTIONS_REQUEST,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE,
  HIDE_RIGHT_SIDEBAR,
} from "./types";

const initialState = {
  loading: false,
  rightSidebarHidden: false,
  error: null,
  chatDetails: undefined,
  suggestionsList: [],
};

export const searchbarReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  console.log("action", action, state.loading);
  switch (action.type) {
    case FETCH_QUERY_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        chatDetails: action.payload,
        error: null,
      };
    case FETCH_QUERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        chatDetails: {},
      };

    case FETCH_SUGGESTIONS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        suggestionsList: action.payload,
        error: null,
      };
    case FETCH_SUGGESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        suggestionsList: [],
      };
    case HIDE_RIGHT_SIDEBAR:
      return { ...state, rightSidebarHidden: action.payload };

    default:
      return state;
  }
};
