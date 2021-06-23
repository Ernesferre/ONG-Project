import React, { useEffect } from "react";
import "./App.css";
//REACT-ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
//CHAKRA
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// BACKOFFICE
import { Private } from "./routes/Private";
import { Public } from "./routes/Public";
import { PrivateRoute } from "./routes/PrivateRoute";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities, fetchOrganizationData } from "./features/organizationReducer";

// ROUTE TRANSITIONS
import { CSSTransition, TransitionGroup } from "react-transition-group";

const theme = extendTheme({
  fonts: {
    body: "Open Sans, serif",
    heading: "Source Sans Pro, sans-serif",
  },

  colors: {
    brandYellow: {
      50: "#FFFFBF",
      100: "#FAFA88",
      200: "#F2F255",
      300: "#EDED18",
      400: "#E6E602",
    },
    brandBlue: {
      50: "#C2D9F2",
      100: "#9AC9FB",
      200: "#88BBF2",
      300: "#5796D9",
      400: "#194B80",
    },
    brandRed: {
      50: "#F2716D",
      100: "#DB5752",
      200: "#CC423D",
      300: "#BF3530",
      400: "#731411",
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
  // GUARDAR INFO DE LA ORGANIZACIÓN EN REDUX
  const dispatch = useDispatch();
  const organizationData = useSelector(
    (state) => state.organization.organizationData
  );

  useEffect(() => {
    if (!organizationData.name) {
      dispatch(fetchOrganizationData());
      dispatch(fetchActivities());
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    </ChakraProvider>
  );
}

function Routes() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="page" key={location.key}>
        <Switch location={location}>
          <PrivateRoute path="/backoffice" component={Private} />

          <Route path="/" component={Public} />

          <Redirect to="/" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
