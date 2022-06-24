import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
