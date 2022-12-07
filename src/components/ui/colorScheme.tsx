import { createTheme } from "@mui/material";

const colorScheme = createTheme({
    palette: {
        mode: 'dark',
      primary: {
        main: '#3961ed',
      },
      secondary: {
        main: '#a36ac7',
      },
      error: {
        main: '#cc342b',
      },
      warning: {
        main: '#fba922',
      },
      info: {
        main: '#3971ed',
      },
      success: {
        main: '#198844',
      },
    },
  });

export default colorScheme;