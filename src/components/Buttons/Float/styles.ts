import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const root: SxProps<Theme> = {
    right: (theme) =>theme.spacing(5),
    bottom: (theme) => theme.spacing(4),
    position: "fixed",
}