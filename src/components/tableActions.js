(() => ({
  name: 'TableActions',
  type: 'CONTENT_COMPONENT',
  allowedTypes: ['CONTENT_COMPONENT'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const {
      Button,
      Grow,
      IconButton,
      Popper,
      Paper,
      ClickAwayListener,
      MenuList,
    } = window.MaterialUI.Core;

    const { env, Icon, Children } = B;
    const { isDropdownVisible, outerSpacing, size, disabled } = options;

    const isDev = env === 'dev';
    const isEmpty = children.length === 0;

    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonRef = useRef(null);

    useEffect(() => {
      if (isDev && anchorEl) {
        setIsOpen(true);
      }

      let ref = buttonRef.current;
      if (ref && ref.parentElement.classList.contains('MuiListItem-root')) {
        ref = ref.parentElement;
      }

      setAnchorEl(ref);
    }, []);

    const handleToggle = () => {
      if (isDev) return;

      setIsOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (e) => {
      if (isDev) {
        return;
      }

      setIsOpen(false);
    };

    const IconComponent = (
      <IconButton
        className={classes.dots}
        onClick={handleToggle}
        ref={buttonRef}
        disabled={disabled}
        size={size}
      >
        <Icon name="MoreHoriz" />
      </IconButton>
    );

    const MenuComp = (
      <div style={{ display: 'inline-block' }} data-component={'Menu'}>
        {IconComponent}
        {!isDev ? (
          <Popper
            className={classes.popper}
            open={isOpen}
            anchorEl={anchorEl}
            role={undefined}
            disablePortal={false}
            placement="bottom-start"
          >
            <Grow in={isOpen} style={{ transformOrigin: '0 0 0' }}>
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={isOpen} className={classes.list}>
                    {isEmpty ? (
                      <span className={classes.emptyText}>-Empty Menu-</span>
                    ) : (
                      <Children onClick={handleClose}>{children}</Children>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          </Popper>
        ) : (
          isDropdownVisible && (
            <Paper
              className={classes.paper}
              style={{
                transform: 'translate(0, 0)',
                willChange: 'transform',
              }}
            >
              <MenuList autoFocusItem={isOpen} className={classes.list}>
                {isEmpty ? (
                  <span className={classes.emptyText}>Add a button</span>
                ) : (
                  children
                )}
              </MenuList>
            </Paper>
          )
        )}
      </div>
    );

    return !isDev ? (
      MenuComp
    ) : (
      <div className={classes.wrapper}>{MenuComp}</div>
    );
  })(),
  styles: (B) => (t) => {
    const { env, mediaMinWidth, Styling } = B;
    const style = new Styling(t);

    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);

    const isDev = env === 'dev';

    return {
      root: {},
      dots: {
        cursor: 'pointer',
        // color: ['#333', '!important'],

        color: ({ options: { disabled } }) => [
          !disabled ? ['#333', '!important'] : 'rgba(0, 0, 0, 0.26)',
          '!important',
        ],

        ...(isDev && {
          pointerEvents: ['unset', '!important'],
        }),
      },
      wrapper: {
        display: 'inline-block',
        width: 'auto',
        minHeight: '1rem',

        marginTop: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[0]),
        marginRight: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[1]),
        marginBottom: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[2]),
        marginLeft: ({ options: { outerSpacing } }) =>
          getSpacing(outerSpacing[3]),

        '& button': {
          pointerEvents: 'none',
        },
      },
      popper: {
        zIndex: 3500,
      },
      list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        width: '100%',
      },
      emptyText: {
        color: 'lightgray',
      },
      paper: {
        padding: '0 0.4rem',
        minWidth: '5rem',
        minHeight: '2rem',
        backgroundColor: ({ options: { menuColor } }) => [
          style.getColor(menuColor),
          '!important',
        ],
        // backgroundColor: ['white', '!important'],
        ...(isDev && {
          position: 'relative',
          pointerEvents: ['unset', '!important'],
          zIndex: 9,
        }),
      },
    };
  },
}))();
