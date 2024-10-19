import { useEffect, useState } from 'react'

const CustomUseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Something Went Wrong");
                }
                const result = await response.json();
        
                setData(result);
            }
            catch(error) {
               setError("Something Went Wrong!");
            }
            finally {
                setIsLoading(false);
            }
        }
    
        if (url) {
            fetchData();
        }
    }, [url]);

  return { data, isLoading, error }
}

export default CustomUseFetch