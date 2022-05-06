import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

export interface TabPanelProps extends BoxProps {
  dir?: string;
  name: string;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({
  name,
  index,
  value,
  children,
  ...props
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default TabPanel;
