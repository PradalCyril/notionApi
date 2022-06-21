export const getMultiSelect = (texts) => ({
    multi_select: texts.map((text) => ({ name: text })),
});
