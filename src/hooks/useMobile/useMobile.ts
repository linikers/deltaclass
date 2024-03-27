import { Breakpoint, Theme, useMediaQuery } from "@mui/material"

/**
 * @param {Breakpoint} size - default - sm 
 */


export function useMobile(size: Breakpoint = "sm"):boolean {
    return useMediaQuery((theme:Theme) => theme.breakpoints.down(size))
}