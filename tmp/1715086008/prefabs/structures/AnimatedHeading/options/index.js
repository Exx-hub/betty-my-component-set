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
        value: ['Animated Heading'],
        configuration: { as: 'MULTILINE' },
    }),
    type: component_sdk_1.font('Text style', { value: ['Title2'] }),
    textColor: component_sdk_1.color('Text color', {
        value: component_sdk_1.ThemeColor.BLACK,
    }),
    fontWeight: component_sdk_1.option('CUSTOM', {
        label: 'Font weight',
        value: '[Inherit]',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: '[Theme Weight]', value: '[Inherit]' },
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
    effect: component_sdk_1.option('CUSTOM', {
        label: 'Effect',
        value: 'Fade',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: 'Fade', value: 'Fade' },
                { name: 'Bounce', value: 'Bounce' },
                { name: 'Typewriter', value: 'Typewriter' },
                { name: 'Slide', value: 'Slide' },
                { name: 'Zoom', value: 'Zoom' },
            ],
        },
    }),
    duration: component_sdk_1.number('Duration (ms)', {
        value: 1000,
    }),
    delay: component_sdk_1.number('Delay (ms)', {
        value: 0,
    }),
    model: component_sdk_1.modelAndRelation('Model', { value: '' }),
    ...advanced_1.advanced('AnimatedHeading'),
};
