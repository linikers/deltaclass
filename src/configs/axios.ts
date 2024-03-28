import { snack } from "@/components/GlobalSnackbar";
import { store } from "@/store";
import { getError } from "@/utils";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { IAxiosCacheAdapterOptions, setup } from "axios-cache-adapter";
import { Environment } from "./Enviroment";
import { config } from "process";

const limit = 5;
let count = 0;

interface MemoryStore {
    store: object;
    //setItem: (key: string) =>
    
    removeItem: (key:string) => void;
    clear: () => void;
}

interface MyAxiosCacheAdapterOptions extends IAxiosCacheAdapterOptions {
    uuid: string;
}

export const interceptorError = async (
    error: AxiosError,
    defaultApi: AxiosInstance
) => {
    try {
        const {config, response, message} = error;
        const {
            usuario: {usuario},
        } = store.getState()
        if (
            response?.status === 401 &&
            (message.toLowerCase().includes("token") ||
                response?.statusText == "Unauthorized"   ||
                response?.data?.error == "jwt expired")  &&
            usuario
        ) {
            if(limit <= count) {
                throw new Error("Erro ao renovar o token. Tente novamente mais tarde");
            }
        }
        
    } catch (error) {
        count +=1;
        snack.error(getError(error))
        return Promise.reject(error)
    }
}

const invalidate = async (
    config: IAxiosCacheAdapterOptions,
    request: AxiosRequestConfig<any>,
) => {
    if(request.clearCacheEntry) {
        await (config.store as MemoryStore)
    }
}
export const api = setup({
    baseURL:Environment.API_URL,
    cache: {
        maxAge: Environment.MILLISECONDS_IN_A_SECONDS,
        exclude: {query: false},
        //invalidate,
    }
})