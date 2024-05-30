import { prefab, Icon } from '@betty-blocks/component-sdk';

import { Hconditional } from './structures/Hconditional';

const attributes = {
  category: 'LOGIC',
  icon: Icon.ConditionalIcon,
  keywords: [''],
};

export default prefab('Hconditional', attributes, undefined, [Hconditional({})]);
