import {  SxProps, Theme } from "@mui/material";


export const root : SxProps<Theme> ={
    display: 'flex',
}
export const appBar = ({more =0}: {more?: number}): SxProps<Theme> => ({
    zIndex: (theme) => theme.zIndex.drawer +  more,
});
export const title: SxProps<Theme> = {
    flexGrow: 1,
};
export const divider: SxProps<Theme> = {
    height: (theme) => theme.spacing(3),
    margin: (theme) => theme.spacing(0.5),
};

export const toolbar: SxProps<Theme> = {
    paddingLeft: 0,
}