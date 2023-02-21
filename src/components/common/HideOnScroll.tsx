import { FC, ReactElement, useEffect } from 'react';
import { Slide, useScrollTrigger } from '@mui/material';

export interface HideOnScrollProps {
  children: ReactElement<any, any>;
  onHide?: () => void;
  onShow?: () => void;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children, onHide, onShow }) => {
  const trigger = useScrollTrigger();

  useEffect(() => {
    if (trigger) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [onHide, onShow, trigger]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
