(() => ({
  name: 'AnimatedHeading',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  dependencies: [
    {
      label: 'Reveal',
      package: 'npm:react-awesome-reveal@4.2.8',
      imports: ['*'],
    },
    {
      label: 'Emotion',
      package: 'npm:@emotion/react@11.11.4',
      imports: ['*'],
    },
  ],
  jsx: (() => {
    const { Reveal } = dependencies;
    const { Fade, Bounce, Slide, Zoom } = Reveal;
    const { useText } = B;
    const { content, effect, duration, delay, model } = options;

    // console.log({ model });

    const heading = useText(content);

    const HeadingComponent = ({
      headingContent,
      className,
      duration,
      delay,
    }) => {
      const effectProps = { headingContent, className, duration, delay };

      switch (effect) {
        case 'Fade':
          return <Fade {...effectProps}>{headingContent}</Fade>;
        case 'Bounce':
          return <Bounce {...effectProps}>{headingContent}</Bounce>;
        case 'Typewriter':
          return (
            <Fade cascade {...effectProps}>
              {headingContent}
            </Fade>
          );
        case 'Slide':
          return <Slide {...effectProps}>{headingContent}</Slide>;
        case 'Zoom':
          return <Zoom {...effectProps}>{headingContent}</Zoom>;
        default:
          return (
            <Fade className={className} duration={1000} delay={1000}>
              {headingContent}
            </Fade>
          );
      }
    };

    // what does this do? this is for testing to learn what it does
    const handleClick = (event) => {
      B.triggerEvent('Show/Hide', event);
    };

    return (
      <div className={classes.root} onClick={handleClick}>
        {heading ? (
          <HeadingComponent
            headingContent={heading}
            className={classes.heading}
            duration={duration}
            delay={delay}
          />
        ) : (
          <div className={classes.emptyText}>Empty Animated Heading</div>
        )}
      </div>
    );
  })(),
  styles: (B) => (t) => {
    const { Styling } = B;
    const style = new Styling(t);

    // console.log({ B, Styling, style });

    return {
      root: {
        overflow: 'hidden',
      },
      heading: {
        color: ({ options: { textColor, type } }) => {
          return textColor === '[Inherit]'
            ? style.getFontColor(type)
            : style.getColor(textColor);
        },
        fontWeight: ({ options }) => {
          return options.fontWeight === '[Inherit]'
            ? style.getFontWeight(options.type)
            : options.fontWeight;
        },

        fontFamily: ({ options: { type } }) =>
          `var(--text-fontFamily-${type.toString().toLowerCase()})`,
        fontSize: ({ options: { type } }) =>
          `var(--text-fontSize-${type.toString().toLowerCase()})`,
        fontStyle: ({ options: { type } }) =>
          `var(--text-fontStyle-${type.toString().toLowerCase()})`,
      },
      emptyText: {
        color: 'lightgray',
        fontWeight: ({ options }) => {
          return options.fontWeight === '[Inherit]'
            ? style.getFontWeight(options.type)
            : options.fontWeight;
        },

        fontFamily: ({ options: { type } }) =>
          `var(--text-fontFamily-${type.toString().toLowerCase()})`,
        fontSize: ({ options: { type } }) =>
          `var(--text-fontSize-${type.toString().toLowerCase()})`,
        fontStyle: ({ options: { type } }) =>
          `var(--text-fontStyle-${type.toString().toLowerCase()})`,
      },
    };
  },
}))();
