import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider, Heading, HStack, Text, Grid } from '@chakra-ui/react';
import theme from "./theme/index";
import "@fontsource/roboto-mono";
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Feed from "./components/Feed";
import { Web3ContextProvider } from './context/web3context';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Web3ContextProvider>
        <Grid height="100vh" overflow="hidden" width="100%" templateColumns="2fr 3fr 2fr">
          <LeftSideBar />
          <Feed />
          {/* <Onboarding /> */}
          <RightSideBar />
        </Grid>
      </Web3ContextProvider>
    </ChakraProvider>
  );
}

export default App;
