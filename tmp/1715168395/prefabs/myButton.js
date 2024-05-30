"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const MyButton_1 = require("./structures/MyButton");
const attributes = {
    icon: component_sdk_1.Icon.ButtonIcon,
    category: 'BUTTON',
    keywords: ['Button'],
};
exports.default = component_sdk_1.prefab('MyButton', attributes, undefined, [MyButton_1.MyButton({})]);
