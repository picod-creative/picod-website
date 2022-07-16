import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CSS3: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 26 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={(theme) => ({
      width: 'fit-content',
      ...(typeof props.sx === 'function' ? (props.sx(theme) as any) : props.sx),
    })}
  >
    <path
      d="M2.90201 25.201L0.656006 0H25.344L23.095 25.197L12.985 28L2.90201 25.201Z"
      fill="#1572B6"
    />
    <path
      d="M13 25.858L21.17 23.593L23.092 2.06104H13V25.858Z"
      fill="#33A9DC"
    />
    <path
      d="M13 11.1911H17.09L17.372 8.02606H13V4.93506H13.011H20.75L20.676 5.76406L19.917 14.2821H13V11.1911Z"
      fill="white"
    />
    <path
      d="M13.019 19.2179L13.005 19.2219L9.56299 18.2919L9.34299 15.8269H7.66999H6.23999L6.67299 20.6799L13.004 22.4379L13.019 22.4339V19.2179Z"
      fill="#EBEBEB"
    />
    <path
      d="M16.8271 14.1509L16.4551 18.2899L13.0081 19.2199V22.4359L19.3441 20.6799L19.3911 20.1579L19.9281 14.1509H16.8271Z"
      fill="white"
    />
    <path
      d="M13.0111 4.93506V6.85506V8.01806V8.02606H5.55507H5.54507L5.48307 7.33106L5.34207 5.76406L5.26807 4.93506H13.0111Z"
      fill="#EBEBEB"
    />
    <path
      d="M13 11.1909V13.1109V14.2739V14.2819H9.61095H9.60095L9.53895 13.5869L9.39895 12.0199L9.32495 11.1909H13Z"
      fill="#EBEBEB"
    />
  </SvgIcon>
);

export default CSS3;
