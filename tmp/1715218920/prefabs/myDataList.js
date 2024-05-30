"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const MyDataList_1 = require("./structures/MyDataList");
const attributes = {
    category: 'DATA',
    icon: component_sdk_1.Icon.DataList,
    keywords: ['Data', 'container', 'datalist', 'object', 'record'],
};
exports.default = component_sdk_1.prefab('MyDataList', attributes, undefined, [MyDataList_1.MyDataList({})]);
