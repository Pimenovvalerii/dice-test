'use client'

import { ReactNode } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    customRedColor: '#1B5E20', 
    customGreenColor: '#C62828'
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          color: purple[500],
        },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${purple[100]}`,
          },
          '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${purple[200]}`,
          }
        },
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: purple[500],
          }
        }
      }
    }
  }
});


const Provider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={"border"}>
        {children}
      </div>
    </ThemeProvider>
  );
}


export default Provider;
