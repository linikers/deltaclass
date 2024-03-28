import  { SHA256 } from "crypto-js"
import Resizer from "react-image-file-resizer"
interface LoadS3 {
    processed?: string;
    error?: string;
}
const resizeFile = (
    file: File,
    {max, quality}: {max?: number; quality?: number} ={}
) => {
    const formats = ["apng", "avif", "gif", "jpeg", "png", "svg+xml", "webp"];
    const compressFormat = file.type.replace("image/", "");
    if(!formats.includes(compressFormat)) {
        throw new Error (
            `A imagem deve ser um dos dois tipos: ${formats.join(
                ","
            )} e encontrou o tipo: ${compressFormat}`
        );
    }
    return new Promise<File>((resolve) => {
        Resizer.imageFileResizer(
            file,
            max ?? 1024,
            max ?? 1024,
            compressFormat,
            quality ?? 100,
            0,
            (uri) => {
                if (uri && uri instanceof File) resolve(uri)
            },
        "file"
        );
    });
};

const buildHashFile = async (file: File): Promise<string> => {
    const result_base64 = await new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(file)
    })
    return SHA256(result_base64 as string).toString()
}

const sendS3File = async () => {

}

const LoadS3File = async() => {
const a = 1
    return (
        a
    )
}

const sendS3PhotoUser = async () => {

    
}

export {}
