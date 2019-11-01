import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = (opts === undefined) ? await fetch(url) : await fetch(url, opts);
        if (!response.ok) throw new Error(response.statusText);
        const allData = await response.json();
        setData(allData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts])

  return [data, loading, error];
}