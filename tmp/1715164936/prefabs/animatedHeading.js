"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_sdk_1 = require("@betty-blocks/component-sdk");
const AnimatedHeading_1 = require("./structures/AnimatedHeading");
const attributes = {
    category: 'CONTENT',
    icon: component_sdk_1.Icon.TitleIcon,
    keywords: [''],
};
exports.default = component_sdk_1.prefab('AnimatedHeading', attributes, undefined, [AnimatedHeading_1.AnimatedHeading({})]);
