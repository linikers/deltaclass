import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/root_reducer";

import {createLogger} from "redux-logger"
import { Environment } from "@/configs/Enviroment";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";


const persistedReducer = persistReducer(
    {
        key: "root",
        storage,
        whitelist:[]
    }, rootReducer
)

const loggerMiddleware = createLogger({
    predicate: () => Environment.IS_DEV_MODE,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: persistedReducer,
    devTools: Environment.IS_DEV_MODE,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }).concat(loggerMiddleware, sagaMiddleware)
})

export const persistor = persistStore(store)

