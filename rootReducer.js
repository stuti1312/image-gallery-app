import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./src/redux/reducers/Reducer";

const middlewares=[thunk]
const reducer = combineReducers({ dataReducer })
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store