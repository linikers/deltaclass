import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/root_reducer";

import {createLogger} from "redux-logger"


const persistedReducer = persistReducer(
    {
        key: "root",
        storage,
        whitelist:[]
    }, rootReducer
)

const loggerMiddleware = createLogger({

})


