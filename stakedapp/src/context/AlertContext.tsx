import React, { createContext, useState, ReactNode } from 'react';

interface AlertContextProps {
  show: boolean;
  setShow: (show: boolean) => void;
  msg: string;
  setMsg: (msg: string) => void;
}

const defaultState = {
  show: false,
  setShow: () => {},
  msg: '',
  setMsg: () => {},
};

export const AlertContext = createContext<AlertContextProps>(defaultState);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('');

  return (
    <AlertContext.Provider value={{ show, setShow, msg, setMsg }}>
      {children}
    </AlertContext.Provider>
  );
};
