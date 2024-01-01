import React, { createContext, ReactNode,useState } from 'react';

interface AlertContextProps {
  show: boolean;
  setShow: (show: boolean) => void;
  msg: string;
  setMsg: (msg: string) => void;
  variant: string;
  setVariant: (variant: string) => void;
}

const defaultState = {
  show: false,
  setShow: () => {},
  msg: '',
  setMsg: () => {},
  variant: 'success', 
  setVariant: () => {},
};

export const AlertContext = createContext<AlertContextProps>(defaultState);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');
  const [variant, setVariant] = useState('');


  return (
    <AlertContext.Provider value={{ show, setShow, msg, setMsg, variant, setVariant}}>
      {children}
    </AlertContext.Provider>
  );
};
