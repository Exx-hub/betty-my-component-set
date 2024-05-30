"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const FetchRecords_1 = require("./structures/FetchRecords");
const attributes = {
    category: 'DATA',
    icon: component_sdk_1.Icon.DataContainer,
    keywords: ['Data', 'container', 'datacontainer', 'object', 'record'],
};
exports.default = component_sdk_1.prefab('FetchRecords', attributes, undefined, [
    FetchRecords_1.FetchRecords({}),
]);
