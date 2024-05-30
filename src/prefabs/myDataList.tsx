import { prefab, Icon } from '@betty-blocks/component-sdk';

import { MyDataList } from './structures/MyDataList';

const attributes = {
  category: 'DATA',
  icon: Icon.DataList,
  keywords: ['Data', 'list', 'datalist', 'object', 'collection'],
};

export default prefab('MyDataList', attributes, undefined, [MyDataList({})]);
