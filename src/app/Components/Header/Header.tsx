import { AppBar, Button, Toolbar, Box, Avatar, Grid, IconButton, Typography } from "@mui/material";

import { FC } from "react";
import { Menu as MenuIcon} from "@mui/icons-material";
import Image from "next/image";

import * as styles from "./styles"
import { useMobile } from "@/hooks/useMobile";


export const Header: FC<{buttons: React.ReactNode[]}> = ({buttons}) => {

    //const isMd = useMobile("md");
    //const dispatch 

  return (
      <Box sx={styles.root}>
        <AppBar 
        position="fixed" 
        variant="outlined" 
        elevation={0} 
        color="inherit"
        >
            <Toolbar>
                <Grid container wrap="nowrap" alignItems="center">
                    <Grid item>
                        <IconButton 
                            color="inherit" 
                            edge="start" 
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Image src='/images/logo256.png' alt="Delta Software" width="64" height="64" />
                    </Grid> 
                    <Grid item xs zeroMinWidth>
                        <Typography variant="h6" noWrap>{'Aluno Online'}</Typography>

                    </Grid>
                    <Typography variant="caption" noWrap component='p'>Delta software</Typography>
                </Grid>
                

             
            </Toolbar>
        </AppBar>
      </Box>
  );
}
