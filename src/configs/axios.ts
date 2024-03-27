import axios, { AxiosError, AxiosInstance } from "axios";

let count = 0

export const interceptorError = async (
    error: AxiosError,
    defaultApi: AxiosInstance
) => {
    try {
        
    } catch (error) {
        count +=1;
    }
}