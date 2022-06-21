import { IRichText, StringArrayRequest } from "../../interfaces";

export const getText: Function = (texts: StringArrayRequest):IRichText => ({
    rich_text: texts.map((text) => ({
        text: { content: text },
      }))
})