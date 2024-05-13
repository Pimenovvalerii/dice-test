import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customRedColor?: string;
    customGreenColor?: string;
  }

  interface PaletteOptions {
    customRedColor?: string;
    customGreenColor?: string;
  }
}
