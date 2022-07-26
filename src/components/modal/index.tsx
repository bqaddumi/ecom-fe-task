import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CartItemType } from '../../types';
import { style } from './modal-style';

interface EcomModalProps {
  isOpen?: boolean;
  isCancelClicked: () => void;
  isYesClicked: () => void;
  handleCloseModal: () => void;
  product: CartItemType;
}

const EcomModal: React.FC<EcomModalProps> = (props: EcomModalProps) => {
  const {
    isOpen = false,
    isYesClicked,
    isCancelClicked,
    handleCloseModal,
    product,
  } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    handleCloseModal();
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <Typography variant="h6" color={'error'} component="span">
            Delete
          </Typography>{' '}
          {product.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete{' '}
          <Typography component={'span'} color={'error'}>
            {product.quantity}
          </Typography>{' '}
          items of{' '}
          <Typography component={'span'} color={'error'}>
            {product.name}
          </Typography>
          ?
        </Typography>
        <Button onClick={isYesClicked}>yes</Button>
        <Button onClick={isCancelClicked}>cancel</Button>
      </Box>
    </Modal>
  );
};

export default EcomModal;
