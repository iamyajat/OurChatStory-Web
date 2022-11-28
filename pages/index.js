import { ChakraProvider } from "@chakra-ui/react";
import App from "../components/app";
import theme from "../components/theme";

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </div>
  );
}
