"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myButtonOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.myButtonOptions = {
    content: component_sdk_1.variable('Content', {
        value: ['MY BUTTON'],
        configuration: { as: 'MULTILINE' },
    }),
    ...advanced_1.advanced('MyButton'),
};
