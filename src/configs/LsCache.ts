export class LsCache {
    hasSupport: boolean | undefined;
    hasSupportJson: boolean | undefined;
    type: "local" | "session";
    private storage: Storage;
    cacheBucket = "";
    expiryMilliseconds = 60 * 1000;
    warnings = false;
    maxDate = this.calculateMaxDate(this.expiryMilliseconds)

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

    private calculateMaxDate(expiryMilliseconds: number) {
        return Math.floor(8.64e15 /expiryMilliseconds)
    }
}

//export const cachePhotoUrl =