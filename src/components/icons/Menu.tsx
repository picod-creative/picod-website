import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Menu: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 25 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 17H25V14.1667H9V17ZM0 9.91667H25V7.08333H0V9.91667ZM0 0V2.83333H25V0H0Z"
      fill="white"
    />
  </SvgIcon>
);

export default Menu;
