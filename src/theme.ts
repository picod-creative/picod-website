import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#111111",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },
});

theme.typography.h4 = {
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
};

export default theme;
