import { createContext, ReactNode, useContext } from 'react';
import Axios, { AxiosInstance } from 'axios';

interface GreetingsContextValue {
  axiosInstance: AxiosInstance;
}

interface GreetingsProviderProps {
  baseURL?: string;
  children: ReactNode;
}

export const GreetingsContext = createContext<GreetingsContextValue>({
  axiosInstance: Axios.create(),
});

export const useGreetings = () => {
  const greetings = useContext(GreetingsContext);
  if (!greetings) throw new Error('useGreetings must be used within the GreetingsProvider');
  return greetings;
};

export function HelloWorldProvider({ children, baseURL }: GreetingsProviderProps) {
  const axiosInstance = Axios.create({
    baseURL: baseURL || 'https://hello.bitexamples.com'
  });

  return (
    <GreetingsContext.Provider value={{ axiosInstance }}>
      {children}
    </GreetingsContext.Provider>
  );
}
