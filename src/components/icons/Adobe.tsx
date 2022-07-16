import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Adobe: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={(theme) => ({
      width: 'fit-content',
      ...(typeof props.sx === 'function' ? (props.sx(theme) as any) : props.sx),
    })}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.0152344 0H51.9848C51.9932 0 52 0.00682066 52 0.0152344V51.9848C52 51.9897 51.9977 51.994 51.9941 51.9968C51.9915 51.9988 51.9883 52 51.9848 52H0.0152344C0.00682066 52 0 51.9932 0 51.9848V0.0152344C0 0.00682066 0.00682066 0 0.0152344 0ZM41.2812 12H29.7031L41.2812 39.625V12ZM10 12H21.5781L10 39.625V12ZM20.6641 34.0391L25.5391 22.0547L32.9531 39.625H28.2812L25.9453 34.0391H20.6641Z"
      fill="#ed2224"
    />
  </SvgIcon>
);

export default Adobe;
