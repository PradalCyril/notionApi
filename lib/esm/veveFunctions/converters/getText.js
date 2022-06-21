export const getText = (texts) => ({
    rich_text: texts.map((text) => ({
        text: { content: text },
    }))
});
