import { createAction } from "@reduxjs/toolkit";
import { ITheme, LayoutActionsTypes } from "./types";

export const toggleSidebar = createAction<void>( LayoutActionsTypes.SIDEBAR_TOGGLE);

export const toggleRightbar = createAction<void>( LayoutActionsTypes.RIGHTBAR_TOGGLE);

export const toggleTheme = createAction<ITheme>( LayoutActionsTypes.THEME_TOGGLE);

export const toggleDevMode = createAction<void> (LayoutActionsTypes.DEVMODE_TOGGLE)