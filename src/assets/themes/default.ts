import { ITheme } from "@/store/modules/layout/types";
import { createTheme } from "@mui/material";
import { blueGrey, green, grey, lime, red } from "@mui/material/colors";


export const defaultTheme = ({
    primary, 
    secondary, 
    inputType, 
    mode: initMode,
}: ITheme) => {
    const darkOs = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = initMode =="auto" ? (darkOs ? "dark" : "light") : initMode;
    return createTheme({
        palette: {
            mode,
            primary: primary ?? (darkOs ? lime : green),
            secondary: secondary ?? (darkOs ? blueGrey: red),
            grey,
        },
        typography: {
            fontFamily: "Roboto",
        },
        components: {
            MuiTextField: {
                defaultProps: {
                    variant: inputType ?? "filled",
                    fullWidth: true,
                    size: "small",
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: "outlined",
                    color: "primary",
                },
            },
            MuiLinearProgress: {
                defaultProps: {
                    variant: "indeterminate",
                    color: "secondary",
                }
            },
            MuiTabs: {
                defaultProps: {
                    indicatorColor: "primary",
                    textColor: "primary",
                },
            },
            MuiDialog: {
                defaultProps: {
                    maxWidth: "md",
                    fullWidth: true,
                },
            },
            MuiSelect: {
                defaultProps: {
                    variant: inputType ?? "filled",
                    fullWidth: true,
                    size: "small",
                },
            },
            MuiFormControl: {
                defaultProps: {
                    variant: inputType ?? "filled",
                    fullWidth: true,
                    size: "small",
                }
            }
        }
    })
}