"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const CustomDataContainer_1 = require("./structures/CustomDataContainer");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.TitleIcon,
    keywords: [''],
};
exports.default = component_sdk_1.prefab('CustomDataContainer', attributes, undefined, [CustomDataContainer_1.CustomDataContainer({})]);
