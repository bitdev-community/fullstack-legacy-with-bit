import { useState } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
  }
  return response.text();
}

function useApi(): [ApiState<string>, () => void] {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const text = await fetchText(`${process.env.REACT_APP_HELLO_API_HOST}/api/hello`);
      setData(text);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  return [{ data, loading, error }, fetchData];
}

export default useApi;
