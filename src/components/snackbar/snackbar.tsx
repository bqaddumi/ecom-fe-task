import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CustomizedSnackbarsProps = {
  severity: AlertColor;
  message: string;
  open?: false
};

export default function CustomizedSnackbars(props: CustomizedSnackbarsProps) {
  const [open, setOpen] = React.useState(false);
  const { message, severity } = props;

  React.useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }, [message, severity]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open && !!message} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={props.severity}
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
