import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const JS: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={(theme) => ({
      width: 'fit-content',
      ...(typeof props.sx === 'function' ? (props.sx(theme) as any) : props.sx),
    })}
  >
    <path d="M24 0H0V24H24V0Z" fill="#F1DC50" />
    <path
      d="M12 11C12 15.7492 12 18.4159 12 19C12 19.8762 11.4771 21 10 21C7.61462 21 7.5 19 7.5 19M20.79 13.516C20.1899 12.5053 19.3944 12 18.4035 12C16.8563 12 16 13 16 14C16 15 16.5 16 18.5084 16.5C19.7865 16.8182 21 17.5 21 19C21 20.5 19.6845 21 18.5 21C16.9862 21 15.9862 20.3333 15.5 19"
      stroke="#333333"
      strokeWidth="2"
      fill="none"
    />
  </SvgIcon>
);

export default JS;
