import React, { useEffect, useState } from "react";
import './Pagination.css';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const result = await response.json();
    console.log(result);
    setProducts(result.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full py-4 px-4">
      {products.length > 0 && (
        <div className="product-grid">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return <div className="product" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <h5>{prod.title}</h5>
            </div>;
          })}
        </div>
      )}
      {products.length > 0 && <div className="flex justify-center my-5 cursor-pointer">
          <span onClick={() => setPage(page - 1)} className="border border-black-400 px-4 py-3 bg-cyan-400">Prev</span>
          {
            [...Array(products.length/10)].map((_,i) => {
               return <span key={i} onClick={() => setPage(i+1)} className={`border border-black-400 px-4 py-3 ${page === i+1 ? 'bg-yellow-400' : ''}`}>{ i+1 }</span>
            })
          }
          <span onClick={() => setPage(page + 1)} className="border border-black-400 px-4 py-3 bg-cyan-400">Next</span>
        </div>}
    </div>
  );
};

export default Pagination;
