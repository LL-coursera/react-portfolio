import { Heading, HStack, Image, Text, VStack, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Card = ({ title, description, imageSrc, maxHeight = '300px', maxWidth = '450px', skills = false, time, detail }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <HStack spacing={3}>
        <Box
          backgroundColor="white"
          textColor="black"
          rounded="3xl"
          paddingBottom={5}
        >
          <VStack spacing={3}>
            {skills &&
              <Image src={imageSrc} alt={title} rounded="2xl" style={{ height: maxHeight, width: maxWidth }} />
            }
            <Box paddingX={4}>
              <Heading paddingY={3} size="md">
                {title}
              </Heading>
              {!skills &&
                <Heading as='h5' size='sm'>
                  Time: {time}
                </Heading>
              }
              <Text>{description}</Text>
              {!skills &&
                (<HStack spacing={2} onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                  <Text fontWeight="bold" >Responsibility</Text>
                  <FontAwesomeIcon icon={faArrowRight} />
                </HStack>)
              }
              {showDetails && (
                <UnorderedList>
                  {detail.map((each, i) => (
                    <ListItem key={i}>{each}</ListItem>
                  ))}
                </UnorderedList>
              )}
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;