import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, maxHeight = '300px', maxWidth = '450px', skills = false }) => {
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
            <Image src={imageSrc} alt={title} rounded="2xl" style={{ height: maxHeight, width: maxWidth }} />
            <Box paddingX={4}>
              <Heading paddingY={3} size="md">
                {title}
              </Heading>
              <Text>{description}</Text>
              {!skills &&
                (<HStack spacing={2}>
                  <Text fontWeight="bold">See More</Text>
                  <FontAwesomeIcon icon={faArrowRight} />
                </HStack>)
              }
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;