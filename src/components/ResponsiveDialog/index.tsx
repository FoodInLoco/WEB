import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
interface IDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string
  body?: string
  clickFunction: () => void;
}
export function ResponsiveDialog({ open = false, onClose, title = 'TITULO', body = "Corpo", clickFunction }: IDialogProps) {
  const theme = useTheme();
  const [show, setShow] = React.useState(open)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Dialog
      open={show}
      onClose={() => {
        setShow(false);
        onClose()
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="responsive-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={clickFunction}>
          Confirmar
        </Button>
        <Button onClick={onClose} autoFocus>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
