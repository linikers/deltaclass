export class LsCache {
    hasSupport: boolean | undefined;
    hasSupportJson: boolean | undefined;
    type: "local" | "session";
    private storage: Storage;
    cacheBucket = "";
    expiryMilliseconds = 60 * 1000;
    warnings = false;
    maxDate = this.calculateMaxDate

    constructor({
        type,
        cacheBucket,
        expiryMilliseconds,

    } : {
        type: "local" | "session";
        cacheBucket?: string;
        expiryMillisconds?: number;

    }){
        this.type = type
        if(type == "local") {
            this.storage = localStorage;
        } else {
            this.storage = sessionStorage
        }
        if (cacheBucket) this.cacheBucket = this.cacheBucket;
        if(expiryMilliseconds)
        if()
    }

    private calculateMaxDate(expiryMilliseconds: number) {
        return Math.floor(8.64e15 /expiryMilliseconds)
    }
}

//export const cachePhotoUrl =