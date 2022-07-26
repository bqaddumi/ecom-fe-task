export const mainContainer = {
  backgroundColor: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#fff' : '#1A2027',
  height: '100vh',
};

export const bodyScollableBoxstyle = {
  height: 'calc(100vh - 130px)',
  overflowY: 'scroll',
};

export const listItem = {
  padding: '0',
};
