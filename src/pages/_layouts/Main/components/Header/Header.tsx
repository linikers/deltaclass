import { Menu as MenuIcon } from "@mui/icons-material"
import { AppBar, Avatar, Box, Grid, IconButton, Toolbar } from "@mui/material"


export const Header =() => {

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Grid>
                        <Grid>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Avatar>
                                
                            </Avatar>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}