import { useState, useEffect } from 'react';
import axios from 'axios';
import usePrevData from './usePrevData';

export default  function useLoadData(method, url, allData = {}) {
  const prevAllData = usePrevData(allData);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (JSON.stringify(prevAllData) === JSON.stringify(allData)) {
      return;
    }

    let isSubscribed;

    axios({ method, url, data: allData })
    .then(response => isSubscribed ? null : setData(prev => response.data))
    .catch(error => isSubscribed ? null : setError(error.message))
    .finally(() => isSubscribed ? null : setLoading(false));

    return () => isSubscribed = false;
  }, [method, url, prevAllData, allData]);

  return [data, loading, error, setData, setLoading, setError];
}