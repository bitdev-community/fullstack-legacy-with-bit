import { useContext, useState } from 'react';
import { HostContext } from '../providers/host-context-provider';

interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const fetchText = async (url: string): Promise<string> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  }
  return response.text();
}

const useHelloWorld = (): [DataState<string>, () => void] => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { hostUrl } = useContext(HostContext);

  const fetchData = async () => {
    try {
      setLoading(true);
      const text = await fetchText(`${hostUrl}/api/hello`);
      setData(text);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  return [{ data, loading, error }, fetchData];
}

export default useHelloWorld;
