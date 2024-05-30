import { prefab, Icon } from '@betty-blocks/component-sdk';

import { MyBigDataContainer } from './structures/MyBigDataContainer';

const attributes = {
  category: 'DATA',
  icon: Icon.DataContainer,
  keywords: ['Data', 'container', 'datacontainer', 'object', 'record'],
};

export default prefab('MyBigDataContainer', attributes, undefined, [
  MyBigDataContainer({}),
]);
