import { createTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  primary: {
    main: "#242a33",
    contrastText: "#ffce00",
  },
  background: {
    default: "#191c20",
  },
  secondary: {
    main: "#fff",
    contrastText: "#212429",
  },
  text: {
    primary: '#909090',
  }  
};

const theme = createTheme({
  palette,
  typography: {
    h5: {
      fontWeight: "bold"
    }
  },
});

export default theme;
