import {ChakraProvider} from "@chakra-ui/react";
import Backoffice from "./components/backoffice/Backoffice";
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Backoffice/>
  </ChakraProvider>
  );
}

export default App;
