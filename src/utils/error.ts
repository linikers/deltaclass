export const getError = (error:any):string=> {
    if(
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
    )
    return error.response.data.error.toString()
    else return error.toString()
}