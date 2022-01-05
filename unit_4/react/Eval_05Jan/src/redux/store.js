import { createStore } from "redux";
import reducer from "./reducers";

// console.log("store", store.getState());
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log("store", store.getState());
