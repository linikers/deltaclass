import { blue, red } from "@mui/material/colors";
import { ITheme, LayoutActionsTypes, LayoutState } from "./types";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";


const INITIAL_STATE: LayoutState = {
    sidebar: {
        isOpen:true,
    },
    rightbar: {
        isOpen: false,
    },
    theme: {
        mode: "light",
        primary:blue,
        secondary:red,
    },
    devMode: false,

}

export const reducers = createReducer(INITIAL_STATE, {
    [LayoutActionsTypes.SIDEBAR_TOGGLE]: (state: LayoutState) => {
        return {
            ...state, 
            sidebar: {
                isOpen: !state.sidebar.isOpen,
             },
        };
   },
    [LayoutActionsTypes.RIGHTBAR_TOGGLE]: (state: LayoutState) => ({
        ...state,
        rightbar: {
            isOpen: !state.rightbar?.isOpen ?? false,
        }
    }),
    [LayoutActionsTypes.THEME_TOGGLE]: (
        state: LayoutState,
        action: PayloadAction<ITheme>
     ) => ({
        ...state,
        theme: action.payload,
     }),
     [LayoutActionsTypes.DEVMODE_TOGGLE]: (
        state: LayoutState,
        action: PayloadAction<boolean>

     ) => {
        return {
            ...state, 
            devMode: action.payload,
        }
     }
})
