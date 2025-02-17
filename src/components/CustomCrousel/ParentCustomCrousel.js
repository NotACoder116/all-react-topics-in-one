import React, { useEffect, useState } from 'react'
import CustomCrousel from './CustomCrousel';

const ParentCustomCrousel = () => {
  const [images, setImages] = useState([]);

  const fetchImages = (limit) => {
    try {
      const response = fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
      const results = response.json();
      setImages(results);
    }
    catch(err) {
      
      console.log(`Something went wrong`);
    }
    finally {
      console.log("Finally");
    }
  }

  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <div>
      <CustomCrousel
      images={images}/>
    </div>
  )
}

export default ParentCustomCrousel