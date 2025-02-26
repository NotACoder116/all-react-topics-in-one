import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const Images = [
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <button
        className="border border-blue-200 mx-4"
        onClick={() => setActive(active > 0 ? active - 1 : Images.length - 1)}
      >
        Prev
      </button>

      <img
        key={active}
        className="w-[400px] fade"
        src={Images[active]}
        alt="slider"
      />

      <button
        className="border border-blue-200 mx-4"
        onClick={() => setActive(active < Images.length - 1 ? active + 1 : 0)}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
