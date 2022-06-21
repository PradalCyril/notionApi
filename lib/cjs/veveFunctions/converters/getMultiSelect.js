"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMultiSelect = void 0;
const getMultiSelect = (texts) => ({
    multi_select: texts.map((text) => ({ name: text })),
});
exports.getMultiSelect = getMultiSelect;
