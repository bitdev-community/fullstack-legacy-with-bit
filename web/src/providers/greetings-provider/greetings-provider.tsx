import { createContext, ReactNode, useContext } from 'react';
import Axios, { AxiosInstance } from 'axios';

interface HelloWorldContextValue {
  axiosInstance: AxiosInstance;
}

interface HelloWorldProviderProps {
  baseURL?: string;
  children: ReactNode;
}

export const HelloWorldContext = createContext<HelloWorldContextValue>({
  axiosInstance: Axios.create(),
});

export const useGreetings = () => {
  const greetings = useContext(HelloWorldContext);
  if (!greetings) throw new Error('useGreetings must be used within the GreetingsProvider');
  return greetings;
};

export function HelloWorldProvider({ children, baseURL }: HelloWorldProviderProps) {
  const axiosInstance = Axios.create({
    baseURL: baseURL || 'https://hello.bitexamples.com'
  });

  return (
    <HelloWorldContext.Provider value={{ axiosInstance }}>
      {children}
    </HelloWorldContext.Provider>
  );
}
