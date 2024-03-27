import AddIcon from "@mui/icons-material/Add"
import { Fab, Tooltip, Zoom } from "@mui/material"
export const Float = () => {
    return (
        <Zoom>
            <Tooltip title>
                <Fab>
                    <AddIcon />

                </Fab>
            </Tooltip>
        </Zoom>
    )
}