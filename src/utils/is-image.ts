export const isImage = (filename:string | File):boolean => {
if(typeof filename == "string") {
    return ["jpg", "png", "bmp"].includes(
        (filename.split(".").pop() ?? "").toLocaleLowerCase()
    );
}
return filename.type.indexOf("image")  >= 0
}