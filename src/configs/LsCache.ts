export class LsCache {
    hasSupport: boolean | undefined;
    hasSupportJson: boolean | undefined;
    type: "local" | "session";

    constructor({
        type
    } : {
        type: "local" | "session"
    }){
        this.type = type
    }
}

//export const cachePhotoUrl =