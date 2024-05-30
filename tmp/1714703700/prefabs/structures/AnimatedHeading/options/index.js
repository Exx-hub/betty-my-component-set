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
    effect: component_sdk_1.option('CUSTOM', {
        label: 'Effect',
        value: 'Fade',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: 'Fade', value: 'Fade' },
                { name: 'Bounce', value: 'Bounce' },
                { name: 'Flip', value: 'Flip' },
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
    direction: component_sdk_1.option('CUSTOM', {
        label: 'Direction (if applicable)',
        value: 'down',
        configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
                { name: 'down', value: 'down' },
                { name: 'up', value: 'up' },
                { name: 'left', value: 'left' },
                { name: 'right', value: 'right' },
            ],
        },
    }),
    // visible: toggle('Cascade', {
    //   value: true,
    //   configuration: {
    //     as: 'VISIBILITY',
    //   },
    // }),
    ...advanced_1.advanced('AnimatedHeading'),
};
