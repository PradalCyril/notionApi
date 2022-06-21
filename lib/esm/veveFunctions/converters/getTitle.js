export const getTitle = (texts) => ({
    title: texts.map((text) => ({
        text: { content: text },
    })),
});
