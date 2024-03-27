import { createAction } from "@reduxjs/toolkit"

export interface RequestReduceState<T> {

}

function withPayloadType<T>() {
    return(t: T) => ({ payload: t})
}

export const createActionWithPayload = <T>(action: string) => 
createAction(action, withPayloadType<T>())