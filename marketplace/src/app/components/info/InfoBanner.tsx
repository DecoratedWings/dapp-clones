"use client";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    CloseButton,
    Collapse,
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";

  export interface InfoProps {
    title: string;
    preview: string;
    children?: React.ReactNode;
  }
  
  const InfoBanner = (props: InfoProps) => {
    const { isOpen: isAlertVisible, onClose: closeAlert } = useDisclosure({
      defaultIsOpen: true,
    });
    const { isOpen: isMoreInfoVisible, onToggle: toggleMoreInfo } =
      useDisclosure();
  
    return (
      <Box
        position={"relative"}
        p={1}
        id="chakra-skip-nav"
      >
        {isAlertVisible && (
          <Alert status="info" borderRadius="md" display="flex" alignItems="start">
            <AlertIcon mt={2} />
            <Box flex="1" >
              <AlertTitle>{props.title}</AlertTitle>
              <AlertDescription>{props.preview}</AlertDescription>
              
              <Collapse in={isMoreInfoVisible} startingHeight={1}>
                <br/>
                <Box>
                  {props.children}
                </Box>
              </Collapse>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Button variant="link"  colorScheme="white" onClick={toggleMoreInfo} marginRight="4">
                {isMoreInfoVisible ? "Less info" :  "More info"}
              </Button>
              <CloseButton
                _hover={{ bg: "blue.200" }} 
                _focus={{ boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)" }} 
                onClick={closeAlert}
              />
            </Box>
          </Alert>
        )}
      </Box>
    );
  };
  
  export default InfoBanner;