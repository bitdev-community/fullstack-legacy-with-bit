import React, { ReactNode, useState } from 'react';

interface ApiContextProps {
  apiUrl?: string;
  children?: string | ReactNode;
}

export const ApiContext = React.createContext<ApiContextProps>({
  apiUrl: 'https://hello.bitexamples.com'
});

export const ApiProvider = ({ apiUrl, children }: ApiContextProps) => {
  const [apiUrlState] = useState<string>(apiUrl || '');

  return (
    <ApiContext.Provider value={{ apiUrl: apiUrlState }}>
      {children}
    </ApiContext.Provider>
  );
};
