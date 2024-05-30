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
    buttonText: component_sdk_1.variable('Button text', { value: ['Button'] }),
    icon: component_sdk_1.icon('Icon', { value: 'None' }),
    ...advanced_1.advanced('MyButton'),
};
