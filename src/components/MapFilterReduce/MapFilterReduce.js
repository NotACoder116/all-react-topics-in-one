import React from "react";

const MapFilterReduce = () => {
  const product = [
    { id: 1, name: "Fridge", price: 30, category: "Electronics" },
    { id: 2, name: "TV", price: 25000, category: "Electronics" },
    { id: 3, name: "Table", price: 500, category: "wooden" },
    { id: 4, name: "Chair", price: 1000, category: "Wooden" },
    { id: 5, name: "Laptop", price: 30000, category: "Electronics" },
  ];
  return (
    <div>
      <h1 className="font-extrabold">Q1: Render all products using Map</h1>
      {product.map((eachItem) => {
        return (
          <div key={eachItem.id}>
            {eachItem.name} - {eachItem.price}Rs
          </div>
        );
      })}

      <h1 className="font-extrabold">
        Filter the product that belongs to electronics category
      </h1>
      {product
        .filter((product) => product.category === "Electronics")
        .map((eachItem) => {
          return (
            <div key={eachItem.id}>
              {eachItem.name} - {eachItem.price}Rs
            </div>
          );
        })}

      <h1 className="font-extrabold">
        Total price of all the products :
      </h1>
      {product.reduce((acc, product) => {
        return acc + product.price;
      }, 0)}
    </div>
  );
};

export default MapFilterReduce;
