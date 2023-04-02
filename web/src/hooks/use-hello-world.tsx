import { useState } from 'react';
import { useApi } from '../providers/api-provider';


interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useHelloWorld = (): [DataState<string>, () => void] => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const api = useApi();


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api('api/hello');
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [{ data, loading, error }, fetchData];
}

export default useHelloWorld;
