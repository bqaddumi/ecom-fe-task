export const titleStyle ={
    textDecoration:"none",
    fontWeight: "bold",
    color: (theme: { palette: { mode: string } }) =>
    theme.palette.mode === "dark" ? "#f1f1f1" : "#1D2530",
}

export const containerStyle = {
    paddingLeft: '10%'
}