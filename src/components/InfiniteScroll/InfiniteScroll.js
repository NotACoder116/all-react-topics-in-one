import React, { useCallback, useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading , setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${page * 10}`);
    const result = await response.json();
    setLoading(false);
    setProduct(result);
    setPage(page+1);
  };

  const throttle = (callback, delay) => {
    let last = 0;
    return function(...args) {
       let now = new Date().getTime();
       if (now-last < delay) {
         return;
       }
       last = now;
       return callback(...args);
    }
  }

  const handleScroll = throttle(() => {
    if (window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight && !loading) {
            fetchProducts();
    }
  }, 500)

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {product && (
        <ul className="mx-5 my-5">
          {product.map((eachData) => {
            return (
              <li
                className="border border-violet rounded-lg px-4 py-4 mb-5"
                key={eachData.id}
              >
                <h3 className="font-bold">{eachData.title}</h3>
                <p>{eachData.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default InfiniteScroll;
