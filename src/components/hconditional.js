(() => ({
  name: 'Hconditional',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    console.log({ options, B });

    const { left, right, compare, visible: initVisibility } = options;
    const { useText, env } = B;
    const isDev = env === 'dev';
    const isEmpty = isDev && children.length === 0;

    const leftText = useText(left);
    const rightText = useText(right);

    const [leftValue, setLeftValue] = useState(leftText); // saves in state
    const [rightValue, setRightValue] = useState(rightText);
    const [visible, setVisible] = useState();
    const mounted = useRef(false);

    const canBeNumber = (value) => {
      return (
        value !== '' &&
        (typeof value === 'string' || typeof value === 'number') &&
        !isNaN(value)
      );
    };

    const evalCondition = () => {
      if (!initVisibility && leftValue === '' && rightValue === '') {
        return false;
      }

      const [leftParsed, rightParsed] =
        canBeNumber(leftValue) && canBeNumber(rightValue)
          ? [parseFloat(leftValue), parseFloat(rightValue)]
          : [leftValue.toString(), rightValue.toString()];

      switch (compare) {
        case 'neq':
          return leftParsed !== rightParsed;
        case 'contains':
          return leftParsed !== '' && rightParsed !== ''
            ? leftParsed.toString().indexOf(rightParsed.toString()) > -1
            : false;
        case 'notcontains':
          return leftParsed.toString().indexOf(rightParsed.toString()) < 0;
        case 'gt':
          return leftParsed > rightParsed;
        case 'lt':
          return leftParsed < rightParsed;
        case 'gteq':
          return leftParsed >= rightParsed;
        case 'lteq':
          return leftParsed <= rightParsed;
        default:
          return leftParsed === rightParsed;
      }
    };

    const checkCondition = evalCondition();

    console.log({ checkCondition });

    useEffect(() => {
      // console.log(`useEffect with setValue triggered ${leftText} ${rightText}`);
      setLeftValue(leftText);
      setRightValue(rightText);
    }, [leftText, rightText, setLeftValue, setRightValue]);

    useEffect(() => {
      setVisible(checkCondition);
    }, [checkCondition]);

    useEffect(() => {
      if (visible) {
        B.triggerEvent('isTrue', true); // not sure what this does!!
        // console.log('visible yes, triggerEvent isTrue = true');
      } else {
        B.triggerEvent('isFalse', false); // not sure what this does!!
        // console.log('visible no, triggerEvent isFalse = false');
      }
      if (mounted.current) {
        B.triggerEvent('onChange', visible);
        // console.log(`mounted yes, onChange = visible value ${visible}`);
      }
    }, [visible]);

    useEffect(() => {
      mounted.current = true;
      return () => {
        mounted.current = false;
      };
    }, []);

    // test custom interaction
    B.defineFunction('Alvin', () => console.log('alvin'));

    B.defineFunction('Hide', () => setVisible(false));
    B.defineFunction('Show', () => setVisible(true));

    B.defineFunction('Show/Hide', () => setVisible((s) => !s));
    B.defineFunction('Set Visibility', (value) => {
      if (typeof value === 'boolean') setVisible(value);
    });

    const getValue = (evt) => {
      const value = (evt && evt.target && evt.target.value) || evt;
      return `${value}`;
    };
    B.defineFunction('Set Left Value', (evt) => setLeftValue(getValue(evt)));
    B.defineFunction('Set Right Value', (evt) => setRightValue(getValue(evt)));

    // display nothing only if does not pass condition and not in page builder.
    // if in page builder, display even if condition pass
    if (!visible && !isDev) {
      return <></>;
    }

    return (
      <div
        className={includeStyling(
          children.length === 0 ? classes.root : undefined,
        )}
      >
        {isEmpty ? 'This is an empty conditional' : children}
      </div>
    );
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
