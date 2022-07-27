export const container = {
  display: 'flex',
  width: '465px',
  marginBottom: '20px',
  marginLeft: '20px',
  cursor: 'pointer',
  '@media only screen and (max-width: 600px)': {
    width: '100%',
  },
};

export const nameStyle = {
  fontWeight: '500',
};

export const cardContentStyle = {
  borderRight: '1px solid',
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#515151' : '#E0E0E0',
  display: 'flex',
  flexDirection: 'column',
  '@media only screen and (max-width: 600px)': {
    border: '0',
  },
};
