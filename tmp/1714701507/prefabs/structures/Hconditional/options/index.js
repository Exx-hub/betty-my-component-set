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
    left: component_sdk_1.variable('Left', {
        value: [],
        configuration: {
            condition: component_sdk_1.showIf('type', 'EQ', 'singleRule'),
        },
    }),
    compare: component_sdk_1.option('CUSTOM', {
        label: 'Compare',
        value: 'eq',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                {
                    name: 'Equals',
                    value: 'eq',
                },
                {
                    name: 'Not equal',
                    value: 'neq',
                },
                {
                    name: 'Contains',
                    value: 'contains',
                },
                {
                    name: 'Does not contain',
                    value: 'notcontains',
                },
                {
                    name: 'Greater than',
                    value: 'gt',
                },
                {
                    name: 'Less than',
                    value: 'lt',
                },
                {
                    name: 'Greater than or equal to',
                    value: 'gteq',
                },
                {
                    name: 'Less than or equal to',
                    value: 'lteq',
                },
            ],
            condition: component_sdk_1.showIf('type', 'EQ', 'singleRule'),
        },
    }),
    right: component_sdk_1.variable('Right', {
        value: [],
        configuration: {
            condition: component_sdk_1.showIf('type', 'EQ', 'singleRule'),
        },
    }),
    ...advanced_1.advanced('Hconditional'),
};
