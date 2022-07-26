export const productsContainer = {
  width: 'calc(100% - 40px)',
  minHeight: '400px',
  margin: '20px 20px',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '70px',
  flexWrap: 'wrap',
  '@media only screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
};

export const pageButtonContainer = {
  display: 'flex',
  justifyContent: 'center',
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
};
