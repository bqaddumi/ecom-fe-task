export const navbarLinkStyles = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 700,
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

export const cartLinkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
};

export const titleStyle = {
  textDecoration: 'none',
  fontWeight: '800',
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#f1f1f1' : '#1D2530',
};

export const balanceStyle = {
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#666666',
};
