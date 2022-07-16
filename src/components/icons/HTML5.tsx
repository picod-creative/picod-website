import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const HTML5: FC<SvgIconProps> = (props) => (
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
      d="M2.90203 25.201L0.655029 0H25.345L23.095 25.197L12.985 28L2.90203 25.201Z"
      fill="#E44F26"
    />
    <path
      d="M13 25.858L21.17 23.593L23.092 2.06104H13V25.858Z"
      fill="#F1662A"
    />
    <path
      d="M13 11.4069H8.91L8.628 8.24188H13V5.15088H12.989H5.25L5.324 5.98088L6.083 14.4979H13V11.4069Z"
      fill="#EBEBEB"
    />
    <path
      d="M12.9999 19.4339L12.9859 19.4379L9.54395 18.5089L9.32395 16.0439H7.65095H6.22095L6.65395 20.8959L12.9859 22.6539L12.9999 22.6499V19.4339Z"
      fill="#EBEBEB"
    />
    <path
      d="M12.989 11.407V14.498H16.795L16.437 18.507L12.989 19.437V22.653L19.326 20.896L19.372 20.374L20.098 12.237L20.174 11.407H19.341H12.989Z"
      fill="white"
    />
    <path
      d="M12.989 5.15088V7.07088V8.23488V8.24188H20.445H20.455L20.517 7.54788L20.658 5.98088L20.732 5.15088H12.989Z"
      fill="white"
    />
  </SvgIcon>
);

export default HTML5;
