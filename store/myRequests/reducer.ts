import {
  FETCH_MY_REQUESTS_REQUEST,
  FETCH_MY_REQUESTS_SUCCESS,
  FETCH_MY_REQUESTS_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

const initialState = {
  loading: false,
  isSeached: false,
  error: null,
  myRequestsData: undefined,
};

export const myRequestsReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_MY_REQUESTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MY_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        myRequestsData: action.payload,
        error: null,
      };
    case FETCH_MY_REQUESTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        myRequestsData: {},
      };
    case SET_SEARCHBAR_DATA:
      return { ...state, isSeached: action.payload };

    default:
      return state;
  }
};
