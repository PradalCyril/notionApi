import { EColors } from "../../enums";
export declare type ISelectOption = {
    id?: string;
    name: string;
    color?: EColors;
} | {
    id: string;
    name?: string;
    color?: EColors;
};
