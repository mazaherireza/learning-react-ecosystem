import { useState, useEffect, useCallback } from "react";

const sendHTTPRequest = async (URL, config) => {
  const response = await fetch(URL, config);
  const data = await response.json();
  if (!response.ok)
    throw new Error(
      data.message || "Something Went Wrong, Failed To Send Request."
    );
  return data;
};

export const useHTTP = (URL, config, initialData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();

  const clearData = () => setData(initialData);

  const sendRequest = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        const fetchedData = await sendHTTPRequest(URL, {
          ...config,
          body: data,
        });
        setData(fetchedData);
      } catch (error) {
        setError(error.message || "Something Went Wrong.");
      } finally {
        setIsLoading(false);
      }
    },
    [URL, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    isLoading,
    data,
    error,
    sendRequest,
    clearData,
  };
};
