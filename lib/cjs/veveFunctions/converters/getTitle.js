"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitle = void 0;
const getTitle = (texts) => ({
    title: texts.map((text) => ({
        text: { content: text },
    })),
});
exports.getTitle = getTitle;
