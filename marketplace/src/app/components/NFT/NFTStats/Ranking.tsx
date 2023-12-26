"use client";
import React, { useState } from "react";
import { Heading, Stack, Box, Flex, useColorMode } from "@chakra-ui/react";
import { FilterTabs } from "./FilterTabs";

export const Ranking = () => {
  const { colorMode } = useColorMode();
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <Flex direction={{ base: "column", md: "row" }} justify="space-between">
      <Box flex="1">
        <Stack align="center" textAlign="center">
          <Heading size={{ base: "sm", md: "md" }}>Rankings</Heading>
        </Stack>
       
        <FilterTabs
          onTabChange={(index: React.SetStateAction<number>) =>
            setActiveTabIndex(index)
          }
        />
      </Box>
    </Flex>
  );
};
