import { useEffect, useState } from 'react';

const useGitHubData = (username, endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}${endpoint}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${username}. Please try again later.`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username, endpoint]);

  return { data, loading, error };
};

export default useGitHubData;
