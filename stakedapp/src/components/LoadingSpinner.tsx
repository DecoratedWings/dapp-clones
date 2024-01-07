// TopLevelSpinner.js
import { Spinner } from 'react-bootstrap';

import { useLoading } from '../context/LoadingContext.tsx';
import { FullPageSpinner } from './StyledComponents.tsx';

const LoadingSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <FullPageSpinner>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </FullPageSpinner>
  );
};

export default LoadingSpinner;
