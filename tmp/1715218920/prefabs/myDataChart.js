"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const MyDataChart_1 = require("./structures/MyDataChart");
const attributes = {
    category: 'DATA',
    icon: component_sdk_1.Icon.DataContainer,
    keywords: ['Data', 'container', 'datacontainer', 'object', 'record'],
};
exports.default = component_sdk_1.prefab('MyDataChart', attributes, undefined, [MyDataChart_1.MyDataChart({})]);
