import { createContext, ReactNode,useContext, useState } from 'react';

const LoadingContext = createContext({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
    children: ReactNode;
  }

export const LoadingProvider : React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
