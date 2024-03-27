import { ThemeProvider } from "@mui/material"
import { useAppSelector } from "."
import { defaultTheme } from "@/assets/themes/default"
import { FC, ReactNode } from "react"

interface ThemeProps { 
    children?: ReactNode;
}
export const Theme: FC<ThemeProps>= ({ children }) => {
    const theme = defaultTheme(useAppSelector((state) =>state.layout.theme))
    return<ThemeProvider theme={theme}>{children}</ThemeProvider>
}