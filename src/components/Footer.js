import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { content } from "./content.layout.js"

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>{content.info.name} • © 2024</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;