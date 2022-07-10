import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

export interface TabPanelProps extends BoxProps {
  dir?: string;
  name: string;
  index: number;
}

const TabPanel: FC<TabPanelProps> = ({ name, index, children, ...props }) => {
  return (
    <Box
      role="tabpanel"
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...props}
    >
      {children}
    </Box>
  );
};

export default TabPanel;
