import { useState } from 'react';
import { useGreetings } from '../../providers/greetings-provider';

interface HelloWorldState {
  data: string | null;
  loading: boolean;
  error: Error | null;
}

export const useHelloWorld = (): [HelloWorldState, () => Promise<void>] => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { fetchInstance } = useGreetings();

  const fetchHelloWorld = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetchInstance('/api/hello');
      if (!response.ok) {
        throw new Error('Failed to load hello world');
      }

      const data = await response.text();
      setData(data);
      setLoading(false);
    } catch (e) {
      setError(e as Error);
      setLoading(false);
    }
  };

  const state: HelloWorldState = {
    data,
    loading,
    error,
  };

  return [state, fetchHelloWorld];
};
