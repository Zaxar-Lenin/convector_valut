import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {ConvertReduce} from "./convert-reduce";

const rootReducer = combineReducers({
    currencies: ConvertReduce
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type StoreType = typeof store
export type StateType = ReturnType<typeof rootReducer>