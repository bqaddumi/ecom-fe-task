import { Button, Box, Typography, TextField } from '@mui/material';
import {
  footerContainerStyle,
  titleStyle,
  subTitleStyle,
  subscribeButtonStyle,
  emailInputStyle,
  emailContainerStyles,
} from './footer-style';
import { FOOTER } from '../../consts';
import { useState } from 'react';

const Footer: React.FC = () => {
  const { TITLE, SUBTITLE, EMAIL_PLACEHOLDER, SUBSCRIBE_BTN, SUBSCRIBED } =
    FOOTER;
  const [email, setEmail] = useState<string>('');
  const [btnLabel, setBtnLabel] = useState<string>(SUBSCRIBE_BTN);

  const validateEmail = (email: string) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };

  const onSubscribeClicked = () => {
    if (validateEmail(email)) {
      setBtnLabel(SUBSCRIBED);
      setEmail('');
    }
  };
  return (
    <Box sx={footerContainerStyle}>
      <Typography sx={titleStyle}>{TITLE}</Typography>
      <Typography sx={subTitleStyle}>{SUBTITLE}</Typography>
      <Box sx={emailContainerStyles}>
        <TextField
          value={email}
          variant="outlined"
          placeholder={EMAIL_PLACEHOLDER}
          sx={emailInputStyle}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => setEmail(e.target.value)}
        />
        <Button sx={subscribeButtonStyle} onClick={onSubscribeClicked}>
          {btnLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
