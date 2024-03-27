import { OptionsObject, SnackbarKey, SnackbarMessage, useSnackbar } from "notistack";


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