import logo from './logo.svg';
import './App.css';
import {MyForm} from "./MyForm";
import {ChakraProvider, Switch} from "@chakra-ui/react";


function App() {
  return (
      <ChakraProvider>
              <MyForm/>
      </ChakraProvider>
  );
}

export default App;
