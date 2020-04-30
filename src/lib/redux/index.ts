import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { runtime, setSession } from "./modules";

const rootReducer = combineReducers({
  runtime
});
let middlewares: any[] = [thunk];

if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "testing") {
  middlewares.push(logger);
}

export {
  setSession
}
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
