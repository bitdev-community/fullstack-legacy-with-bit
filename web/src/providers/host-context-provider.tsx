import React, { ReactNode, useState, ReactNode } from 'react';
import { HELLO_WORLD_API_HOST_URL } from '/hello-world/api/src/app.ts'

interface HostContextProps {
  hostUrl: string;
  children?: string | ReactNode;
}

export const HelloWorldContext = React.createContext<HostContextProps>({
  apiUrl?: 'https://hello.bitexamples.com',
  children: ReactNode
});

export const HelloWorldProvider = ({ hostUrl, children }) => {
  const [hostUrlState] = useState<string>(hostUrl);

  return (
    <HostContext.Provider value={{ hostUrl: hostUrlState }}>
      {children}
    </HostContext.Provider>
  );
};
