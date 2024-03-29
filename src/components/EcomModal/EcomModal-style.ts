export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === 'dark' ? '#fff' : '#000',
};
