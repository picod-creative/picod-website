import type { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Facebook: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.2111 13.4993L12.8855 9.156H8.67024V6.3375C8.67024 5.1495 9.25887 3.99075 11.1469 3.99075H13.063V0.29325C13.063 0.29325 11.3244 0 9.66166 0C6.19054 0 3.92172 2.0805 3.92172 5.84625V9.15675H0.0629883V13.5H3.92172V24H8.67024V13.5L12.2111 13.4993Z" />
  </SvgIcon>
);

export default Facebook;
