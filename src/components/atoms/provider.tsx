import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { Toaster } from "./Toaster";
import { system } from "@theme";


export const Provider = (props: ColorModeProviderProps) => {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark" forcedTheme="dark" {...props} />
      <Toaster />
    </ChakraProvider>
  )
}