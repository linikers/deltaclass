import { ColorPartial } from "@mui/material/styles/createPalette";

export enum LayoutActionsTypes {
    SIDEBAR_TOGGLE = "@layout/SIDEBAR_TOGGLE",
    RIGHTBAR_TOGGLE = "@layout/RIGHTBAR_TOGGLE",
    THEME_TOGGLE = "@layout/THEME_TOGGLE",
    DEVMODE_TOGGLE = "@layout/DEVMODE"
}

export interface ITheme {
    mode: "dark" | "light" | "auto";
    primary?: ColorPartial;
    secondary?: ColorPartial;
    inputType?: "filled" | "outlined" | "standard";
}

export interface LayoutState {
    sidebar: {
        isOpen: boolean;
    };
    rightbar: {
        isOpen: boolean;
    }
    theme: ITheme;
    devMode?: boolean;
}