import { filter, model, variable } from '@betty-blocks/component-sdk';
import { advanced } from '../../advanced';

export const categories = [
  {
    label: 'Advanced Options',
    expanded: false,
    members: ['dataComponentAttribute'],
  },
];

export const fetchRecordsOptions = {
  model: model('Model', {
    value: '',
    configuration: {},
  }),

  filter: filter('Filter', {
    value: {},
    configuration: {
      dependsOn: 'model',
    },
  }),

  ...advanced('FetchRecords'),
};
