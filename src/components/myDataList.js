(() => ({
  name: 'MyDataList',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { ModelProvider, InteractionScope, useFilter, env, GetAll } = B;
    const { model, filter } = options;

    const where = useFilter(filter);

    const isEmpty = children.length === 0;
    const isDev = env === 'dev';
    const isPristine = isEmpty && isDev;

    const ModelFetched = (
      <GetAll modelId={model} skip={0} take={50}>
        {({ loading, error, data, refetch }) => {
          if (loading) {
            return <span>Loading...</span>;
          }

          if (error) {
            return <span>Something went wrong: {error.message}</span>;
          }
          const { totalCount, results } = data;

          // if fetching is successful, automatically triggers onSuccess interaction
          // so if an onSuccess interaction is set on this component, it will be triggered
          // triggers onSuccess interaction from the code if set here, like async event?
          // unlike click interaction for example, that happens on the page
          B.triggerEvent('onSuccess', data);

          return (
            <div>
              <p>There are {totalCount} records.</p>
              <div>
                {results?.map((row) => (
                  <ModelProvider key={row.id} value={row} id={model}>
                    <InteractionScope model={model}>
                      {(context) => <div>{children}</div>}
                    </InteractionScope>
                  </ModelProvider>
                ))}
              </div>
            </div>
          );
        }}
      </GetAll>
    );

    const Wrapper = (
      <div className={isPristine ? classes.root : ''}>
        {isPristine ? 'Empty DATALIST ' : children}
      </div>
    );

    return isDev ? Wrapper : <div>{ModelFetched}</div>;
  })(),
  styles: () => () => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '2.5rem',
      fontSize: '0.75rem',
      color: 'black',
      textTransform: 'uppercase',
      borderWidth: '0.0625rem',
      borderColor: 'lightgray',
      borderStyle: 'dashed',
      backgroundColor: 'beige',
    },
  }),
}))();
