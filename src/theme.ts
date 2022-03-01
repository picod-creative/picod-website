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

export default theme;
