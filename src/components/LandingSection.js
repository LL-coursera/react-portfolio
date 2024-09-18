import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I am Jane Doe!👋";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const imageLink = 'https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726617600&semt=ais_hybrid'

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

        <Avatar name="Jane Doe" src={imageLink} size="2xl" />
        <Heading size="md">{greeting}</Heading>
      </VStack>
      <Heading size="2xl">{bio1}</Heading>
      <Heading size="2xl">{bio2}</Heading>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;