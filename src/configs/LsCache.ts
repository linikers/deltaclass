export class LsCache {
    hasSupport: boolean | undefined;
    hasSupportJson: boolean | undefined;
    type: "local" | "session";
    private storage: Storage;
    cacheBucket = "";
    CACHE_PREFIX = "lscache-";
    CACHE_SUFFIX = "-cacheexpiration";
    EXPIRY_RADIX = 10;
    expiryMilliseconds = 60 * 1000;
    warnings = false;
    maxDate = this.calculateMaxDate(this.expiryMilliseconds);

    constructor({
        type,
        cacheBucket,
        expiryMilliseconds,
        warnings,

    } : {
        type: "local" | "session";
        cacheBucket?: string;
        expiryMilliseconds?: number;
        warnings?: boolean;

    }){
        this.type = type
        if(type == "local") {
            this.storage = localStorage;
        } else {
            this.storage = sessionStorage
        }
        if (cacheBucket) this.cacheBucket = this.cacheBucket;
        if(expiryMilliseconds) this.expiryMilliseconds = expiryMilliseconds;
        if(warnings != undefined) this.warnings = warnings;
    }

    private warm(message: string, error?: Error) {
        if(!this.warnings) return;
        if(!("console" in window) || typeof window.console.warn !== "function")
            return;
        window.console.warn("lscache -" + message);
        if(error)window.console.warn("lscache - The error was: " + error.message)
    }

    private isOutOfSpace(e: Error | undefined) {
        return (
            e &&
            (e.name === "QUOTA_EXCEEDED_ERR"         ||
             e.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
             e.name === "QuotaExceededError")
        )
    }
    
    private setItem(key: string, value: string ) {
        this.storage.removeItem(this.CACHE_PREFIX + this.cacheBucket + key);
        this.storage.setItem(this.CACHE_PREFIX + this.cacheBucket + key, value)
    }

    private getItem(key: string) {
        return this.storage.getItem(this.CACHE_PREFIX + this.cacheBucket +key)
    }

    private removeItem(key: string) {
        this.storage.removeItem(this.CACHE_PREFIX + this.cacheBucket + key)
    }

    private flushItem(key: string) {
        const exprKey = this.expirationKey(key)
        this.removeItem(key)
        this.removeItem(exprKey)
    }

    private flushExpiredItem(key: string) {
        const
    }


    private expirationKey(key: string) {
        return key + this.CACHE_SUFFIX
    }
    private calculateMaxDate(expiryMilliseconds: number) {
        return Math.floor(8.64e15 /expiryMilliseconds)
    }
    private currentTime() {
        return Math.floor(new Date().getTime() / this.expiryMilliseconds)
    }
    //Determina se a (des)serialização JSON nativa é suportada no navegador.
    private supportsJSON() {

        if(this.hasSupportJson === undefined) {
            this.hasSupportJson = JSON != null && JSON != undefined;
        }
        return this.hasSupportJson;
    }

}

//export const cachePhotoUrl =