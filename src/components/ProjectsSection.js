import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium soluta sapiente harum non voluptatem temporibus voluptates unde sequi quae!",
    getImageSrc: 'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
  },
  {
    title: "React Infinite Scroll",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium soluta sapiente harum non voluptatem temporibus voluptates unde sequi quae!",
    getImageSrc: 'https://payload-cms.code-b.dev/media/1_bEPEZM_fqftW6RK7hZWrAA%201infinite%20scroll%20with%20react.png',
  },
  {
    title: "Photo Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium soluta sapiente harum non voluptatem temporibus voluptates unde sequi quae!",
    getImageSrc: 'https://photopxl.com/pxl-content/uploads/2021/02/1_The-Gallery.jpg',
  },
  {
    title: "Event planner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium soluta sapiente harum non voluptatem temporibus voluptates unde sequi quae!",
    getImageSrc: 'https://images.theeventscalendar.com/uploads/2023/05/The-Benefits-of-Hiring-a-Professional-Event-Planner-1528x1016.jpg',

  },
];

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
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;