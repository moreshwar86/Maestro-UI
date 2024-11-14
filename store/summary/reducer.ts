import {
  FETCH_SUMMARY_REQUEST,
  FETCH_SUMMARY_SUCCESS,
  FETCH_SUMMARY_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

const initialState = {
  loading: false,
  isSeached: false,
  error: null,
  summaryDetails: undefined,
};

export const summaryReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_SUMMARY_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        summaryDetails: action.payload,
        error: null,
      };
    case FETCH_SUMMARY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        summaryDetails: {},
      };
    case SET_SEARCHBAR_DATA:
      return { ...state, isSeached: action.payload };

    default:
      return state;
  }
};
