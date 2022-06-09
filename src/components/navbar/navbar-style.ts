export const navBarStyles = {
    backgroundColor: (theme: { palette: { mode: string } }) =>
      theme.palette.mode === "dark" ? "#fff" : "#1A2027",
    color: (theme: { palette: { mode: string } }) =>
      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      paddingLeft: 'calc(10% - 36px)',
      marginTop: '0px'
  };
  
  export const navbarLinkStyles ={
      textDecoration:"none",
      color:"inherit"
  }

  export const boxContainerStyle = {
     flexGrow: 1 ,
  }