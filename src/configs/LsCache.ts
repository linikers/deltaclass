import axios, {AxiosError} from "axios";
import { setup } from "axios-cache-adapter";



interface MemoryStore {
    store: object;
    clear: () => void;
    lenght: () => number;
}
export const api = setup()