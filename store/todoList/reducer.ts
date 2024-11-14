import {
  FETCH_TODOLIST_REQUEST,
  FETCH_TODOLIST_SUCCESS,
  FETCH_TODOLIST_FAILURE,
  SET_SEARCHBAR_DATA,
} from "./types";

const initialState = {
  loading: false,
  isSeached: false,
  error: null,
  todoList: undefined,
};

export const todoListReducer = (
  state = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case FETCH_TODOLIST_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TODOLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: action.payload,
        error: null,
      };
    case FETCH_TODOLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        todoList: {},
      };
    case SET_SEARCHBAR_DATA:
      return { ...state, isSeached: action.payload };

    default:
      return state;
  }
};
