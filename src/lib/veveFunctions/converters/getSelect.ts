import { ISelect } from "../../interfaces";

export const getSelect: Function = (text: string): ISelect => ({
    select: {name: text },
  });
