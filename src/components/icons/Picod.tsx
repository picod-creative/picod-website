import { SvgIcon, SvgIconProps } from '@mui/material';
import type { FC } from 'react';

export interface PicodIconProps extends SvgIconProps {
  variant: 'icon' | 'logo';
}

const Picod: FC<PicodIconProps> = ({ variant, ...props }) => {
  return variant === 'icon' ? (
    <SvgIcon
      {...props}
      viewBox="0 0 88 88"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      sx={{
        fontSize: 88,
        ...props.sx,
      }}
    >
      <path
        d="M29.9392 21.6471H43.9995C47.9516 21.6471 51.7419 23.2171 54.5365 26.0117C57.3311 28.8063 58.9011 32.5965 58.9011 36.5487C58.9011 40.5008 57.3311 44.2911 54.5365 47.0857C51.7419 49.8803 47.9516 51.4503 43.9995 51.4503H29.0979V22.4884C29.0979 22.2653 29.1865 22.0513 29.3443 21.8935C29.5021 21.7357 29.7161 21.6471 29.9392 21.6471Z"
        fill="white"
      />
      <path
        d="M29.0979 51.4502H43.9995C43.9995 55.4023 42.4295 59.1926 39.6349 61.9872C36.8403 64.7818 33.05 66.3518 29.0979 66.3518V51.4502Z"
        fill="#9C9B9B"
      />
    </SvgIcon>
  ) : null;
};

export default Picod;
