import { ITitle, StringArrayRequest } from "../../interfaces";

export const getTitle: Function = (texts: StringArrayRequest): ITitle => ({
    title: texts.map((text) => ({
      text: { content: text },
    })),
  });
