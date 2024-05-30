"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const FetchRecords_1 = require("./structures/FetchRecords");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.TitleIcon,
    keywords: [''],
};
exports.default = component_sdk_1.prefab('FetchRecords', attributes, undefined, [FetchRecords_1.FetchRecords({})]);
