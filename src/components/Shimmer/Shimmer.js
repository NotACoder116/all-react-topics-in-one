import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import MemeCard from "./MemeCard";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  // Define handleScroll function before useEffect to avoid undefined reference
  const handleScroll = useCallback(() => {
    console.log("Scroll Event Triggered");

    // Check if user has scrolled to the bottom
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) {
      console.log("Fetching More Data...");
      fetchMemes();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Fetch memes from API
  const fetchMemes = async () => {
    try {
      const response = await axios.get("https://meme-api.com/gimme/20");
      console.log("API Response:", response.data);
      setData((prevData) => [...prevData, ...response.data.memes]); // Append new data
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  };

  return (
    <div className="flex flex-wrap align-items-center">
      {data.length === 0 ? (
        <ShimmerCard />
      ) : (
        data.map((eachData, i) => (
          <MemeCard key={i} title={eachData.title} imgUrl={eachData.url} />
        ))
      )}
    </div>
  );
};

export default Shimmer;
