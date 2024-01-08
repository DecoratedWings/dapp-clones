import {
    Pagination as ArkPagination,
    PaginationProps as ArkPaginationProps,
    PaginationEllipsis,
    PaginationNextPageTrigger,
    PaginationPageTrigger,
    PaginationPrevPageTrigger,
  } from '@ark-ui/react'
  import {
    Button,
    Center,
    IconButton,
    List,
    ListItem,
    Text,
  } from '@chakra-ui/react'
  import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
  
  export type PaginationProps = Omit<ArkPaginationProps, 'children'>
  
  export const Pagination = (props: PaginationProps) => {
    return (
      <ArkPagination {...props}>
        {({ pages, page }) => (
          <List display="flex" justifyContent="space-between">
            <ListItem>
              <PaginationPrevPageTrigger asChild>
                <IconButton
                  variant="secondary"
                  isRound
                  icon={<FiArrowLeft />}
                  aria-label="Previous Page"
                />
              </PaginationPrevPageTrigger>
            </ListItem>
  
            <List display={{ base: 'none', md: 'flex' }} gap="1">
              {pages.map((page, index) =>
                page.type === 'page' ? (
                  <ListItem key={index}>
                    <PaginationPageTrigger asChild {...page} onClick={() => props.onChange?.({
                      page: page.value,
                      pageSize: 0
                    })}>
                      <Button
                        variant="secondary"
                        borderRadius="full"
                        _selected={{ bg: 'gray.50', _dark: { bg: 'gray.800' } }}
                      >
                        {page.value}
                      </Button>
                    </PaginationPageTrigger>
                  </ListItem>
                ) : (
                  <ListItem key={index} alignItems="center" display="flex">
                    <PaginationEllipsis index={index}>
                      <Button variant="secondary" borderRadius="full" pointerEvents="none" width="10">
                        &#8230;
                      </Button>
                    </PaginationEllipsis>
                  </ListItem>
                ),
              )}
            </List>
            <ListItem as={Center} display={{ md: 'none' }}>
              <Text fontWeight="medium" color="fg.emphasized">
                Page {page} of {props.count}
              </Text>
            </ListItem>
  
            <ListItem>
              <PaginationNextPageTrigger asChild>
                <IconButton
                  variant="secondary"
                  isRound
                  icon={<FiArrowRight />}
                  aria-label="Next Page"
                />
              </PaginationNextPageTrigger>
            </ListItem>
          </List>
        )}
      </ArkPagination>
    )
  }