import React from 'react'
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { Box, Heading } from "@chakra-ui/react";
const projects = [
  {
    title: "CSS3",
    description: '2 years experience',
    getImageSrc: () => require("../images/CSS3.png"),
  },
  {
    title: "html5",
    description: '2 years experience',
    getImageSrc: () => require("../images/html5.png"),
  },
  {
    title: "java",
    description: '2 years experience',
    getImageSrc: () => require("../images/java.png"),
  },
  {
    title: "JS",
    description: '2 years experience',
    getImageSrc: () => require("../images/js.jpeg"),
  },
  {
    title: "Node",
    description: '2 years experience',
    getImageSrc: () => require("../images/node.png"),
  },
  {
    title: "react",
    description: '2 years experience',
    getImageSrc: () => require("../images/react.png"),
  },
];
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
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            skills={true}
            maxHeight='100px'
            maxWidth='100px'
          />
        ))}
      </Box>

    </FullScreenSection>
  )
}

export default SkillsSection