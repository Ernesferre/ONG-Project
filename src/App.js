import "./App.css";
//REACT-ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//CHAKRA
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// BACKOFFICE
import { Private } from "./routes/Private";
import { Public } from "./routes/Public";
import { PrivateRoute } from "./routes/PrivateRoute";

const theme = extendTheme({
  fonts: {
    body: "Open Sans, serif",
    heading: "Source Sans Pro, sans-serif",
  },

  colors: {
    brandYellow: {
      100: "#FAFA88",
      200: "#F2F255",
      300: "#E6E639",
    },
    brandBlue: {
      50: "#C2D9F2",
      100: "#9AC9FB",
      200: "#88BBF2",
      300: "#5796D9",
      500: "#194B80",
    },
    brandRed: {
      100: "#DB5752",
      200: "#CC423D",
      300: "#BF3530",
      500: "#731411",
    },
  },

  components: {
    Button: {
      variants: {
        somosMas: {
          color: "brandBlue.500",
          bg: "brandBlue.200",
          _hover: { bg: "brandBlue.300" },
        },
        somosMasOutline: {
          color: "brandBlue.500",
          borderColor: "brandBlue.300",
          borderWidth: "0.12em",
          _hover: { bg: "brandBlue.200" },
        },
        danger: {
          bg: "brandRed.100",
          color: "brandRed.500",
          _hover: {
            bg: "brandRed.200",
          },
        },
        dangerOutline: {
          borderWidth: "0.12em",
          borderColor: "brandRed.200",
          color: "brandRed.500",
          _hover: {
            bg: "brandRed.200",
          },
        },
        warning: {
          color: "black",
          bg: "brandYellow.100",
          _hover: {
            bg: "brandYellow.200",
          },
        },
        warningOutline: {
          borderWidth: "0.12em",
          borderColor: "brandYellow.300",
          color: "black",
          _hover: {
            bg: "brandYellow.200",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/backoffice" component={Private} />

            <Route path="/" component={Public} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
