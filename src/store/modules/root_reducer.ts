import { Reducer, combineReducers, AnyAction } from "@reduxjs/toolkit";

export const combinedReducers = combineReducers({
    //escola,
    //usuario,
    //versao,
});

export type RootState = ReturnType<typeof combinedReducers>

export const rootReducer: Reducer<RootState> = (state) => {
    return combineReducers(state)
}