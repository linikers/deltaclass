import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const iosTheme = createTheme({
    palette: {
        primary: {
            main: "#000",
            contrastText: "#fff",
        }
    }
})

export const googleTheme = createTheme({
    palette: {primary: blue}
})