export const imageStyle = {
  position: 'relative',
  width: '130px',
  border: '1px solid',
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#515151' : '#E0E0E0',
  marginBottom: '5px',
  padding: '3px',
  cursor: 'pointer',
};

export const containerDesktop = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  '@media only screen and (max-width: 600px)': {
    flexDirection: 'row',
  },
};

export const selectedImage = {
  borderColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#fff' : '#000',
};
