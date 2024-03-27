
import { defaultTheme } from "@/assets/themes";
import { FC } from "react";
import { useAppSelector } from "../../..";

export const Theme: FC = ({}) => {
    const theme = defaultTheme(useAppSelector)
}