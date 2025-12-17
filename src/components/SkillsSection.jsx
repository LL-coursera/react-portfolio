import React from 'react'
import FullScreenSection from "./FullScreenSection.jsx";
import { content } from "./content.layout.jsx"
import { Heading, HStack, Box, UnorderedList, ListItem, VStack } from "@chakra-ui/react";

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
      <Heading as="h1" fontSize="3xl"> {/* Increased font size for the heading */}
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
              <UnorderedList fontSize="xl"> {/* Increased font size for the list */}
                {project.detail.map((each, i) => (
                  <ListItem key={i} fontSize="xl"> {/* Increased font size for each list item */}
                    {each}
                  </ListItem>
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
