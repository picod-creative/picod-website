import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#111111',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.75rem',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.34375rem',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.875rem',
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.96rem',
  },
};

export default theme;
