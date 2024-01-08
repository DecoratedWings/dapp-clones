/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import { Heading, Stack, Box, Flex } from "@chakra-ui/react";
import { FilterTabs } from "./FilterTabs";

export const Ranking = () => {
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
