import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { content } from "./content.layout.js"

const greeting = content.landingSection.greeting;
const bio1 = content.landingSection.bio1;
const bio2 = content.landingSection.bio2;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="about-section"
  >
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar name={content.info.name} src={require("../images/image-profolio.webp")} size="2xl" />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;