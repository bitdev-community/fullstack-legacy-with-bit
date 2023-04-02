import React, { ReactNode, useState } from 'react';

interface HostContextProps {
  hostUrl: string;
  children?: string | ReactNode;
}

export const HostContext = React.createContext<HostContextProps>({
  hostUrl: '',
  children: undefined
});

export const HostProvider: React.FC<HostContextProps> = ({ hostUrl, children }) => {
  const [hostUrlState] = useState<string>(hostUrl);

  return (
    <HostContext.Provider value={{ hostUrl: hostUrlState }}>
      {children}
    </HostContext.Provider>
  );
};
