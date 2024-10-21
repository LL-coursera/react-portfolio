import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, maxWidth = "1280px", minHeight = "100vh", ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth={maxWidth} minHeight={minHeight} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;