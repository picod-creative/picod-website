import type { FC, ReactElement } from 'react';
import { Slide, useScrollTrigger } from '@mui/material';

export interface HideOnScrollProps {
  children: ReactElement;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
