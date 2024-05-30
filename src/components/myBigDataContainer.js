(() => ({
  name: 'MyBigDataContainer',
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

    // double the limit - max is 400 records
    const DoubleTheLimit = (
      <GetAll modelId={model} skip={0} take={200}>
        {({ loading, error, data }) => {
          if (loading) {
            return <span>Loading...</span>;
          }

          if (error) {
            return <span>Something went wrong: {error.message}</span>;
          }
          const { totalCount, results } = data;

          return totalCount > results.length ? (
            <GetAll modelId={model} skip={results.length} take={200}>
              {({ loading, error, data: refetchedData }) => {
                if (loading) {
                  return <span>Loading...</span>;
                }

                if (error) {
                  return <span>Something went wrong: {error.message}</span>;
                }

                let mergedResults = [...results, ...refetchedData.results];

                return (
                  <div>
                    <div>
                      {mergedResults.map((row) => (
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
          ) : (
            <div>
              <div>
                {results.map((row) => (
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

    // recursive til last record is fetched
    const fetchRecords = (skip = 0, allResults = []) => {
      return (
        <GetAll modelId={model} skip={skip} take={200}>
          {({ loading, error, data }) => {
            if (loading) {
              return <span>Loading...</span>;
            }

            if (error) {
              return <span>Something went wrong: {error.message}</span>;
            }

            const { totalCount, results } = data;
            const mergedResults = [...allResults, ...results];

            if (totalCount > mergedResults.length) {
              // Recursive call to fetch more data
              return fetchRecords(mergedResults.length, mergedResults);
            } else {
              // All data fetched, render results
              return mergedResults.map((row) => (
                <ModelProvider key={row.id} value={row} id={model}>
                  <InteractionScope model={model}>
                    {(context) => <div>{children}</div>}
                  </InteractionScope>
                </ModelProvider>
              ));
            }
          }}
        </GetAll>
      );
    };

    const Wrapper = (
      <div className={isPristine ? classes.root : ''}>
        {isPristine ? 'Empty BIG DATA CONTAINER ' : children}
      </div>
    );

    return isDev ? Wrapper : <div>{fetchRecords(0)}</div>;
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
