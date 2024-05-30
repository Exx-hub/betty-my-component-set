import { prefab, Icon } from '@betty-blocks/component-sdk';

import { MyButton } from './structures/MyButton';

const attributes = {
  icon: Icon.ButtonIcon,
  category: 'BUTTON',
  keywords: ['Button'],
};

export default prefab('MyButton', attributes, undefined, [MyButton({})]);
