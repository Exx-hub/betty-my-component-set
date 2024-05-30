"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const Hconditional_1 = require("./structures/Hconditional");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.TitleIcon,
    keywords: [''],
};
exports.default = component_sdk_1.prefab('Hconditional', attributes, undefined, [Hconditional_1.Hconditional({})]);
