"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const CustomDataContainer_1 = require("./structures/CustomDataContainer");
const attributes = {
    category: 'DATA',
    icon: component_sdk_1.Icon.DataContainer,
    keywords: ['Data', 'container', 'datacontainer', 'object', 'record'],
};
exports.default = component_sdk_1.prefab('CustomDataContainer', attributes, undefined, [
    CustomDataContainer_1.CustomDataContainer({}),
]);
