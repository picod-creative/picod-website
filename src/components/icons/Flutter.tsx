import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Flutter: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 34 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={(theme) => ({
      width: 'fit-content',
      ...(typeof props.sx === 'function' ? (props.sx(theme) as any) : props.sx),
    })}
  >
    <path
      d="M20.7433 0L0.848633 19.8947L7.00641 26.0524L33.059 0H20.7433Z"
      fill="#47C5FB"
    />
    <path
      d="M20.6046 18.3464L9.95239 28.9986L16.1333 35.2719L22.2797 29.1255L33.0589 18.3464H20.6046Z"
      fill="#47C5FB"
    />
    <path
      d="M16.1335 35.2719L20.8126 39.951H33.059L22.2798 29.1255L16.1335 35.2719Z"
      fill="#00569E"
    />
    <path
      d="M9.8833 29.0678L16.0412 22.9099L22.2798 29.1255L16.1336 35.2719L9.8833 29.0678Z"
      fill="#00B5F8"
    />
  </SvgIcon>
);

export default Flutter;
