import {
  ThemeColor,
  color,
  font,
  modelAndRelation,
  number,
  option,
  variable,
} from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const animatedHeadingOptions = {
  content: variable('Content', {
    value: ['Animated Heading'],
    configuration: { as: 'MULTILINE' },
  }),

  type: font('Text style', { value: ['Title4'] }),

  textColor: color('Text color', {
    value: ThemeColor.BLACK,
  }),

  fontWeight: option('CUSTOM', {
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

  effect: option('CUSTOM', {
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

  duration: number('Duration (ms)', {
    value: 1000,
  }),

  delay: number('Delay (ms)', {
    value: 0,
  }),

  model: modelAndRelation('Model', { value: '' }),

  ...advanced('AnimatedHeading'),
};
