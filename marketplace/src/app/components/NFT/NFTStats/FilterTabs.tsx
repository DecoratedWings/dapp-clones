import { Container, Stack, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import TabContent from './Tabs/TabContent';
import { art_collections } from './Tabs/art_collections';
import { music_collections } from './Tabs/music_collections';
import { sports_collections } from './Tabs/sports_collections';
import { top_collections } from './Tabs/top_collections';

interface filterTabProps {
  colorMode:string;
}

export const FilterTabs = (props:filterTabProps) => (
  <Container py={{ base: '5', md: '10' }}>
    <Stack spacing="16">
      <Tabs size="lg" variant="line" bg={props.colorMode === "dark" ? "black" : "gray.100"}>
        <TabList>
          <Tab _focus={{ boxShadow: "0 0 0 2px #00B5D8", zIndex: 1 }}>Top</Tab>
          <Tab _focus={{ boxShadow: "0 0 0 2px #00B5D8", zIndex: 1 }}>Sports</Tab>
          <Tab _focus={{ boxShadow: "0 0 0 2px #00B5D8", zIndex: 1 }}>Art</Tab>
          <Tab _focus={{ boxShadow: "0 0 0 2px #00B5D8", zIndex: 1 }}>Music</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Content for Top tab */}
           <TabContent collections={top_collections} colorMode={props.colorMode}/>
          </TabPanel>
          <TabPanel>
            {/* Content for Sports tab */}
            <TabContent collections={sports_collections} colorMode={props.colorMode}/>
          </TabPanel>
          <TabPanel>
            {/* Content for Art tab */}
            <TabContent collections={art_collections} colorMode={props.colorMode}/>
          </TabPanel>
          <TabPanel>
            {/* Content for Music tab */}
            <TabContent collections={music_collections} colorMode={props.colorMode}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  </Container>
);