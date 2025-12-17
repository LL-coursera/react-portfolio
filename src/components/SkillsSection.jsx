import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import { content } from "./content.layout.jsx";
import { Heading, HStack, Box, UnorderedList, ListItem, VStack, Button } from "@chakra-ui/react";

// Import images for each skill
import CSS3Image from "../images/CSS3.png";
import HTML5Image from "../images/html5.png";
import JavaImage from "../images/java.png";
import JSImage from "../images/js.jpeg";
import NodeImage from "../images/node_express.png";
import ReactImage from "../images/react.png";
import AngularImage from "../images/angular.png";
import NestJSImage from "../images/nestjs.webp";
import NgRxImage from "../images/rxjs.svg";
import RxJSImage from "../images/RxJS.png";
import BootstrapImage from "../images/bootstrap.png";
import MongoDBImage from "../images/mongodb.png";
import FirebaseImage from "../images/firebase.png";
import MySQLImage from "../images/mysql.png";
import VSCodeImage from "../images/vscode.jpeg";
import JenkinsImage from "../images/Jenkins.svg";
import GitImage from "../images/Git.jpeg";
import Agille_Waterfall from "../images/Agile_Waterfall.webp";
import Karma_Jasmine from "../images/Karma.webp";
import Postman from "../images/Postman.png";
import typescript from "../images/typescript.png";

// Define your projects array with the imported images
const projects = [
  {
    title: "Angular",
    description: '6+ years experience',
    imageSrc: AngularImage,
  },
  {
    title: "JS",
    description: "7+ years experience",
    imageSrc: JSImage,
  },
  {
    title: "typescript",
    description: '6+ years experience',
    imageSrc: typescript,
  },
  {
    title: "CSS3",
    description: "7+ years experience",
    imageSrc: CSS3Image,
  },
  {
    title: "HTML5",
    description: "7+ years experience",
    imageSrc: HTML5Image,
  },
  {
    title: "Node/Express",
    description: "7+ years experience",
    imageSrc: NodeImage,
  },
  {
    title: "Karma_Jasmine",
    description: '4+ years experience',
    imageSrc: Karma_Jasmine,
  },
  {
    title: "Postman",
    description: '8+ years experience',
    imageSrc: Postman,
  },
  {
    title: "React",
    description: "4+ years experience",
    imageSrc: ReactImage,
  },
  {
    title: "NestJS",
    description: '5+ years experience',
    imageSrc: NestJSImage,
  },
  {
    title: "NgRx",
    description: '5+ years experience',
    imageSrc: NgRxImage,
  },
  {
    title: "RxJS",
    description: '5+ years experience',
    imageSrc: RxJSImage,
  },
  {
    title: "Java",
    description: "7+ years experience",
    imageSrc: JavaImage,
  },
  {
    title: "Bootstrap",
    description: '5+ years experience',
    imageSrc: BootstrapImage,
  },
  {
    title: "MongoDB",
    description: '4+ years experience',
    imageSrc: MongoDBImage,
  },
  {
    title: "Firebase",
    description: '5+ years experience',
    imageSrc: FirebaseImage,
  },
  {
    title: "MySQL",
    description: '5+ years experience',
    imageSrc: MySQLImage,
  },
  {
    title: "VS Code",
    description: '8+ years experience',
    imageSrc: VSCodeImage,
  },
  {
    title: "Jenkins",
    description: '3+ years experience',
    imageSrc: JenkinsImage,
  },
  {
    title: "Git",
    description: '8+ years experience',
    imageSrc: GitImage,
  },
  {
    title: "Agile_Waterfall",
    description: '3+ years experience',
    imageSrc: Agille_Waterfall,
  },
];

function SkillsSection() {
  const [visibleCount, setVisibleCount] = useState(5); // Initially show 6 skills

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Show 6 more skills on each click
  };

  return (
    <FullScreenSection
      backgroundColor="#8990c4"
      isDarkBackground
      py={16}
      spacing={8}
      p={8}
      display="flex"      
      justifyContent="space-around" 
      id="skills-section"
      minHeight="10vh"
    >
      <Heading as="h1">Skills</Heading>
      <HStack spacing={3}>
        <Box
          backgroundColor="white"
          textColor="black"
          rounded="3xl"
          padding={10}
        >
          <VStack spacing={3}>
            <Box paddingX={4}>
              <UnorderedList fontSize="3xl">
                {content.skills.detail.map((each, i) => (
                  <ListItem key={i} fontSize="xl">
                    {each}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </HStack>

      {/* Project cards display */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.slice(0, visibleCount).map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            skills={true}
            maxHeight="100px"
            maxWidth="100px"
          />
        ))}
      </Box>

      {/* Show More button */}
      {visibleCount < projects.length && (
        <Button onClick={handleShowMore} variant="contained" color="primary" mt={4}>
          Show More
        </Button>
      )}
    </FullScreenSection>
  );
}

export default SkillsSection;
