export const container = {
  width: '100%',
  margin: '30px 0% 0 10%',
  '@media only screen and (max-width: 600px)': {
    width: 'calc(100% - 40px)',
    margin: '30px 20px',
  },
};

export const previewContainer = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  '@media only screen and (max-width: 600px)': {
    flexDirection: 'column',
  },
};

export const toggleProductscontainer = {
  marginLeft: 'auto',
  width: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginRight: '50px',
  '@media only screen and (max-width: 600px)': {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export const chevronContainer = {
  color: '#676767',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  marginBottom: '10px',
  boxShadow: '6px 6px 10px #E7E7E7',
  cursor: 'pointer',
};

export const imageStyle = {
  width: '500px',
  margin: '20px 20px',
  '@media only screen and (max-width: 600px)': {
    width: '100%',
    margin: '0',
  },
};
