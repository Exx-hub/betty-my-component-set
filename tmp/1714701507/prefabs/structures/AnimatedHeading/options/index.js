"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animatedHeadingOptions = exports.categories = void 0;
const component_sdk_1 = require("@betty-blocks/component-sdk");
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.animatedHeadingOptions = {
    content: component_sdk_1.variable('Content', {
        value: [],
        configuration: { as: 'MULTILINE' },
    }),
    fontWeight: component_sdk_1.option('CUSTOM', {
        label: 'Font weight',
        value: '400',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: '100', value: '100' },
                { name: '200', value: '200' },
                { name: '300', value: '300' },
                { name: '400', value: '400' },
                { name: '500', value: '500' },
                { name: '600', value: '600' },
                { name: '700', value: '700' },
                { name: '800', value: '800' },
                { name: '900', value: '900' },
            ],
        },
    }),
    ...advanced_1.advanced('AnimatedHeading'),
};
