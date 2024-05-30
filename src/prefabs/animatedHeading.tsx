import { prefab, Icon } from '@betty-blocks/component-sdk';

import { AnimatedHeading } from './structures/AnimatedHeading';

const attributes = {
  category: 'CONTENT',
  icon: Icon.TitleIcon,
  keywords: [''],
};

export default prefab('AnimatedHeading', attributes, undefined, [AnimatedHeading({})]);
