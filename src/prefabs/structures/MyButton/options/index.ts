import { variable, icon, color, ThemeColor } from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const myButtonOptions = {
  buttonText: variable('Button text', { value: ['Button'] }),
  icon: icon('Icon', { value: 'None' }),

  backgroundColor: color('Background color', {
    value: ThemeColor.BLACK,
  }),

  ...advanced('MyButton'),
};
