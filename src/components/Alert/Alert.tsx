import { FC } from "react"
import { AlertColor, 
    Alert as AlertMui, 
    AlertTitle, 
    SxProps, 
    Typography, 
    Theme
} from "@mui/material"

import {alpha} from "@mui/system/colorManipulator"
//import { Theme } from "@mui/system"

export const Alert: FC<{
    title?: string,
    severity?: AlertColor,
    sxBackground?: SxProps<Theme>
    message?: string,
    imageSrc: string,
}> =({severity, title, message, imageSrc, sxBackground}) => {

    return (
        <AlertMui
        icon={false}
        severity={severity}
        sx={{
            paddingTop: "50vh",
            backgroundImage:`url(${imageSrc})`,
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "lighten",
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
            backgroundSize: (theme) => theme.spacing(44),
            ...sxBackground,
        }}
        >
            {title &&<AlertTitle>{title}</AlertTitle>}
            {message && (

                <Typography variant="body1" textAlign="center">
                    {message}
                </Typography>
            )}
        </AlertMui>
    )
}