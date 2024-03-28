export class LsCache {
    hasSupport: boolean | undefined;
    hasSupportJson: boolean | undefined;
    type: "local" | "session";
    private storage: Storage;

    cacheBucket = "";
    expiryMilliseconds = 60 * 1000;
    warnings = false;

    constructor({
        type,
        cacheBucket,
    } : {
        type: "local" | "session";
        cacheBucket?: string;
    }){
        this.type = type
        if(type == "local") {
            this.storage = localStorage;
        } else {
            this.storage = sessionStorage
        }
        if (cacheBucket) this.cacheBucket = this.cacheBucket;
    }
}

//export const cachePhotoUrl =