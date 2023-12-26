import React from 'react';
import { Container, Stack, Tab, Tabs, TabList, TabPanels, TabPanel, useColorModeValue } from '@chakra-ui/react';
import TabContent from './Tabs/TabContent';
import { art_collections } from './Tabs/art_collections';
import { music_collections } from './Tabs/music_collections';
import { sports_collections } from './Tabs/sports_collections';
import { top_collections } from './Tabs/top_collections';

export const FilterTabs = ({ onTabChange }: any) => {
  const tabColor = useColorModeValue("gray.800", "white");
  const tabBg = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const selectColor = useColorModeValue("blue.50", "blue.600")
  return (
  <Container maxW="full" py={{ base: '5', md: '10' }}>
    <Stack spacing="16">
    <Tabs size="lg" variant="line" onChange={onTabChange} colorScheme="blue">
          <TabList borderBottomColor={borderColor} ml={4}>
            {['Top', 'Sports', 'Art', 'Music'].map((tabName) => (
              <Tab 
                key={tabName}
                _selected={{ color: {selectColor}, borderColor: "blue.500" }}
                _focus={{ boxShadow: "0 0 0 2px #00B5D8", zIndex: 1 }}
                color={tabColor}
                bg={tabBg}
                p={7}
              >
                {tabName}
              </Tab>
            ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabContent collections={top_collections} />
          </TabPanel>
          <TabPanel>
            <TabContent collections={sports_collections} />
          </TabPanel>
          <TabPanel>
            <TabContent collections={art_collections} />
          </TabPanel>
          <TabPanel>
            <TabContent collections={music_collections} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  </Container>
  );
};
