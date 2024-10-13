import React from 'react'
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { content } from "./content.layout.js"
import { Heading, HStack, Image, Text, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";

const project = content.skills
function SkillsSection() {
  return (
    <FullScreenSection
      backgroundColor="#8990c4"
      isDarkBackground
      py={16}
      spacing={8}
      p={8}
      alignItems="flex-start"
      id='skills-section'
      minHeight='10vh'
    >
      <Heading as="h1" >
        Skills
      </Heading>
      <HStack spacing={3}>
        <Box
          backgroundColor="white"
          textColor="black"
          rounded="3xl"
          padding={10}
        >
          <VStack spacing={3}>
            <Box paddingX={4}>
                <UnorderedList>
                  {project.detail.map((each, i) => (
                    <ListItem key={i}>{each}</ListItem>
                  ))}
                </UnorderedList>
              
            </Box>
          </VStack>
        </Box>
      </HStack>

    </FullScreenSection>
  )
}

export default SkillsSection