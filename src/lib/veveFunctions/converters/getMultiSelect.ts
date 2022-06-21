import { IMultiSelect, StringArrayRequest } from "../../interfaces";

export const getMultiSelect: Function = (texts: StringArrayRequest): IMultiSelect => ({
    multi_select: texts.map((text) => ({ name: text })),
  });