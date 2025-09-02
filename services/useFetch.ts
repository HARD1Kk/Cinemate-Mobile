import { useEffect, useState } from "react"; // Import useState hook from React

// Custom hook definition with generic type T
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null); // State for fetched data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState<Error | null>(null); // State for error

  // Function to fetch data asynchronously
  const fetchData = async () => {
    try {
      // Fetch logic should be here
      setLoading(true);
      setError(null);
      const result = await fetchFunction();

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An Error Occurred")); // Set error if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);

  return { data, loading, error, refetch: fetchData, reset };

  // Hook does not return anything yet
};
export default useFetch;
