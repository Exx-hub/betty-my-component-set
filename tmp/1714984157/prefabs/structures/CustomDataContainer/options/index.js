"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customDataContainerOptions = exports.categories = void 0;
const advanced_1 = require("../../advanced");
exports.categories = [
    {
        label: 'Advanced Options',
        expanded: false,
        members: ['dataComponentAttribute'],
    },
];
exports.customDataContainerOptions = {
    ...advanced_1.advanced('CustomDataContainer'),
};
