(() => ({
  name: 'MyButton',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  styleType: 'BUTTON',
  jsx: (() => {
    const { useText, Icon } = B; // every component has a B object
    const { buttonText, icon } = options; // every component has access top options object

    const buttonTextContent = useText(buttonText);

    const [isDisabled, setIsDisabled] = useState(false);

    // basic example of define function and triggerEvent
    // B.defineFunction('Disable', (msg) => setIsDisabled(true))

    // example of passing a something like a string
    // from the trigger event and passed here to the define function and use that variable
    B.defineFunction('Disable', (msg) => {
      setIsDisabled(true);
      console.log(msg);
    });

    const handleClick = () => {
      console.log('clickHandler');

      B.triggerEvent('onSuccess', 'on success triggered');
      // not useful but demonstrates that if you click, will trigger an on success interaction
      // and if an onsuccess interaction is set on the component, that interaction  function will happen
      // so as an example, an onSuccess event interaction is set on a button. it is triggered with a click
      // when an onsuccess is triggered, this button will trigger a disable component function
      // defined above.
    };

    return (
      <div className={classes.root}>
        <button
          onClick={handleClick}
          className={classes.button}
          disabled={isDisabled}
        >
          {buttonTextContent}
        </button>
      </div>
    );
  })(),

  // every component has a B object
  styles: (B) => (theme) => {
    const style = new B.Styling(theme); // style object has all kinds of helpers

    // returns classes object
    // you can use js way -> textAlign or css way with '' -> 'text-align'
    return {
      root: ({ style }) => {
        // console.log(style);

        return {
          ...style,

          'text-align': 'center',
        };
      },
      button: {
        background: 'transparent',
        outline: 'none',
        border: 'none',

        '&:hover': {
          // when function is passed to css rule, it takes in options object as well and then destructure what you need
          background: ({ options: { backgroundColor } }) =>
            style.getColor(backgroundColor),
          // use the style object getcolor function and pass selected bg color from options dropdown to dynamically set bg color
        },
      },
    };
  },
}))();
