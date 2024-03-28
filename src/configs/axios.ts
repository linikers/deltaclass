import { snack } from "@/components/GlobalSnackbar";
import { store } from "@/store";
import { getError } from "@/utils";
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { IAxiosCacheAdapterOptions, setup } from "axios-cache-adapter";
import { Environment } from "./Enviroment";


const limit = 5;
let count = 0;

interface MemoryStore {
    store: object;
    setItem: (key: string, value: object) => object;
    getItem: (key: string) => object;
    removeItem: (key:string) => void;
    clear: () => void;
    lenght: () => number;
}

interface MyAxiosCacheAdapterOptions extends IAxiosCacheAdapterOptions {
    uuid: string;
}

export const refreshUser = async () => {

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
        const errorMessage = error.message || '';
        if (
            response?.status === 401 &&
            (errorMessage.toLowerCase().includes("token") ||
                response?.statusText == "Unauthorized"   ||
                errorMessage?.toLowerCase().includes("jwt expired"))  &&
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

export const interceptorGenericError = (error: AxiosError) => {
    //@ts-ignore
    error.message = error?.response?.data?.error ?? error.message ?? error.toString()
    return Promise.reject(error)
}

const invalidate = async (
    config: IAxiosCacheAdapterOptions,
    request: AxiosRequestConfig<any>,
) => {
    if(request.clearCacheEntry) {
        await (config.store as MemoryStore).removeItem(
            (config as MyAxiosCacheAdapterOptions).uuid
        )
    }
}
export const api = setup({
    baseURL:Environment.API_URL,
    cache: {
        maxAge: Environment.MILLISECONDS_IN_A_SECONDS,
        exclude: {query: false},
        invalidate,
    }
})

export const apiRelatorio = setup({
    baseURL: Environment.RELATORIO_API_URL,
    cache: {
        maxAge:Environment.MILLISECONDS_IN_A_SECONDS,
        exclude: {query: false},
        invalidate,
    }
})

export const apiConfig = setup({
    baseURL: Environment.CONFIG_DELTA_API_URL,
})

export const apiPush = setup({
    baseURL: Environment.PUSH_DELTA_API_URL,
})

export const setToken = (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    apiRelatorio.defaults.headers.common.Authorization = `Bearer ${token}`;
    apiConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
    apiPush.defaults.headers.common.Accept = `Bearer ${token}`;
}

export const setBaseUrl = (escolaId: string) => {
    api.defaults.baseURL =  `${Environment.API_URL}/api/${escolaId}`;
    apiRelatorio.defaults.baseURL = `${Environment.RELATORIO_API_URL}/api/${escolaId}`;
};

api.interceptors.response.use(
    (success) => success,
    (error) => interceptorError(error, api)
)
apiRelatorio.interceptors.response.use(
    (success) => success,
    (error) => interceptorError(error, api)
)
apiConfig.interceptors.response.use(
    (success) =>success,
    (error) => interceptorError(error, api)
)
apiPush.interceptors.response.use(
    (success) => success,
    (error) => interceptorError(error, api)
)

api.interceptors.response.use((success) => success, interceptorGenericError);
apiRelatorio.interceptors.response.use(
    (success) => success,
    interceptorGenericError
)
apiConfig.interceptors.response.use(
    (success) => success,
    interceptorGenericError
)
apiPush.interceptors.response.use(
    (success) => success,
    interceptorGenericError
)