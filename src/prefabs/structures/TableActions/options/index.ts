import {
  ThemeColor,
  color,
  option,
  sizes,
  toggle,
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

export const tableActionsOptions = {
  isDropdownVisible: toggle('Toggle menu', {
    value: true,
    configuration: { as: 'VISIBILITY' },
  }),

  outerSpacing: sizes('Table Actions Button Outer space', {
    value: ['0rem', '0rem', '0rem', '0rem'],
  }),

  size: option('CUSTOM', {
    value: 'small',
    label: 'Icon Size',
    configuration: {
      as: 'BUTTONGROUP',
      dataType: 'string',
      allowedInput: [
        { name: 'Medium', value: 'medium' },
        { name: 'Small', value: 'small' },
      ],
    },
  }),

  menuColor: color('Menu color', { value: ThemeColor.WHITE }),

  disabled: toggle('Disabled', { value: false }),

  ...advanced('TableActions'),
};
