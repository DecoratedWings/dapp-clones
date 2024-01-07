"use client";
import { Box, Grid, Heading, HStack, Input, Stack, Text, useColorMode } from '@chakra-ui/react'
import { CheckboxFilter } from './CheckboxFilter'
import { ColorPicker } from './ColorPicker'
import { PriceRangePicker } from './PriceRangePicker'
import { ProductBreadcrumb } from './ProductBreadcrumb'
import { SizePicker } from './SizePicker'
import { MobileFilter } from './MobileFilter'
import { blueFilters, breadcrumbData, colorFilter, genderFilter, sizeFilter } from './_data'
import { NFTMain } from '../NFTMain'
import SkipFilterButton from "../../SkipFilterButton"

export const MainFilter = () => {
  const { colorMode } = useColorMode();

  return (
  <Box px={{ base: '4', md: '8', lg: '12' }} py={{ base: '6', md: '8', lg: '12' }}>
    <ProductBreadcrumb data={breadcrumbData}/>
    <Box mt={{ base: '8', md: '16' }}>
      <Grid templateColumns={{ base: '1fr', md: '240px 1fr' }} gap="14">
        <Stack spacing="10" maxW="240px" display={{ base: 'none', md: 'flex' }}>
          <SkipFilterButton targetId={'collections'} text={'Skip filters'} />
          <CheckboxFilter spacing="3" options={genderFilter.options} label="Topic" colorScheme={colorMode === "dark" ? "white" : "black"}/>
          <SizePicker {...sizeFilter} label="Size" />
          <ColorPicker {...colorFilter} label="Color" />
          <CheckboxFilter spacing="3" options={blueFilters.options} label="Publisher" showSearch colorScheme={colorMode === "dark" ? "white" : "black"}/>
          <Stack spacing="5">
            <label><b>Price range</b></label>
            <PriceRangePicker defaultValue={[6, 40]} />
            <HStack spacing="6">
              <Input type="number" placeholder="$20" aria-label='minimum price'/>
              <Input type="number" placeholder="$100" aria-label='maximum price'/>
            </HStack>
          </Stack>
        </Stack>

        <Box width="full">
          <Stack
            spacing={{ base: '6', md: '4' }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="flex-start"
            width="full"
            id="collections"
          >
            <Stack direction={{ base: 'column', md: 'row' }} align="baseline">
              <Heading size="md" fontSize="2xl">
                Top Book NFTs
              </Heading>
              <Text color={colorMode === "dark" ? "white" : "black"}>(20+ products)</Text>              
         
            </Stack>
            
            <MobileFilter />
          </Stack>

          <Box borderWidth="2px" minH="480px" rounded="xl" borderStyle="none">
            <NFTMain /> {/* Main NFT Component */}
          </Box>
        </Box>
      </Grid>
    </Box>
  </Box>
)};