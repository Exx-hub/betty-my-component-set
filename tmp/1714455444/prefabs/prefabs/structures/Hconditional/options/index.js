"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hconditionalOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.hconditionalOptions = {
    visible: component_sdk_1.toggle('Initial visibility', {
        value: true,
        configuration: {
            as: 'VISIBILITY',
            condition: component_sdk_1.showIf('type', 'EQ', 'singleRule'),
        },
    }),
    ...advanced_1.advanced('Hconditional'),
};
