"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
const getText = (texts) => ({
    rich_text: texts.map((text) => ({
        text: { content: text },
    }))
});
exports.getText = getText;
