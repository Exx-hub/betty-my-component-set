import { prefab, Icon } from '@betty-blocks/component-sdk';

import { MyDataChart } from './structures/MyDataChart';

const attributes = {
  category: 'DATA',
  icon: Icon.DataTable,
  keywords: ['Data', 'container', 'datatable', 'collection', 'Data chart'],
};

export default prefab('MyDataChart', attributes, undefined, [MyDataChart({})]);
