
import { rootReducer } from "@/store/modules/root_reducer";
import { configureStore } from "@reduxjs/toolkit";
import {useSelector as useReduxSelector, TypedUseSelectorHook} from "react-redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedReducer = persistReducer(
    {
        key:"root",storage, whitelist:["layout", "usuario", "escola"],

    }, rootReducer
)

export const store = configureStore({ reducer:persistedReducer})
    

export const useAppSelector: TypedUseSelectorHook<RootState> = useReduxSelector;


export type RootState = ReturnType<typeof store.getState>;


