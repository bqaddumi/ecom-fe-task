export const navBarStyles = {
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#fff' : '#1A2027',
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  paddingLeft: 'calc(10% - 36px)',
  marginTop: '0px',
};

export const navbarLinkStyles = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 700,
};

export const boxContainerStyle = {
  flexGrow: 1,
};

export const headerContainer = {
  width: 'calc(100vw - 55px)',
  display: 'flex',
  alignItems: 'center',
};

export const iconsContainer = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

export const iconStyle = {
  marginLeft: '15px',
};

export const navItemsContainer = {
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};

export const mobileNavContainer = {
  display: 'none',
  '@media only screen and (max-width: 600px)': {
    display: 'block',
  },
};
