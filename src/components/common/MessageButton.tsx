import { FC, memo } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import MessageIcon from '../icons/Message';

const MessageButton: FC<IconButtonProps> = (props) => (
  <IconButton
    {...props}
    sx={(theme) => ({
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
    })}
  >
    <MessageIcon
      sx={(theme) => ({
        fontSize: '3rem',
        [theme.breakpoints.down('md')]: {
          fontSize: '2.5rem',
        },
      })}
    />
  </IconButton>
);

export default memo(MessageButton);
