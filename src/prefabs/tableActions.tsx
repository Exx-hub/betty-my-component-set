import { prefab, Icon } from '@betty-blocks/component-sdk';

import { TableActions } from './structures/TableActions';

const attributes = {
  category: 'BUTTON',
  icon: Icon.ButtonGroupIcon,
  keywords: ['menu', 'item', 'menuitem', 'dropdown item'],
};

export default prefab('TableActions', attributes, undefined, [
  TableActions({}),
]);
