import { useState, useEffect } from 'react';
import { sliderItems, SliderItemProps } from './localData';


// custom hook to get local data, in a real app a CMS or API will be called with axios asynchronously
export const useGetSliderData = () => {

  const [response, setResponse] = useState([] as SliderItemProps[]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    setError(error);
    try {
      const result = sliderItems;
      console.log(typeof result)
      setLoading(false);
      setResponse(result);
    } catch {
      setError(true);
    } 
      setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // execute once only

  return {
    response,
    error,
    loading
  }
};