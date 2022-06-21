import { EColors } from "../../enums";

export type ISelectOption = {
    id?: string;
    name: string;
    color?: EColors;
} | {
    id: string;
    name?: string;
    color?: EColors;
}