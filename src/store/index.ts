import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./modules/root_reducer";


const persistedReducer = persistReducer(
    {
        key: "root",
        storage,
        whitelist:[]
    }, rootReducer
)