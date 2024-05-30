(() => ({
  name: 'MyDataChart',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  dependencies: [
    {
      label: 'ChartJs',
      package: 'npm:chart.js@4.4.2',
      imports: ['*'],
    },
    {
      label: 'ReactChartJs2',
      package: 'npm:react-chartjs-2@5.2.0',
      imports: ['*'],
    },
  ],
  jsx: (() => {
    console.log(dependencies);

    const { env } = B;
    const { model, filter } = options;

    const isEmpty = children.length === 0;
    const isDev = env === 'dev';
    const isPristine = isEmpty && isDev;

    return <div>hello</div>;
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
