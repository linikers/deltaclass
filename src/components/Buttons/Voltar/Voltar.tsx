import { ArrowLeft } from "@mui/icons-material";
import { Button, Fab } from "@mui/material"

export interface IBtnVoltarProps {
    label?: string;
    size?: "small" | "medium" | "large";
    redir?: string;
    fab?: boolean;
}

export const Voltar = ({
    label, 
    size, 
    redir, 
    fab = false,
}:IBtnVoltarProps): JSX.Element => {

    return fab ? (
        <Fab
            size={size || "medium"}
            color="secondary"
        >
            <ArrowLeft />
        </Fab>
    ) :(
        <Button>
            {label || "Cancelar"}
        </Button>
    )
}