import { createContext, ReactNode, useContext } from 'react';

interface GreetingsContextValue {
  fetchInstance: (url: string, options?: RequestInit) => Promise<Response>;
}

interface GreetingsProviderProps {
  baseURL?: string;
  children: ReactNode;
}

export const GreetingsContext = createContext<GreetingsContextValue>({
  fetchInstance: fetch,
});

export const useGreetings = () => {
  const greetings = useContext(GreetingsContext);
  if (!greetings) throw new Error('useGreetings must be used within the GreetingsProvider');
  return greetings;
};

export function GreetingsProvider({ children, baseURL }: GreetingsProviderProps) {
  const fetchInstance = (url: string, options?: RequestInit) =>
    fetch(`${baseURL || 'https://hello.bitexamples.com'}${url}`, options);

  return (
    <GreetingsContext.Provider value={{ fetchInstance }}>
      {children}
    </GreetingsContext.Provider>
  );
}
