import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { content } from "./content.layout.js"

const projects = content.exps

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      py={16}
      spacing={8}
      p={8}
      alignItems="flex-start"
      id="projects-section"
    >
      <Heading as="h1" >
        Featured {content.nav.exp}
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            image={false}
            key={project.title}
            title={project.title}
            time={project.time}
            description={project.description}
            detail={project.responsibility}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;