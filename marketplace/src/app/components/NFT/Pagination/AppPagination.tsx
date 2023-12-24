import { Box, Container } from '@chakra-ui/react';
import { Pagination } from './Pagination';

interface AppPaginationProps {
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
  onPageChange: (page: number) => void;
}

export const AppPagination = ({
  totalPosts,
  currentPage,
  postsPerPage,
  onPageChange,
}: AppPaginationProps) => {
  // Calculate total number of pages
  const pageCount = Math.ceil(totalPosts / postsPerPage);
  
  return (
    <Box bg="bg.surface">
      <Container py={{ base: '12', md: '16' }}>
        <Pagination
          count={pageCount}
          pageSize={1}
          siblingCount={1}
          page={currentPage}
          onChange={(e: { page: number }) => onPageChange(e.page)}
        />
      </Container>
    </Box>
  );
};