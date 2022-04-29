import { FC } from 'react';
import { IconButton, IconButtonProps, useTheme } from '@mui/material';
import MessageIcon from '../icons/Message';

const MessageButton: FC<IconButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <IconButton
      {...props}
      sx={{
        width: 'fit-content',
        position: 'fixed',
        aspectRatio: '1',
        p: 2,
        zIndex: (theme) => theme.zIndex.tooltip,
        bottom: (theme) => theme.spacing(6),
        right: (theme) => theme.spacing(6),
        [theme.breakpoints.down('md')]: {
          bottom: (theme) => theme.spacing(3),
          right: (theme) => theme.spacing(3),
        },
      }}
    >
      <MessageIcon
        sx={{
          fontSize: '3rem',
          [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
          },
        }}
      />
    </IconButton>
  );
};

export default MessageButton;
