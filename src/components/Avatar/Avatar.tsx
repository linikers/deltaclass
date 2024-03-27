import { FC, useEffect, useState } from "react"
import { Avatar as AvatarMui, SxProps, Theme } from "@mui/material"

export const Avatar: FC<{
    photoS3?: boolean | null;
    displayName?: string;
    src?: string | null;
    sx?: SxProps<Theme>
;}> =({displayName, src: initSrc, sx, photoS3}) => {

    const [src, setSrc] = useState(initSrc)
    useEffect(()=> {

    },[])
    return (
        <AvatarMui 
        
        />
    )
}