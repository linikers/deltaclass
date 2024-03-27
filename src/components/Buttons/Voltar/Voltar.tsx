import { Button } from "@mui/material"

export interface IBtnVoltarProps {
    label?: string;
    size?: "small" | "medium" | "large";
    redir?: string;
    fab?: boolean;
}

export const Voltar = ({label, size, redir, fab = false}) => {

    return (
        <Button>
            {label || "Cancelar"}
        </Button>
    )
}