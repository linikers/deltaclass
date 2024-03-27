import { Theme } from "@mui/material"

export * from "./default"
export const fixFormControlLabel = ({palette, components}: Theme) => ({
    background:
        components?.MuiFormControl?.defaultProps?.variant != "filled"
        ? palette.background.default
        :undefined,
    backgroundImage:
    palette.mode == "dark" &&
    components?.MuiFormControl?.defaultProps?.variant != "filled"
    ? `linear-gradient(${palette.action.selected}, ${palette.action.selected})`
    : undefined
})