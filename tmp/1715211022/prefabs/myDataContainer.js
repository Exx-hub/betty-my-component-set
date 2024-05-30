"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const MyDataContainer_1 = require("./structures/MyDataContainer");
const attributes = {
    category: 'DATA',
    icon: component_sdk_1.Icon.DataContainer,
    keywords: ['Data', 'container', 'datacontainer', 'object', 'record'],
};
exports.default = component_sdk_1.prefab('MyDataContainer', attributes, undefined, [
    MyDataContainer_1.MyDataContainer({}),
]);
