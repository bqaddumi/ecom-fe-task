export const titleStyle = {
  fontWeight: '500',
  marginTop: '30px',
  marginBottom: '30px',
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#f1f1f1' : '#37353A',
};

export const boxStyle = {
  width: '100%',
  paddingLeft: '10%',
  paddingRight: '10%',
  '@media only screen and (max-width: 600px)': {
    width: '100%',
    padding: '0',
  },
};

export const summaryStyle = {
  padding: '17px',
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#f1f1f1' : '#f5f5f5',
};

export const sectionContainer = {
  display: 'flex',
  '@media only screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
};
export const productsTableContainer = {
  width: '58%',
  paddingLeft: '48px',
  paddingTop: '8px',
  '@media only screen and (max-width: 600px)': {
    width: '100vw',
    overflowX: 'scroll',
    padding: '0',
  },
};
export const cartSummaryContainer = {
  width: '52%',
  paddingLeft: '48px',
  paddingTop: '8px',
  '@media only screen and (max-width: 600px)': {
    width: '100vw',
    padding: '0',
  },
};
