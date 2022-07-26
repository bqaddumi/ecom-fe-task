export const summaryContainerStyle = {
  color: '#B07474',
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#282e36' : '#f5f5f5',
};

export const cellTitleStyle = {
  textDecoration: 'none',
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#666666',
};
export const summaryCellStyle = {
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#737373',
  fontWeight: 'bold',
  fontSize: '1rem',
};
export const checkoutButtonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

export const checkoutButtonStyle = {
  padding: '13px 21px',
  color: '#fff',
  background: '#AB1D2B',
  marginTop: '45px',
  borderRadius: '0',
  '&:hover': {
    color: '#fff',
    background: '#AB1D2B',
  },
};

export const noBorderStyle = {
  border: 0,
};

export const multipleAddressStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '45px',
  cursor: 'pointer',
  paddingBottom: '20px',
};
