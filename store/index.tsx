import { thunk } from "redux-thunk";
import { searchbarReducer } from "./searchbar";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { summaryReducer } from "./summary";
import { todoListReducer } from "./todoList";
import { myRequestsReducer } from "./myRequests";

export const rootReducer = combineReducers({
    searchbar: searchbarReducer,
    summaryData: summaryReducer,
    todoListData: todoListReducer,
    myRequestsData: myRequestsReducer,
  }),
  store = createStore(rootReducer, {}, applyMiddleware(thunk as any));

// export type AppState = ReturnType<typeof rootReducer>;

// export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
