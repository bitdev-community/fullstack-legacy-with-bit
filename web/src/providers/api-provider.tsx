import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import axios, { AxiosInstance } from 'axios';

interface ApiProviderProps {
  baseURL: string;
  children: ReactNode;
}

export const ApiContext = createContext<AxiosInstance | undefined>(undefined);

export const useApi = () => {
  const api = useContext(ApiContext);
  if (!api) throw new Error('useApi must be used within an ApiProvider');
  return api;
};

export const ApiProvider = ({ baseURL, children }: ApiProviderProps) => {
  const api = useMemo(() => axios.create({ baseURL }), [baseURL]);
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
