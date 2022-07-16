import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Figma: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={(theme) => ({
      width: 'fit-content',
      ...(typeof props.sx === 'function' ? (props.sx(theme) as any) : props.sx),
    })}
  >
    <path
      d="M50 300C77.6 300 100 277.6 100 250V200H50C22.4 200 0 222.4 0 250C0 277.6 22.4 300 50 300Z"
      fill="#0ACF83"
    />
    <path
      d="M0 150C0 122.4 22.4 100 50 100H100V200H50C22.4 200 0 177.6 0 150Z"
      fill="#A259FF"
    />
    <path
      d="M0 50C0 22.4 22.4 0 50 0H100V100H50C22.4 100 0 77.6 0 50Z"
      fill="#F24E1E"
    />
    <path
      d="M100 0H150C177.6 0 200 22.4 200 50C200 77.6 177.6 100 150 100H100V0Z"
      fill="#FF7262"
    />
    <path
      d="M200 150C200 177.6 177.6 200 150 200C122.4 200 100 177.6 100 150C100 122.4 122.4 100 150 100C177.6 100 200 122.4 200 150Z"
      fill="#1ABCFE"
    />
  </SvgIcon>
);

export default Figma;
