import { 
    OptionsObject, 
    SnackbarKey, 
    SnackbarMessage, 
    SnackbarProvider, 
    useSnackbar } from "notistack";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { FC, ReactNode } from "react";

let snackFunction:
| ((
    message: SnackbarMessage,
    options?: OptionsObject | undefined 
) => SnackbarKey)
| null = null

export const getGlobalSnack = ()=> snackFunction


export const showSnack = (
    message: SnackbarMessage = "",
    options: OptionsObject = {},
) => {
    const snack = snackFunction
    if(!snack){
        return
    }
    return snack(message, options)
}

export const snack = {
    error:(message: SnackbarMessage = "Erro") => showSnack(message, {variant:"error"}),
    success:(message:SnackbarMessage = "Sucesso")=>showSnack(message, {variant:"success"}),
    warning:(message:SnackbarMessage = "Atenção") => showSnack(message, {variant:"warning"}),
    info:(message:SnackbarMessage = "Info") => showSnack(message, {variant: "info"}),

}

export const GlobalSnackbar = () => {
    const {enqueueSnackbar} = useSnackbar()
    snackFunction = enqueueSnackbar

    return null
}

export const CloseSnackButton: FC<
    {snackKey: string | number | undefined} & OptionsObject
> = ({snackKey}) => {
    const {closeSnackbar} = useSnackbar()
    return (
        <IconButton
        size="small"
        color="inherit"
        >
            <CloseIcon />
        </IconButton>
    )
}

export const  GlobalSnackbarProvider:FC = ({children}:any) => {
    return (
        <SnackbarProvider
        action={(key): ReactNode => <CloseSnackButton snackKey={key} />}
        >
        {children}
        </SnackbarProvider>
    )
}