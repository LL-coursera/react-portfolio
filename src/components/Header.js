import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Box, VStack, HStack } from "@chakra-ui/react";
import { content } from "./content.layout.js"
const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={10}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack
            >
              <h1>{content.info.name}</h1>
              <h6>  <FontAwesomeIcon icon={faMailBulk} size="1x" />{content.info.email}</h6>
              <h6><FontAwesomeIcon icon={faPhone} size="1x" />{content.info.tel}</h6>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#about-section" onClick={() => handleClick("about")}>{content.nav.about}</a>
              <a href="/#skills-section" onClick={() => handleClick("skills")}>{content.nav.skill}</a>
              <a href="/#projects-section" onClick={() => handleClick("projects")}>{content.nav.exp}</a>
              {/* <a href="/#contactme-section" onClick={() => handleClick("contactme")}>Recomemdations</a> */}
              <a href="/#contactme-section" onClick={() => handleClick("contactme")}>{content.nav.contact}</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;